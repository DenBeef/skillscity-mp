

export default function Information({ text }) {
    return (
        <div className="grid justify-items-center ">
            <div
                className="w-full md:w-2/3 flex text-center m-5 p-5 shadow-xl font-serif font-medium text-lg bg-[#D6CCC2] rounded-xl">
                {text}
            </div>

        </div>
    )
}