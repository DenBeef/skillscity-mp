import TagLine from "../tag-line";

export default function Name(props) {
    return (
    <div className="text-center mt-10">    
        <h1 className="text-4xl text-slate-700 font-medium">{ props.name }</h1>
        <TagLine tag="Bootcamp Software Engineer" />
    </div>
    );
}