import sql from "@/utils/postgres";


export default async function handler(req, res) {


    const resList = await sql`SELECT * FROM res_list`;

    res.json(resList);
};