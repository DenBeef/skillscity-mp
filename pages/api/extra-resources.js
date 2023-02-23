import sql from "@/utils/postgres";

export default async function handler(req, res) {
    const resources = await sql`
        SELECT * FROM share ORDER BY id DESC
    `;

    res.json({ resources: resources })

}