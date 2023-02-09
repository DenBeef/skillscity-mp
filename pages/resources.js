import NavBar from "@/components/shared/nav_bar";
import Grid from "@/components/shared/items-grid";
import Information from "@/components/home/bio";

export default function resources() {
    return (
        <div className="h-screen bg-[#EDEDE9]">
            <NavBar />
            <Information text="I have compiled a range of resources that I have utilized to further my knowledge and development as a software developer." />
            <Grid dataSet={'res_list'} />

        </div>
    )
}