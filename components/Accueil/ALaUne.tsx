import { useEffect, useRef, useState } from 'react';
import NewsSlider from './NewsSlider';
import { motion, useAnimation, useInView } from 'framer-motion';

export default function ALaUne({ selectedProjects, data }: any) {
    const [posts, setPosts] = useState<any[]>([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoSlide, setIsAutoSlide] = useState(true);
    const ref = useRef(null);
    const isInView = useInView(ref);
    const controls = useAnimation();
    const [filteredPosts, setFilteredPosts] = useState<any[]>([]);

    useEffect(() => {
        if (isInView) {
            controls.start('visible');
        }
    }, [controls, isInView]);

    const imageVariants = {
        hidden: {
            opacity: 0,
        },
        visible: () => ({
            opacity: 1,
            transition: {
                duration: 1.5,
            },
            delay: 2,
        }),
    };
    useEffect(() => {
        // Make the API request to localhost:3000/post
        fetch('https://studiofact.group/post')
            .then((response) => response.json())
            .then((responseData: any) => {
                setPosts(responseData.postData); // Assuming the API returns an array of post objects
                //make a single line to find in dataelem._id === project
                const filteredPostsTemp: any[] = [];
                selectedProjects?.forEach((project: any) => {
                    console.log();
                    if (!project) return;
                    console.log("project")
                    console.log(project)
                    console.log(responseData.postData)
                    const post = responseData.postData.filter((post: any) => post.projectID === data.find((elem: any) => elem._id === project).title);
                    if (post)
                        post.map((elem: any) => filteredPostsTemp.push(elem));
                });
                setFilteredPosts(filteredPostsTemp);
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, [data]);

    useEffect(() => {
        const slideInterval = setInterval(() => {
            if (isAutoSlide === true && filteredPosts.length > 0)
                setCurrentSlide((prevSlide) => (prevSlide + 1) % filteredPosts.length);
            else
                setIsAutoSlide(true);
        }, 5000);

        return () => {
            clearInterval(slideInterval);
        };
    }, [filteredPosts.length, isAutoSlide]);

    const prevSlide = () => {
        let prev;
        if (currentSlide === 0)
            prev = filteredPosts?.length - 1;
        else
            prev = (currentSlide - 1) % filteredPosts?.length;

        setIsAutoSlide(false);
        setCurrentSlide(prev);
    };

    const nextSlide = () => {
        const next = (currentSlide + 1) % filteredPosts?.length;

        setIsAutoSlide(false);
        setCurrentSlide(next);
    };

    if (!selectedProjects)
        return <></>
    console.log("filteredPosts")
    console.log(filteredPosts)
    return (
        <motion.div ref={ref} initial='hidden' animate={controls} variants={imageVariants} className="mt-8 w-full h-full relative">
            <div className="w-full bg-black h-[300px] xl:h-[600px] relative overflow-hidden">
                {filteredPosts?.map((post: any, index: number) => (
                    <NewsSlider key={post._id} item={post} currentSlide={index === currentSlide} />
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
                {filteredPosts?.map((_: any, index: number) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-3 w-3 rounded-full bg-[rgba(30,36,40,1)] cursor-pointer ${index === currentSlide ? 'opacity-100' : 'opacity-50'}`}
                    ></button>
                ))}
            </div>
        </motion.div>
    );
}