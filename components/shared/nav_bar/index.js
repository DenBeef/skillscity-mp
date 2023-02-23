import Name from "../../home/hero/index.js";
import NavElement from "./nav_element.js";


export default function NavBar() {

    return (
        <div className="w-full flex items-center flex-col md:flex-row justify-between bg-[#D6CCC2] p-5 shadow-xl">
            <img src="/profile.jpg" className="h-32 md:h-36 rounded-full mx-10" />
            <Name name="Denis Cleary" className="" />
            <nav className="py-2 md:mt-10">
                <NavElement ahref="/" name="HOME" />
                <NavElement ahref="/myResources" name="RESOURCES" />
                <NavElement ahref="/addResources" name="SHARE" />
            </nav>
        </div>
    );
}