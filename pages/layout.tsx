// import custom components
import NavBar from "components/Navigation/NavBar";
import { motion } from 'framer-motion';
import Head from "next/head";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {// styles the main html tag
    return (
        <>
            <Head>
                <meta property="og:url" content="https://next-enterprise.vercel.app/" />
                <meta
                    property="og:image"
                    content="https://raw.githubusercontent.com/Blazity/next-enterprise/main/project-logo.png"
                />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta name="twitter:card" content="summary_large_image" />
                <title>Studio Facts</title>
            </Head>
            <div className="flex flex-col relative bg-[#1e2428]">
                <div className="z-30 fixed top-0 left-0 w-full">
                    <NavBar />
                </div>
                <main className=""> {/* Add padding-top to accommodate Navbar */}
                    <motion.div
                        className="w-full h-full"
                        id="top"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                    >
                        {children}
                    </motion.div>
                </main>
                <div className="z-10 fixed bottom-0 left-0 w-full">
                    <div className="h-[5vh] w-full flex items-center justify-between p-4 px-10 backdrop-blur-lg">
                        <p className="text-white text-[0.5rem] sm:text-2xl">
                            Copyright © 2023 StudioFact Media Group, tous droits réservés.
                        </p>
                        <Link href={'/mentionslegales'} className="text-white text-[0.5rem] sm:text-2xl">
                            Mentions Légales
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}