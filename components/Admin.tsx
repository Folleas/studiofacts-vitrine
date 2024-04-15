import { signIn, signOut, useSession } from "next-auth/react"
import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import ScreeningRoom from "./ScreeningRoom";

const Admin = () => {
    const { data: session }: any = useSession();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [selectedTags, setSelectedTags]: any = useState({});
    const [showForm, setShowForm] = useState(false); // Add state variable for form visibility
    const tags = ['tiretezit aozeetjn oezijntr iozejtr ', 'taazerjazepiorjg4', 'tag1', 'tag2', 'arzeuiprjuaziep', 'tag3', 'tag4'];
    // const formData = new FormData(event.currentTarget)

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
    const handleTagClick = (tag: string) => {
        console.log(selectedTags)
        setSelectedTags((prevState: any) => ({ ...prevState, [tag]: !prevState[tag] }));
    };

    const handleFormButtonClick = () => {
        setShowForm(!showForm);
    };
    const handleSendButtonClick = () => {
        fetch('/api/send-email', {
            method: 'POST',
            body: undefined
        })
            .then(response => {
                if (response.ok) {
                    // Email sent successfully
                    console.log('Email sent!');
                } else {
                    // Error sending email
                    console.error('Error sending email');
                }
            })
            .catch(error => {
                console.error('Error sending email:', error);
            });
    };
    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        let isFormValid = true;
        console.log(formData)
        // Check if any required fields are empty
        const requiredFields = ['firstName', 'lastName', 'email', 'password', 'confirmPassword', 'company', 'department', 'rights', 'address', 'city', 'postalCode', 'country'];
        requiredFields.forEach(field => {
            if (!formData.get(field)) {
                console.log('invalid: ' + field)
                isFormValid = false;
            }
        });
        const selectedTagsArray = Object.keys(selectedTags).filter(tag => selectedTags[tag]);
        formData.append('tags', selectedTagsArray.join(','));
        const object: any = {};
        formData.forEach((value, key) => object[key] = value);
        const json = JSON.stringify(object);
        if (isFormValid) {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                body: json
            }).then(response => {
                if (response.ok) {
                    // Email sent successfully
                    console.log('Email sent!');
                } else {
                    // Error sending email
                    console.error('Error sending email');
                }
            }).catch(error => {
                console.error('Error sending email:', error);
            });
        } else {
            console.error('Please fill in all required fields');
        }
    }
    return (
        <div className="flex justify-center space-y-3 h-[100vh] flex-col items-center">
            <div className="w-[100vw] py-[8vh] h-[20vh]  flex justify-center mt-[8vh] text-center content-center items-center">
                <div className="bg-blue-500 hover:bg-blue-700 text-white justify-center flex font-bold py-2 px-4 rounded ml-4">
                    <button onClick={() => signIn()} className="">
                        Se connecter
                    </button>
                </div>
                <div unselectable='on' className={`${showForm ? 'bg-red-500 hover:bg-red-700' : 'bg-green-400 hover:bg-green-600'} text-white items-center flex font-bold py-2 px-4 rounded ml-4`}>
                    <button onClick={handleFormButtonClick}>
                        {showForm ? 'Fermer le formulaire' : 'Faire une demande pour obtenir un accès'}
                    </button>
                </div>
            </div>
            {showForm && ( // Render the form if showForm is true
                <form onSubmit={onSubmit} className="flex  flex-col mb-12">
                    <div className="flex mb-4">
                        <input type="text" name="firstName" placeholder="Prénom" className="text-black border w-full border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-1 focus:ring-blue-500" required />
                        <input type="text" name="lastName" placeholder="Nom" className="text-black border w-full mx-6 border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-1 focus:ring-blue-500" required />
                        <input type="email" name="email" placeholder="E-mail" className="text-black border w-full border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-1 focus:ring-blue-500" required />
                    </div>
                    <div className="flex mb-4 w-2/3">
                        <input type="password" name="password" placeholder="Mot de passe" className="text-black border w-full mr-6 border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-1 focus:ring-blue-500" required />
                        <input type="password" name="confirmPassword" placeholder="Confirmation du mot de passe" className="text-black border w-full border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-1 focus:ring-blue-500" required />
                    </div>
                    <div className="flex mb-4">
                        <input type="text" name="company" placeholder="Société" className="text-black border w-full border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-1 focus:ring-blue-500" required />
                        <input type="text" name="department" placeholder="Département" className="text-black border w-full mx-6 border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-1 focus:ring-blue-500" required />
                        <input type="text" name="rights" placeholder="Droits" className="text-black border w-full border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-1 focus:ring-blue-500" required />
                    </div>
                    <div className="flex mb-4">
                        <input type="text" name="address" placeholder="Adresse" className="text-black border mr-6 w-full border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-1 focus:ring-blue-500" required />
                        <input type="text" name="city" placeholder="Ville" className="text-black border w-full mr-6 border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-1 focus:ring-blue-500" required />
                        <input type="text" name="postalCode" placeholder="Code postal" className="text-black border mr-6 w-full border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-1 focus:ring-blue-500" required />
                        <input type="text" name="country" placeholder="Pays" className="text-black border w-full border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-1 focus:ring-blue-500" required />
                    </div>
                    <label htmlFor="tag" className="mb-3">Préférence</label>
                    <div className="flex w-3/4 mb-3 flex-wrap space-x-3 gap-y-3">
                        {tags.map((tag, index) => (
                            <button key={index} onClick={() => handleTagClick(tag)} className={`border w-fit border-gray-300 rounded px-3 py-2 ${selectedTags[tag] ? 'bg-white text-black' : 'text-white'}`}>
                                {tag}
                            </button>
                        ))}
                    </div>
                    <div className="flex flex-col justify-between">
                        <div className="flex items-center">
                            <input type="checkbox" name="communications" className="mr-1" />
                            <label htmlFor="communications">J'accepte de recevoir les communications de Studiofact Rights</label>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" name="conditions" className="mr-1" />
                            <label htmlFor="conditions">
                                J'accepte les conditions générales d'utilisation
                                <a href="/mentionslegales" className="ml-1 text-blue-500 underline">Conditions générales d'utilisation</a>
                            </label>
                        </div>
                        <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                            Envoyer
                        </button>
                    </div>
                </form>
            )}
        </div>
    )
};

export default Admin;
