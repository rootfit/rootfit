import { signup } from "@/components/api/user/dao";

export default async function handler(req, res) {
    if (req.method === "POST") {
        const body = req.body;
        const signupSucc = await signup(body);
        if (signupSucc) {
            res.status(200).json({ signup: 'succ' });
        } else {
            res.status(500).end();
        }
    } else {
        res.status(405).end();
    }
}