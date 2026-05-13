import { useState, useEffect } from 'react';

function RegistrationForm({ onSubmit, initialData, onCancel }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [college, setCollege] = useState('');
  const [event, setEvent] = useState('Tech Fest');

  useEffect(() => {
    if (initialData) {
      setName(initialData.name || '');
      setEmail(initialData.email || '');
      setPhone(initialData.phone || '');
      setCollege(initialData.college || '');
      setEvent(initialData.event || 'Tech Fest');
    } else { setName(''); setEmail(''); setPhone(''); setCollege(''); setEvent('Tech Fest'); }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    onSubmit({ name, email, phone, college, event });
    if (!initialData) { setName(''); setEmail(''); setPhone(''); setCollege(''); setEvent('Tech Fest'); }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="input-group">
        <input type="text" placeholder="Full Name *" value={name} onChange={(e) => setName(e.target.value)} required autoFocus />
      </div>
      <div className="input-group">
        <input type="email" placeholder="Email Address *" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div className="input-group">
        <input type="tel" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </div>
      <div className="input-group">
        <input type="text" placeholder="College / Institution" value={college} onChange={(e) => setCollege(e.target.value)} />
      </div>
      <div className="input-group">
        <select value={event} onChange={(e) => setEvent(e.target.value)} className="priority-select">
          <option value="Tech Fest">Tech Fest</option>
          <option value="Cultural Fest">Cultural Fest</option>
          <option value="Sports Day">Sports Day</option>
          <option value="Hackathon">Hackathon</option>
          <option value="Workshop">Workshop</option>
        </select>
      </div>
      <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
        <button type="submit" style={{ flex: 1 }}>{initialData ? 'Update Registration' : 'Register Now'}</button>
        {onCancel && <button type="button" className="danger" onClick={onCancel} style={{ flex: 1 }}>Cancel</button>}
      </div>
    </form>
  );
}
export default RegistrationForm;
