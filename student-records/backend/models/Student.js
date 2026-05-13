import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  rollNo: { type: String, required: true, trim: true },
  department: {
    type: String,
    enum: ['Computer', 'IT', 'Electronics', 'Mechanical', 'Civil', 'Other'],
    default: 'Computer'
  },
  year: { type: Number, min: 1, max: 4, default: 1 },
  cgpa: { type: Number, min: 0, max: 10, default: 0 },
  email: { type: String, trim: true, default: '' }
}, { timestamps: true });

export default mongoose.model('Student', studentSchema);
