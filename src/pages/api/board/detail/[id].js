import { increaseCnt, detail } from "@/components/api/board/dao";

export default async function handler(req, res) {
    if (req.method === "GET") {
      await increaseCnt(req.query.id);
      const boardtbl = await detail(req.query.id);
      res.status(200).json({ data: boardtbl });
    } else {
      res.status(405).end();
    }
  }