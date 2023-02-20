export default function Lists(props) {
    return (
        <div className="grid justify-items-center font-serif font-medium text-lg">
            <div className="md:w-1/2 text-center bg-[#D6CCC2] p-2 shadow-xl rounded-xl">
                <p>{props.title}</p>
                <ul className="mt-5 ml-10 mb-5 grid grid-cols-2 md:grid-cols-3 w-full text-left">
                    {props.arr.map((item, index) => {
                        return (
                            <li key={index} className="list-disc">{item}</li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
};