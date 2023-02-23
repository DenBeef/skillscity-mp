import NavBar from "@/components/shared/nav_bar";
import Information from "@/components/home/bio";
import { useState, useEffect } from "react";
import Input from "@/components/form/input";
import ListOfResources from "@/components/extra-resources";

export default function Contact() {
    const [name, setName] = useState("");
    const [asset, setAsset] = useState("");
    const [message, setMessage] = useState("");
    const [showSuccess, setShowSuccess] = useState(false);
    const [resources, setResources] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getResources();
    }, []);


    const getResources = async () => {
        setIsLoading(true);
        const reponse = await fetch(`/api/extra-resources`);
        const data = await reponse.json();

        const { resources } = data;

        console.log(resources)

        setResources(resources);
        setIsLoading(false);
    }

    const handleSubmit = async (event) => {

        let payload = {
            name: name,
            asset: asset,
            message: message
        }
        const reponse = await fetch(`/api/share`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });

        const data = await reponse.json();

        setName("");
        setAsset("");
        setMessage("");
        setShowSuccess(true);
        getResources();
    };

    return (
        <div className="w-full h-full bg-[#EDEDE9]">
            <NavBar />
            <Information text={"Have a look at the books and websites that have been helpful for other coders during their journey. You can also share your own resources for others to benefit from."} />
            <form className="flex flex-col space-y-3 place-items-center">
                <Input placeholder="Your name" value={name} onChange={(e) => { setName(e.target.value) }} />
                <Input placeholder="name of website or book" value={asset} onChange={(e) => { setAsset(e.target.value) }} />

                <textarea
                    placeholder="Could you kindly provide a brief description of the content of this website or book, please?"
                    className="bg-gray-100 py-3 px-6 rounded h-36 w-3/4 md:w-1/4"
                    value={message}
                    onChange={(e) => { setMessage(e.target.value) }}
                />

                <button
                    className="bg-blue-200 hover:bg-blue-500 py-3 px-6 rounded text-white w-3/4 md:w-1/4"
                    onClick={handleSubmit}
                    type="button"
                >
                    SUBMIT</button>

                {showSuccess === true ?
                    (<p className="text-white bg-green-300 w-3/4 text-center md:w-1/4">
                        Your content was shared!
                    </p>) :
                    null}

            </form>
            <ListOfResources isLoading={isLoading} resources={resources} />
        </div>
    );
}