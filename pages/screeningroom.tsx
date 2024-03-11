import Admin from "../components/Admin";
import { useState } from "react";
import { SessionProvider } from "next-auth/react"

const Home = ({ session }: any) => {
    const [interval, setInterval]: any = useState(0);
    return (
        <SessionProvider session={session} refetchInterval={interval}>
            <div className="h-full w-full bg-[#1e2428]">
                <Admin ></Admin>
            </div>
        </SessionProvider>
    )
};

export default Home;