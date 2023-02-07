

export default function NavElement(props) {
    return (
        <a className="rounded-lg px-3 text-slate-700 font-medium hover:bg-slate-300 hover:text-slate-900" 
        href={props.ahref}>
            {props.name}
            </a>
    );
};