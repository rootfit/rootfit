import { signin } from "@/components/api/user/dao";

export default async function handler(req, res) {
    if (req.method === "POST") {
        const {id, password} = req.body;
        const signinSucc = await signin(id);
        if (signinSucc) {
            res.status(200).json({ signin: 'succ' });
        } else {
            res.status(401).end();
        }
    } else {
        res.status(405).end();
    }
}
  