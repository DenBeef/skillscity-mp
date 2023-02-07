import BookItem from "./book-item"



export default function BookGrid(props) {

    return (
    <div className="mt-10 grid grid-cols-3 w-full">
    {props.Books.map((book) => {
    return (
            <BookItem
                title={book.title} 
                author={book.author} 
                link={book.link}
                image={book.image}
            />
)
})}
</div>)
}