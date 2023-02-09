import Image from 'next/image'
import Name from "../../home/hero/index.js";
import NavElement from "./nav_element.js";
import profile from "../../../src/images/profile.png"

export default function NavBar() {

    return (
        <div className="w-full flex justify-between bg-[#D6CCC2] p-5 shadow-xl">
            <Image src={profile} className="object-none w-36 h-36 rounded-full custom-position mx-10" />
            <Name name="Denis Cleary" className="" />
            <nav className="py-2 mt-10">
                <NavElement ahref="/" name="HOME" />
                <NavElement ahref="myBooks" name="BOOKS" />
                <NavElement ahref="resources" name="RESOURCES" />
            </nav>
        </div>
    );
}