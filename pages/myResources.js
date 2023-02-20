import Grid from "@/components/shared/items-grid";
import NavBar from "@/components/shared/nav_bar";
import Information from "@/components/home/bio";



export default function myBooks() {

  return (
    <div className="w-full h-full bg-[#EDEDE9]">
      <NavBar />
      <Information text="I have read several books and utilized various online resources to advance my journey towards becoming a software engineer. The following are some of the resources I have used in this pursuit." />
      <Grid dataSet={'books'} />
    </div>
  );
}