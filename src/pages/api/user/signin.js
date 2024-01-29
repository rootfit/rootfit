import { signin } from "@/components/api/user/dao";

export default async function handler(req, res) {

    if (req.method === "POST") {
        const { id, password } = req.body;

        try {
            const result = await signin({ id, password });

            if (result.status === 200) {
                res.status(200).json({ signin: 'succ', data: result.data });
            } else {
                res.status(result.status).json({ signin: 'fail', message: result.message });
            }
        } catch (error) {
            console.error('Error in signin handler:', error);
            res.status(500).json({ signin: 'error', message: 'Internal server error' });
        }
    } else {
        res.status(405).end();
    }
}