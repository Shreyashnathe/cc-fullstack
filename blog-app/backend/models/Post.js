import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  content: { type: String, required: true, trim: true },
  author: { type: String, trim: true, default: 'Anonymous' },
  category: {
    type: String,
    enum: ['Technology', 'Lifestyle', 'Education', 'Other'],
    default: 'Other'
  }
}, { timestamps: true });

export default mongoose.model('Post', postSchema);
