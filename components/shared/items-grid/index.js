import { useEffect, useState } from "react"
import GridItem from "./grid-item"



export default function Grid({ dataSet }) {
    const [info, setInfo] = useState([]);

    useEffect(() => {
        getInfo();

    }, []);

    const getInfo = async () => {
        const reponse = await fetch(`/api/${dataSet}`);
        const data = await reponse.json();
        setInfo(data);
    }

    return (
        <div className="mt-10 grid grid-cols-3 w-full">
            {info.map((data, index) => {
                return (
                    <GridItem key={index}
                        title={data.title}
                        author={data.author}
                        link={data.link}
                        image={data.image}
                    />
                )
            })}
        </div>)
}