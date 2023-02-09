import Grid from "@/components/shared/items-grid";
import NavBar from "@/components/shared/nav_bar";
import Information from "@/components/home/bio";



export default function myBooks() {

  return (
    <div className="h-screen bg-[#EDEDE9]">
      <NavBar />
      <Information text="I have read a number of books thus far on my journey to becoming a software engineer, and these are some of them." />
      <Grid dataSet={'books'} />
    </div>
  );
}