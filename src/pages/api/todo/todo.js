import { healthList, healthSelectInsert } from '@/components/api/todo/dao.js';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const list = await healthList();
    res.status(200).json({ data: list });
  } else if (req.method === 'POST') {
    // 작업중인 코드
    const select = await healthSelectInsert();
    res.staus(200).json({ data: select });
  } else {
    res.staus(405).end();
  }
}
