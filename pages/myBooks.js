import BookGrid from "@/components/home/book-grid";
import NavBar from "@/components/home/nav_bar";
import Information from "@/components/home/bio";
import { Books } from "@/components/home/book-grid/books";


export default function myBooks() {
    return (
      <div>
        <NavBar />
        <Information text="I have read a number of books thus far on my journey to becoming a software engineer, and these are some of them."/>
        <BookGrid Books={ Books }/>
      </div>
    );
  }