import { motion } from 'framer-motion';
import Image from "next/legacy/image";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { SocialIcon } from 'react-social-icons'

const links = [
    {
        url: '/',
        label: 'Accueil',
        subLinks: undefined
    },
    // {
    //     url: '/organigramme',
    //     label: 'Organigramme',
    //     subLinks: undefined
    // },
    {
        url: '/realisations',
        label: 'Réalisations',
        subLinks: undefined
    },
    {
        url: '/rights',
        label: 'Rights',
        subLinks: undefined
    },
    {
        url: '/filiales',
        label: 'Filiales',
        subLinks: [
            {
                url: 'editions',
                label: 'Editions'
            },
            {
                url: 'audio',
                label: 'Audio'
            },
            {
                url: 'stories',
                label: 'Stories'
            },
            {
                url: 'presse',
                label: 'Presse'
            },
            {
                url: 'doc',
                label: 'Doc'
            },
            // {
            //     url: 'lab',
            //     label: 'Lab'
            // },
            {
                url: 'live',
                label: 'Live'
            },
        ]
    }
];

export default function NavBar() {
    const path = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeHoverIndex, setActiveHoverIndex] = useState(null);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    const handleMouseEnter = (index: any) => {
        setActiveHoverIndex(index);
    };

    const handleMouseLeave = () => {
        setActiveHoverIndex(null);
    };
    return (
        <div className="h-[8vh] relative backdrop-blur-lg bg-[rgba(0,0,0,0.25)] w-full xl:p-10 mx-auto flex items-center justify-center shadow-md"> {/* Add relative to the container */}
            <div className="flex items-center justify-between xl:px-6 py-4 w-full h-full">
                <div className="lg:hidden flex-none w-1/6">
                </div>
                {/* Logo */}
                <div className="flex items-center justify-center h-[100px] w-[300px]">
                    <a href='/'>
                        <Image
                            src="/logo_blanc.png"
                            alt="Logo"
                            className='mr-2 object-contain p-10'
                            width={250}
                            height={100}
                            layout='fixed'
                        />
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden w-1/6 justify-center flex">
                    <button
                        className="text-white text-2xl"
                        onClick={toggleMobileMenu}
                    >
                        &#9776; {/* Hamburger icon */}
                    </button>
                </div>

                {/* Desktop Menu */}
                <nav className="hidden xl:flex lg:flex w-full">
                    <ul className="flex w-full justify-end space-x-2 md:space-x-8 2xl:space-x-20">
                        {links.map((link, index) => (
                            <li key={link.url} className="relative group">
                                {link.subLinks ? (
                                    <div
                                        className="relative group"
                                        onMouseEnter={() => handleMouseEnter(index)}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <Link
                                            href={link.url + ''}
                                            scroll={true}
                                            className={`mr-10 outline-black outline-8 text-xs xl:text-xl 2xl:text-2xl ${link.url === path ? 'font-bold' : ''}`}
                                        >
                                            {link.label}
                                        </Link>
                                        <motion.div
                                            className={`absolute mt-2 bg-[#1e2428] p-2 rounded top-5 ${activeHoverIndex === index ? 'block' : 'hidden'}`}
                                        >
                                            {link.subLinks.map((item, subIndex: any) => (
                                                <Link
                                                    scroll={true}
                                                    key={subIndex}
                                                    href={`/${item.url}`}
                                                    className="group text-white hover:text-gray-400 text-xs xl:text-lg block px-2 py-1 z-20"
                                                >
                                                    {item.label}
                                                </Link>
                                            ))}
                                        </motion.div>
                                    </div>
                                ) : (
                                    <Link
                                        href={link.url + ''}
                                        scroll={true}
                                        className={`mr-10 outline-black outline-8 text-xs xl:text-xl 2xl:text-2xl ${link.url === path ? 'font-bold' : ''}`}
                                    >
                                        {link.label}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                    <div className="flex items-center justify-end space-x-4">
                        <SocialIcon style={{ height: 32, width: 32 }} url="https://www.instagram.com/studiofact.officiel/" />
                        <SocialIcon style={{ height: 32, width: 32 }} url="https://www.facebook.com/studiofact.officiel" />
                        <SocialIcon style={{ height: 32, width: 32 }} url="https://twitter.com/StudioFactOff" />
                        <SocialIcon style={{ height: 32, width: 32 }} url="https://www.linkedin.com/company/studiofact/posts/?feedView=all" />
                    </div>
                </nav>
            </div>

            {/* Mobile Menu */}
            <motion.div
                className={`fixed top-0 left-0 w-full h-screen z-[160] ${isMobileMenuOpen ? ' translate-x-0' : ' -translate-x-full'}`}
                initial={{ x: '-100%' }}
                animate={{ x: isMobileMenuOpen ? 0 : '-100%' }}
                transition={{ duration: 0.3 }}
            >
                <div className="container mx-auto h-full flex bg-[#1e2428] flex-col justify-center py-8">
                    <ul className={''}>
                        {links.map((link) => (
                            <li key={link.url}>
                                <Link

                                    href={link.url + ''}
                                    className={`text-white hover:text-gray-400 text-2xl xl:text-lg px-6 py-2 ${link.url === path ? 'font-bold' : ''}`}
                                    onClick={toggleMobileMenu}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="py-2 right-6 flex fixed top-6 space-x-2 justify-start">
                        <SocialIcon style={{ height: 42, width: 42 }} url="https://www.instagram.com/studiofact.officiel/" />
                        <SocialIcon style={{ height: 42, width: 42 }} url="https://www.facebook.com/studiofact.officiel" />
                        <SocialIcon style={{ height: 42, width: 42 }} url="https://twitter.com/StudioFactOff" />
                        <SocialIcon style={{ height: 42, width: 42 }} url="https://www.linkedin.com/company/studiofact/posts/?feedView=all" />
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
