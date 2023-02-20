
import sql from "@/utils/postgres";


export default async function handler(req, res) {

    const id = req.query.id;

    const books = await sql`SELECT * FROM books WHERE id = ${id}`;

    if (books.length < 1) {
        res.status(404).json({ message: "Id not found" });
        return;
    }



    res.json(books);
}