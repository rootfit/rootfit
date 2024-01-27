import { list } from "@/components/api/board/dao.js";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const boardList = await list();
    res.status(200).json({ data: boardList });
  } else {
    res.status(405).end();
  }
}
  