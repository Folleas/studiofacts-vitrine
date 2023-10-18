import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const links = [
    {
        url: '/',
        label: 'Accueil'
    },
    {
        url: '/apropos',
        label: 'A propos'
    },
    {
        url: '/realisations',
        label: 'Réalisations'
    },
    {
        url: '/posts',
        label: 'Posts'
    },
    {
        url: '/filiales',
        label: 'Filiales'
    }
];

export default function NavBar() {
    const path = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="relative h-full w-3/4 mx-auto flex items-center justify-center border-b border-[#ededed] shadow-md"> {/* Add relative to the container */}
            <div className="container mx-auto flex items-center justify-between px-6 py-4 ">
                {/* Logo */}
                <div className="flex items-center">
                    <Image
                        src="/logo_blanc.png"
                        alt="Logo"
                        className="mr-2"
                        width={200}
                        height={200}
                    />
                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden">
                    <button
                        className="text-white text-2xl"
                        onClick={toggleMobileMenu}
                    >
                        &#9776; {/* Hamburger icon */}
                    </button>
                </div>

                {/* Desktop Menu */}
                <nav className="hidden md:flex xl:flex lg:flex space-x-10">
                    <ul className="flex">
                        {links.map((link, index) => (
                            <li key={link.url}>
                                <Link href={link.url} className={`relative mr-10 hover:text-gray-400 text-xs xl:text-lg ${link.url === path ? 'font-bold' : ''}`}>
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            {/* Mobile Menu */}
            <motion.div
                className={`fixed top-0 left-0 w-full h-full z-50${isMobileMenuOpen ? ' translate-x-0' : ' -translate-x-full'}`}
                initial={{ x: '-100%' }}
                animate={{ x: isMobileMenuOpen ? 0 : '-100%' }}
                transition={{ duration: 0.3 }}
            >
                <div className="container mx-auto h-full flex bg-[#1e2428] flex-col justify-center py-8">
                    <ul>
                        {links.map((link, index) => (
                            <li key={link.url}>
                                <Link
                                    href={link.url}
                                    className={`text-white hover:text-gray-400 text-xs xl:text-lg px-6 py-2 ${link.url === path ? 'font-bold' : ''}`}
                                    onClick={toggleMobileMenu}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </motion.div>
        </div>
    );
}
