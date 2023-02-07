import NavBar from "@/components/home/nav_bar";
import BookGrid from "@/components/home/book-grid";
import { ResList } from "./api/res_list";
import Information from "@/components/home/bio";

export default function resources() {
    return (
        <div>
            <NavBar />
            <Information text="I have compiled a range of resources that I have utilized to further my knowledge and development as a software developer." />
            <BookGrid Books={ ResList }/>

        </div>
    )
}