import Grid from "@/components/shared/items-grid";
import NavBar from "@/components/home/nav_bar";
import Information from "@/components/home/bio";



export default function myBooks() {

    return (
      <div>
        <NavBar />
        <Information text="I have read a number of books thus far on my journey to becoming a software engineer, and these are some of them."/>
        <Grid dataSet={'books'}/>
      </div>
    );
  }