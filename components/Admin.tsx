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
        <div className="w-[100vw] pt-[8vh] h-[80vh] flex justify-center">
            <button onClick={() => signIn()}>Se connecter</button>
        </div>
    )
};

export default Admin;