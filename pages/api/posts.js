import { dbConnect } from '@/lib/dbConnect';
import Post from '@/models/Post';

dbConnect();

export default async function handler(req,res) {
    const posts = await Post.find({});
    switch(req.method) {
        case 'GET':
            try {
                return res.status(200).json(posts);
            }
            catch (error) {
                return res.status(400).json({success: false});
            }
        default:
            res.status(400).json({success: false});
            break;
    }
}