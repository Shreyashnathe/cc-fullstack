import express from 'express';
import Registration from '../models/Registration.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const registrations = await Registration.find().sort({ createdAt: -1 });
    res.json(registrations);
  } catch (err) { res.status(500).json({ message: err.message }); }
});

router.post('/', async (req, res) => {
  const registration = new Registration({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    college: req.body.college,
    event: req.body.event
  });
  try {
    const newReg = await registration.save();
    res.status(201).json(newReg);
  } catch (err) { res.status(400).json({ message: err.message }); }
});

router.put('/:id', async (req, res) => {
  try {
    const reg = await Registration.findById(req.params.id);
    if (!reg) return res.status(404).json({ message: 'Registration not found' });
    if (req.body.name != null) reg.name = req.body.name;
    if (req.body.email != null) reg.email = req.body.email;
    if (req.body.phone != null) reg.phone = req.body.phone;
    if (req.body.college != null) reg.college = req.body.college;
    if (req.body.event != null) reg.event = req.body.event;
    const updated = await reg.save();
    res.json(updated);
  } catch (err) { res.status(400).json({ message: err.message }); }
});

router.delete('/:id', async (req, res) => {
  try {
    const reg = await Registration.findById(req.params.id);
    if (!reg) return res.status(404).json({ message: 'Registration not found' });
    await reg.deleteOne();
    res.json({ message: 'Registration deleted' });
  } catch (err) { res.status(500).json({ message: err.message }); }
});

export default router;
