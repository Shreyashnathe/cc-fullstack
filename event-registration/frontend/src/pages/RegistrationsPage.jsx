import { useState, useEffect } from 'react';
import axios from 'axios';
import RegistrationForm from '../components/RegistrationForm';
import RegistrationList from '../components/RegistrationList';

const API_URL = import.meta.env.VITE_API_URL || '/api/registrations';

function RegistrationsPage() {
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingReg, setEditingReg] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [eventFilter, setEventFilter] = useState('All');

  useEffect(() => { fetchRegistrations(); }, []);

  const fetchRegistrations = async () => {
    try { const res = await axios.get(API_URL); setRegistrations(res.data); }
    catch (err) { console.error(err); } finally { setLoading(false); }
  };

  const addReg = async (data) => {
    try { const res = await axios.post(API_URL, data); setRegistrations([res.data, ...registrations]); }
    catch (err) { console.error(err); }
  };

  const updateReg = async (id, data) => {
    try { const res = await axios.put(`${API_URL}/${id}`, data); setRegistrations(registrations.map(r => r._id === id ? res.data : r)); setEditingReg(null); }
    catch (err) { console.error(err); }
  };

  const deleteReg = async (id) => {
    try { await axios.delete(`${API_URL}/${id}`); setRegistrations(registrations.filter(r => r._id !== id)); }
    catch (err) { console.error(err); }
  };

  const filtered = registrations.filter(r => {
    const matchSearch = r.name.toLowerCase().includes(searchQuery.toLowerCase()) || r.email.toLowerCase().includes(searchQuery.toLowerCase());
    if (eventFilter !== 'All') return matchSearch && r.event === eventFilter;
    return matchSearch;
  });

  return (
    <div className="app-container">
      <header>
        <h1>EventReg</h1>
        <p>Register for upcoming events</p>
      </header>
      <main>
        <RegistrationForm onSubmit={editingReg ? (d) => updateReg(editingReg._id, d) : addReg} initialData={editingReg} onCancel={editingReg ? () => setEditingReg(null) : null} />
        <div className="filters-container">
          <input type="text" placeholder="Search by name or email..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="search-input" />
          <select value={eventFilter} onChange={(e) => setEventFilter(e.target.value)} className="filter-select">
            <option value="All">All Events</option>
            <option value="Tech Fest">Tech Fest</option>
            <option value="Cultural Fest">Cultural Fest</option>
            <option value="Sports Day">Sports Day</option>
            <option value="Hackathon">Hackathon</option>
            <option value="Workshop">Workshop</option>
          </select>
        </div>
        {loading ? <div className="empty-state">Loading registrations...</div> : <RegistrationList registrations={filtered} onDelete={deleteReg} onEdit={setEditingReg} />}
      </main>
    </div>
  );
}
export default RegistrationsPage;
