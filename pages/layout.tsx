// import custom components
import Head from "next/head";
import NavBar from "components/Navigation/NavBar";

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
            <div className="flex flex-col h-screen">
                <NavBar />
                <main className="h-full overflow-y-scroll bg-black">
                    <section>{children}</section>
                </main>
                <div className="h-12 bg-black">
                    <p className="text-white">
                        Footer
                    </p>
                </div>
            </div>
        </>
    );
}