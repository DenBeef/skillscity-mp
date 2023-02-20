import Link from "next/link"


export default function GridItem({ title, author, link, image, id, dataset }) {
    return (
        <div className="w-9/10 rounded-xl m-4 md:mx-6 grid justify-items-center bg-[#D6CCC2] p-4 shadow-xl text-center">
            <Link href={`/single-item/${id}&${dataset}`}><img src={image} width="150" /></Link>
            <h3 className="weight-full">{title}</h3>
            <p>{author}</p>
            <a href={link} className="hover:bg-slate-300 hover:text-slate-900">Web Link</a>
            <p>{dataset}</p>
        </div >
    )
}
