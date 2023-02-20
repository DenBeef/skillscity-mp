import ItemDescription from "@/components/shared/item-description";
import GridItem from "@/components/shared/items-grid/grid-item";
import NavBar from "@/components/shared/nav_bar"
import { useRouter } from "next/router"
import { useEffect, useState } from "react";

export default function singleItem() {

    const router = useRouter();
    const [info, setInfo] = useState(null)
    const { itemId } = router.query;


    useEffect(() => {
        if (!itemId) return;

        getItem(itemId);

    }, [itemId]);


    const getItem = async (id) => {
        const response = await fetch(`/api/item-by-id?id=${id}`);
        const data = await response.json();
        const [item] = data;
        setInfo(item);
    };



    if (!info) {
        return (
            <div className="w-full">
                <NavBar />
                <div className="mt-10 flex flex-row">
                    <div>......Loading</div>
                </div>
            </div>
        )
    }
    return (
        <div className="w-full h-full md:h-screen bg-[#EDEDE9]">
            <NavBar />
            <div className="mt-4 md:mt-10 flex flex-col md:flex-row">
                <GridItem title={info.title} author={info.author} link={info.link} image={info.image} />
                <div className="flex flex-col mx-4 md:mx-10 text-justify">
                    <ItemDescription description={info.details} />
                    <div className="flex flex-row justify-between">
                        <a href={`/single-item/${+info.id - 1}`} className="p-2 mt-10 mr-6 bg-blue-100 rounded-34">Previous Item</a>
                        <a href={`/single-item/${+info.id + 1}`} className="p-2 mt-10 mr-2 bg-blue-100 rounded-34">Next Item</a>
                    </div>
                </div>
            </div>
        </div >
    )
}