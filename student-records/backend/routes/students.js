import express from 'express';
import Student from '../models/Student.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const students = await Student.find().sort({ createdAt: -1 });
    res.json(students);
  } catch (err) { res.status(500).json({ message: err.message }); }
});

router.post('/', async (req, res) => {
  const student = new Student({
    name: req.body.name,
    rollNo: req.body.rollNo,
    department: req.body.department,
    year: req.body.year,
    cgpa: req.body.cgpa,
    email: req.body.email
  });
  try {
    const newStudent = await student.save();
    res.status(201).json(newStudent);
  } catch (err) { res.status(400).json({ message: err.message }); }
});

router.put('/:id', async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) return res.status(404).json({ message: 'Student not found' });
    if (req.body.name != null) student.name = req.body.name;
    if (req.body.rollNo != null) student.rollNo = req.body.rollNo;
    if (req.body.department != null) student.department = req.body.department;
    if (req.body.year != null) student.year = req.body.year;
    if (req.body.cgpa != null) student.cgpa = req.body.cgpa;
    if (req.body.email != null) student.email = req.body.email;
    const updated = await student.save();
    res.json(updated);
  } catch (err) { res.status(400).json({ message: err.message }); }
});

router.delete('/:id', async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) return res.status(404).json({ message: 'Student not found' });
    await student.deleteOne();
    res.json({ message: 'Student deleted' });
  } catch (err) { res.status(500).json({ message: err.message }); }
});

export default router;
