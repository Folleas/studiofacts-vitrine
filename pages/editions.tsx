import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { TalentCard } from './apropos';

const newsItems = [
    {
        imageSrc: '/samu.png',
        title: 'News Title 1',
        subtitle: 'Subtitle 1',
        buttonLabel: 'Read More',
    },
    {
        imageSrc: '/samu.png',
        title: 'News Title 2',
        subtitle: 'Subtitle 2',
        buttonLabel: 'Read More',
    },
    {
        imageSrc: '/samu.png',
        title: 'News Title 3',
        subtitle: 'Subtitle 2',
        buttonLabel: 'Read More',
    },
    {
        imageSrc: '/samu.png',
        title: 'News Title 4',
        subtitle: 'Subtitle 2',
        buttonLabel: 'Read More',
    },
    // Add more news items as needed
];

const books = [
    {
        imageSrc: '/samu.png',
        title: 'Book Title 1',
        subtitle: 'Subtitle 1',
        buttonLabel: 'Buy Now',
    },
    {
        imageSrc: '/samu.png',
        title: 'Book Title 2',
        subtitle: 'Subtitle 2',
        buttonLabel: 'Buy Now',
    },
    {
        imageSrc: '/samu.png',
        title: 'Book Title 3',
        subtitle: 'Subtitle 3',
        buttonLabel: 'Buy Now',
    },
    {
        imageSrc: '/samu.png',
        title: 'Book Title 3',
        subtitle: 'Subtitle 3',
        buttonLabel: 'Buy Now',
    },
    {
        imageSrc: '/samu.png',
        title: 'Book Title 3',
        subtitle: 'Subtitle 3',
        buttonLabel: 'Buy Now',
    },
    {
        imageSrc: '/samu.png',
        title: 'Book Title 3',
        subtitle: 'Subtitle 3',
        buttonLabel: 'Buy Now',
    },
    {
        imageSrc: '/samu.png',
        title: 'Book Title 3',
        subtitle: 'Subtitle 3',
        buttonLabel: 'Buy Now',
    },
    {
        imageSrc: '/samu.png',
        title: 'Book Title 3',
        subtitle: 'Subtitle 3',
        buttonLabel: 'Buy Now',
    },
    {
        imageSrc: '/samu.png',
        title: 'Book Title 3',
        subtitle: 'Subtitle 3',
        buttonLabel: 'Buy Now',
    }
    // Add more books as needed
];

function BookCard({ item }) {
    return (
        <div className="p-4">
            <div className="relative w-[250px] h-[375px]">
                <Image
                    src={item.imageSrc}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <h2 className="text-2xl font-bold mt-2">{item.title}</h2>
            <p className="text-lg mt-1">{item.subtitle}</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded">
                {item.buttonLabel}
            </button>
        </div>
    );
}

function NewsSlider({ item, currentSlide }) {
    return (
        <div className={`absolute transition-transform w-full duration-300 ${currentSlide === item ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="relative w-full h-[400px]">
                <Image
                    src={newsItems[item].imageSrc}
                    alt={newsItems[item].title}
                    layout="fill"
                    objectFit="cover"
                />
                <div className="absolute inset-0 bg-black opacity-50" />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                    <h2 className="text-4xl font-bold">{newsItems[item].title}</h2>
                    <p className="text-2xl">{newsItems[item].subtitle}</p>
                    <button className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded">
                        {newsItems[item].buttonLabel}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default function EditionsPage() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % newsItems.length);
        }, 5000);

        return () => {
            clearInterval(slideInterval);
        };
    }, []);

    const prevSlide = () => {
        const prev = (currentSlide - 1 + newsItems.length) % newsItems.length;
        setCurrentSlide(prev);
    };

    const nextSlide = () => {
        const next = (currentSlide + 1) % newsItems.length;
        setCurrentSlide(next);
    };

    return (
        <div className="flex flex-col justify-center items-center h-full w-3/4 mx-auto">
            <div className="w-full p-6 shadow-md rounded-lg min-h-[45vh]">
                <div className="mb-4">
                    <h1 className="text-2xl xl:text-6xl font-bold text-white mb-8">
                        Éditions :<br />Une maison d'édition spécialisée dans la littérature du réel
                    </h1>
                </div>
                <p className="text-gray-200 text-4xl">
                    La vocation de nos livres est de raconter le réel. Sans goût pour le scandale ou pour l’écume du jour, nous publions des histoires fortes, porteuses de sens.
                </p>
            </div>

            <div className="mt-8 w-full relative">
                <div className="w-full h-[400px] relative overflow-hidden">
                    {newsItems.map((_, index) => (
                        <NewsSlider key={index} item={index} currentSlide={currentSlide} />
                    ))}
                </div>
                <div className="absolute top-1/2 -mt-4 left-0 flex items-center space-x-4">
                    <button onClick={prevSlide} className="text-white px-4 py-2 rounded">
                        {'<'}
                    </button>
                </div>
                <div className="absolute top-1/2 -mt-4 right-0 flex items-center space-x-4">
                    <button onClick={nextSlide} className="text-white px-4 py-2 rounded">
                        {'>'}
                    </button>
                </div>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                    {newsItems.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`h-3 w-3 rounded-full bg-white cursor-pointer ${index === currentSlide ? 'opacity-100' : 'opacity-50'}`}
                        ></button>
                    ))}
                </div>
            </div>

            <div className="mt-8">
                <h2 className="text-2xl font-bold">Featured Books</h2>
                <div className="flex flex-wrap">
                    {books.map((book, index) => (
                        <BookCard key={index} item={book} />
                    ))}
                </div>
            </div>

            <div className="mt-8">
                <h2 className="text-2xl font-bold">Featured Books</h2>
                <div className="flex justify-center">
                    <TalentCard
                        name="Roxane Rouas-Rafowicz"
                        occupation="Avocate et entrepreneuse"
                        bio="Roxane Rouas-Rafowicz est avocate de formation et entrepreneuse. Diplôm original exclusivement issu d'histoires vraies produire du contenu original exclusivement produire du contenu original exclusivement produire du contenu original exclusivement."
                        imageSrc="roxane2.png"
                    />
                    <TalentCard
                        name="Roxane Rouas-Rafowicz"
                        occupation="Avocate et entrepreneuse"
                        bio="Roxane Rouas-Rafowicz est avocate de formation et entrepreneuse. Diplôm du contenu original exclusivement issu d'histoires vraies produire du contenu original exclusivement produire du contenu original exclusivement produire du contenu original exclusivement."
                        imageSrc="roxane2.png"
                    />
                    <TalentCard
                        name="Roxane Rouas-Rafowicz"
                        occupation="Avocate et entrepreneuse"
                        bio="Roxane Rouas-Rafowicz est avocat produire du contenu original exclusivement produire du contenu original exclusivement produire du contenu original exclusivement produire du contenu original exclusivement produire du contenu original exclusivement produire du contenu original exclusivement produire du contenu original exclusivement issu d'histoires vraies."
                        imageSrc="roxane2.png"
                    />
                </div>
            </div>

        </div>
    );
}