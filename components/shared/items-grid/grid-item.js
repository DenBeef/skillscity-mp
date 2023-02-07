
export default function GridItem({title, author, link, image}) {
        return (
        <div className="w-9/10 mx-10 grid justify-items-center bg-[#D6CCC2] p-4 shadow-xl text-center">
            <img src={image} width="150"/>
            <h3 className="weight-full">{title}</h3>
            <p>{author}</p>
            <a href={link} className="hover:bg-slate-300 hover:text-slate-900">Web Link</a>

        </div>
    )
}
