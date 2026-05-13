import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
  task: { type: String, required: true, trim: true },
  description: { type: String, trim: true, default: '' },
  completed: { type: Boolean, default: false },
  priority: {
    type: String,
    enum: ['Low', 'Medium', 'High'],
    default: 'Medium'
  },
  dueDate: { type: String, default: '' }
}, { timestamps: true });

export default mongoose.model('Todo', todoSchema);
