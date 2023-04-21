const mongoose = require('mongoose');
import { models } from 'mongoose';

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    image_url: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    domain: {
        type: String,
        required: true
    }
});

export default mongoose.models.post || mongoose.model('post', PostSchema);