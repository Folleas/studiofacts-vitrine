import ALaUne from 'components/Accueil/ALaUne';
import BookList from 'components/Accueil/BookList';
import Team from 'components/Accueil/Team';
import TitleParagraph from 'components/Accueil/TitleParagraph';
import { motion, useAnimation, useInView } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import Image from "next/legacy/image";

export default function EditionsPage({ data, selectedProjects }: any) {
    const ref = useRef(null);
    const isInView = useInView(ref);
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start('visible');
        }
    }, [controls, isInView]);

    const imageVariants = {
        hidden: {
            opacity: 0,
        },
        visible: (custom: any) => ({
            opacity: 1,
            transition: {
                duration: custom * 0.75,
            },
            delay: 2,
        }),
    };
    console.log("selectedProjects")
    console.log(selectedProjects)
    return (
        <div className="flex flex-col justify-center items-center h-full w-full md:p-10 mt-[8vh] overflow-x-hidden">
            <TitleParagraph color1={'bg-[#59AA6F]'} color2={'bg-[#FF3133]'} top1={150} top2={50} left1={600} left2={400} x1={500} x2={400} y1={100} y2={-200} title="Éditions : Une maison d'édition spécialisée dans la littérature du réel" paragraph="La vocation de nos livres est de raconter le réel. Sans goût pour le scandale ou pour l’écume du jour, nous publions des histoires fortes, porteuses de sens." ></TitleParagraph>

            <ALaUne data={data} selectedProjects={selectedProjects.editions}></ALaUne>

            <div className='w-full h-full p-2'>
                <BookList data={data}></BookList>

                <Team isPerson={false} talents={[
                    {
                        name: "Clarisse Cohen",
                        occupation: "Directrice Générale Éditions",
                        bio: "Clarisse Cohen is an astute leader driving the success of editorial ventures...",
                        imageSrc: "clarisse.webp"
                    },
                    {
                        name: "Gaëlle Job",
                        occupation: "Attachée de Presse",
                        bio: "Gaëlle Job excels in public relations with a keen understanding of media outreach strategies...",
                        imageSrc: "Gaelle_job.webp"
                    },
                ]}></Team>

                <motion.div ref={ref} initial="hidden" variants={imageVariants}
                    animate={controls}
                    custom={2} className="w-full shadow-md rounded-lg min-h-[45vh]">
                    <h1 className="text-2xl md:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-6">Suivez-nous sur Instagram</h1>
                    <div className="flex items-center">
                        <div className="w-[50px] h-[50px] mr-2">
                            <Image
                                src={'/instagram.svg'}
                                alt={`instagram icon`}
                                className='w-[50px] h-[50px]'
                                width={10}
                                height={10}
                                layout='responsive'
                            />
                        </div>
                        <p className="text-gray-400 text-3xl">
                            @studiofact.editions
                        </p>
                    </div>
                    <div className='flex justify-center my-16'>
                        <iframe title="oui" className="w-[1000px] h-[400px] md:h-[900px]" id="instagram-embed-1" src="https://www.instagram.com/studiofact.editions/embed/" allowFullScreen={true} frameBorder="0" height="560" data-instgrm-payload-id="instagram-media-payload-1"></iframe>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export async function getServerSideProps() {
    const dataResponse = await fetch('https://studiofact.group/project/type/Editions');
    const data: any = await dataResponse.json();

    const selectedProjectsResponse = await fetch("https://studiofact.group/alaune");
    const selectedProjectsData: any = await selectedProjectsResponse.json();

    return {
        props: {
            data: data.realisationProjects.sort((a: any, b: any) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime()),
            selectedProjects: selectedProjectsData.aLaUneData[0]
        }
    };
}
