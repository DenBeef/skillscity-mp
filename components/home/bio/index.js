

export default function Information({ text }) {
    return (
        <div className="grid justify-items-center">
            <div 
                className="w-1/2 flex text-center m-5 p-5 shadow-xl font-serif font-medium text-lg bg-slate-50">
                { text }            
            </div>
            
        </div>
    )
}