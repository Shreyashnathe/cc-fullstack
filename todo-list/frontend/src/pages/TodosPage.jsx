import { useState, useEffect } from 'react';
import axios from 'axios';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';

const API_URL = import.meta.env.VITE_API_URL || '/api/todos';

function TodosPage() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingTodo, setEditingTodo] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  useEffect(() => { fetchTodos(); }, []);

  const fetchTodos = async () => {
    try { const res = await axios.get(API_URL); setTodos(res.data); }
    catch (err) { console.error(err); } finally { setLoading(false); }
  };

  const addTodo = async (data) => {
    try { const res = await axios.post(API_URL, data); setTodos([res.data, ...todos]); }
    catch (err) { console.error(err); }
  };

  const updateTodo = async (id, data) => {
    try { const res = await axios.put(`${API_URL}/${id}`, data); setTodos(todos.map(t => t._id === id ? res.data : t)); setEditingTodo(null); }
    catch (err) { console.error(err); }
  };

  const deleteTodo = async (id) => {
    try { await axios.delete(`${API_URL}/${id}`); setTodos(todos.filter(t => t._id !== id)); }
    catch (err) { console.error(err); }
  };

  const toggleTodo = async (todo) => {
    try { const res = await axios.put(`${API_URL}/${todo._id}`, { completed: !todo.completed }); setTodos(todos.map(t => t._id === todo._id ? res.data : t)); }
    catch (err) { console.error(err); }
  };

  const filtered = todos.filter(t => {
    const matchSearch = t.task.toLowerCase().includes(searchQuery.toLowerCase());
    if (statusFilter === 'Active') return matchSearch && !t.completed;
    if (statusFilter === 'Completed') return matchSearch && t.completed;
    return matchSearch;
  });

  return (
    <div className="app-container">
      <header>
        <h1>DoIt</h1>
        <p>Stay on top of your day</p>
      </header>
      <main>
        <TodoForm onSubmit={editingTodo ? (d) => updateTodo(editingTodo._id, d) : addTodo} initialData={editingTodo} onCancel={editingTodo ? () => setEditingTodo(null) : null} />
        <div className="filters-container">
          <input type="text" placeholder="Search todos..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="search-input" />
          <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="filter-select">
            <option value="All">All Status</option>
            <option value="Active">Active</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        {loading ? <div className="empty-state">Loading todos...</div> : <TodoList todos={filtered} onDelete={deleteTodo} onToggle={toggleTodo} onEdit={setEditingTodo} />}
      </main>
    </div>
  );
}
export default TodosPage;
