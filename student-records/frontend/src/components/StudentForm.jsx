import { useState, useEffect } from 'react';

function StudentForm({ onSubmit, initialData, onCancel }) {
  const [name, setName] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [department, setDepartment] = useState('Computer');
  const [year, setYear] = useState(1);
  const [cgpa, setCgpa] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (initialData) {
      setName(initialData.name || '');
      setRollNo(initialData.rollNo || '');
      setDepartment(initialData.department || 'Computer');
      setYear(initialData.year || 1);
      setCgpa(initialData.cgpa || '');
      setEmail(initialData.email || '');
    } else { setName(''); setRollNo(''); setDepartment('Computer'); setYear(1); setCgpa(''); setEmail(''); }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !rollNo.trim()) return;
    onSubmit({ name, rollNo, department, year: Number(year), cgpa: Number(cgpa), email });
    if (!initialData) { setName(''); setRollNo(''); setDepartment('Computer'); setYear(1); setCgpa(''); setEmail(''); }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="input-group">
        <input type="text" placeholder="Student Name *" value={name} onChange={(e) => setName(e.target.value)} required autoFocus />
      </div>
      <div className="input-group">
        <input type="text" placeholder="Roll Number *" value={rollNo} onChange={(e) => setRollNo(e.target.value)} required />
      </div>
      <div className="input-group">
        <select value={department} onChange={(e) => setDepartment(e.target.value)} className="priority-select">
          <option value="Computer">Computer</option>
          <option value="IT">IT</option>
          <option value="Electronics">Electronics</option>
          <option value="Mechanical">Mechanical</option>
          <option value="Civil">Civil</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="input-group">
        <input type="number" placeholder="Year (1-4)" value={year} min={1} max={4} onChange={(e) => setYear(e.target.value)} />
      </div>
      <div className="input-group">
        <input type="number" placeholder="CGPA (0-10)" value={cgpa} min={0} max={10} step={0.01} onChange={(e) => setCgpa(e.target.value)} />
      </div>
      <div className="input-group">
        <input type="email" placeholder="Email (optional)" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
        <button type="submit" style={{ flex: 1 }}>{initialData ? 'Update Student' : 'Add Student'}</button>
        {onCancel && <button type="button" className="danger" onClick={onCancel} style={{ flex: 1 }}>Cancel</button>}
      </div>
    </form>
  );
}
export default StudentForm;
