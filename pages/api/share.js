import sql from "@/utils/postgres";

export default async function handle(req, res) {
    const { name, asset, message } = req.body;

    if (name === undefined) {
        res.status(400).json({ message: "Name is required" });
        return;
    }

    if (asset === undefined) {
        res.status(400).json({ message: "Asset is required" });
        return;
    }

    if (message === undefined) {
        res.status(400).json({ message: "Message is required" });
        return;
    }

    const response = await sql`
            INSERT INTO share (name, asset, message) 
            VALUES (${name}, ${asset}, ${message})
        `;
    res.json({ message: "Thank you" })

}


