import { dbConnect } from '@/lib/dbConnect';
import Post from '@/models/Post';

dbConnect();

export default async function handler(req,res) {
    const { id } = req.query;
    const posts = await Post.findOne({_id: id});
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