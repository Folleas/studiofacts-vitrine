// import custom components
import NavBar from "components/Navigation/NavBar";
import { motion } from 'framer-motion';
import Head from "next/head";

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
            <div className="flex flex-col h-screen bg-[#1e2428]">
                <div className="h-[8vh]">
                    <NavBar />
                </div>
                <main className="h-[87vh] overflow-y-scroll">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                    >
                        {children}
                    </motion.div>
                </main>
                <div className="h-[5vh] mx-auto flex items-center justify-between w-3/4 border-t border-[#ededed]">
                    <p className="text-white text-[0.5rem] sm:text-lg">
                        Copyright © 2023 StudioFact Media Group, tous droits réservés.
                    </p>
                    <p className="text-white text-[0.5rem] sm:text-lg">
                        Mentions Légales
                    </p>

                </div>
            </div>
        </>
    );
}