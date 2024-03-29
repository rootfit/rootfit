import { mostView } from "@/components/api/board/dao.js";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const boardMostView = await mostView();
    res.status(200).json({ data: boardMostView });
  } else {
    res.status(405).end();
  }
}
  