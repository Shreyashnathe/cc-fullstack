import { useState, useEffect } from 'react';
import axios from 'axios';
import StudentForm from '../components/StudentForm';
import StudentList from '../components/StudentList';

const API_URL = import.meta.env.VITE_API_URL || '/api/students';

function StudentsPage() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingStudent, setEditingStudent] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => { fetchStudents(); }, []);

  const fetchStudents = async () => {
    try { const res = await axios.get(API_URL); setStudents(res.data); }
    catch (err) { console.error(err); } finally { setLoading(false); }
  };

  const addStudent = async (data) => {
    try { const res = await axios.post(API_URL, data); setStudents([res.data, ...students]); }
    catch (err) { console.error(err); }
  };

  const updateStudent = async (id, data) => {
    try { const res = await axios.put(`${API_URL}/${id}`, data); setStudents(students.map(s => s._id === id ? res.data : s)); setEditingStudent(null); }
    catch (err) { console.error(err); }
  };

  const deleteStudent = async (id) => {
    try { await axios.delete(`${API_URL}/${id}`); setStudents(students.filter(s => s._id !== id)); }
    catch (err) { console.error(err); }
  };

  const filtered = students.filter(s =>
    s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.rollNo.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app-container">
      <header>
        <h1>Student Portal</h1>
        <p>Manage student records efficiently</p>
      </header>
      <main>
        <StudentForm onSubmit={editingStudent ? (d) => updateStudent(editingStudent._id, d) : addStudent} initialData={editingStudent} onCancel={editingStudent ? () => setEditingStudent(null) : null} />
        <div className="filters-container">
          <input type="text" placeholder="Search by name or roll no..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="search-input" />
        </div>
        {loading ? <div className="empty-state">Loading students...</div> : <StudentList students={filtered} onDelete={deleteStudent} onEdit={setEditingStudent} />}
      </main>
    </div>
  );
}
export default StudentsPage;
