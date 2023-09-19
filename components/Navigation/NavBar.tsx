import Image from 'next/image'

export default function NavBar() {
    return (
        <div className="h-16 bg-black flex items-center justify-between px-6">
            {/* Logo on the left */}
            <div className="flex items-center">
                <Image
                    src="/logo_blanc.png" // Replace with your logo URL
                    alt="Logo"
                    className="mr-2"
                    width={200}
                    height={200}
                />
            </div>

            {/* Links in the middle */}
            <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-gray-900">
                    Accueil
                </a>
                <a href="#" className="text-white hover:text-gray-900">
                    A propos
                </a>
                <a href="#" className="text-white hover:text-gray-900">
                    Realisation
                </a>
                <a href="#" className="text-white hover:text-gray-900">
                    Filiales
                </a>
            </div>

            {/* Socials on the right */}
            <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-gray-900">
                    Facebook
                </a>
                <a href="#" className="text-white hover:text-gray-900">
                    Twitter
                </a>
                <a href="#" className="text-white hover:text-gray-900">
                    Instagram
                </a>
            </div>
        </div>
    )
}