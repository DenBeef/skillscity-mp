
import sql from "@/utils/postgres";

export default async function handler(req, res) {


    const books = await sql`SELECT * FROM books`;

    res.json(books);
}