import mongoose from 'mongoose';

const registrationSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  phone: { type: String, trim: true, default: '' },
  college: { type: String, trim: true, default: '' },
  event: {
    type: String,
    enum: ['Tech Fest', 'Cultural Fest', 'Sports Day', 'Hackathon', 'Workshop'],
    default: 'Tech Fest'
  }
}, { timestamps: true });

export default mongoose.model('Registration', registrationSchema);
