import { signIn, signOut, useSession } from "next-auth/react"
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ScreeningRoom from "./ScreeningRoom";

const Admin = () => {
    const { data: session }: any = useSession();
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [collections, setCollections]: any = useState([]);

    useEffect(() => {
        if (session === null) {
            setIsAuthenticated(false);
        } else if (session !== undefined && session.accessToken !== undefined && new Date(session.accessToken.expiresAt) > new Date(Date.now())) {
            setIsAuthenticated(true);
        }
    }, [session]);

    if (isAuthenticated) {
        return (
            <ScreeningRoom></ScreeningRoom>
        )
    }

    return (
        <div className="w-[100vw] pt-[8vh] h-[80vh] flex justify-center mt-[8vh] text-center content-center items-center">

            <div className="bg-blue-500 hover:bg-blue-700 h-[60px] text-white justify-center flex font-bold py-2 px-4 rounded ml-4">
                <button onClick={() => signIn()} className="">
                    Se connecter
                </button>
            </div>

            <div unselectable='on' className="bg-gray-400 h-[60px] text-white items-center flex font-bold py-2 px-4 rounded ml-4">
                {/* <a href="mailto:" className="h-full flex items-center"> */}
                    Envoyer un mail pour obtenir un accès
                {/* </a> */}
            </div>
        </div>
    )
};

export default Admin;