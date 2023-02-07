export default function Lists(props) {
    return (
        <div className="grid justify-items-center font-serif font-medium text-lg">
            <div className="w-1/2 text-center bg-slate-50 p-2 shadow-xl">
                <p>{ props.title }</p>
                <ul className="mt-5 mb-5 grid grid-cols-3 w-full">
                    {props.arr.map((item) => {
                        return (
                            <li>▹ { item }</li>
                        )
                    })}
                </ul>
            </div>
        </div>
)};