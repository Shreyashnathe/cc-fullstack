import { useState, useEffect } from 'react';

function TodoForm({ onSubmit, initialData, onCancel }) {
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [dueDate, setDueDate] = useState('');

  useEffect(() => {
    if (initialData) {
      setTask(initialData.task || '');
      setDescription(initialData.description || '');
      setPriority(initialData.priority || 'Medium');
      setDueDate(initialData.dueDate || '');
    } else { setTask(''); setDescription(''); setPriority('Medium'); setDueDate(''); }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    onSubmit({ task, description, priority, dueDate });
    if (!initialData) { setTask(''); setDescription(''); setPriority('Medium'); setDueDate(''); }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="input-group">
        <input type="text" placeholder="What needs to be done? *" value={task} onChange={(e) => setTask(e.target.value)} required autoFocus />
      </div>
      <div className="input-group">
        <textarea placeholder="Add details (optional)" value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div className="input-group">
        <select value={priority} onChange={(e) => setPriority(e.target.value)} className="priority-select">
          <option value="Low">Low Priority</option>
          <option value="Medium">Medium Priority</option>
          <option value="High">High Priority</option>
        </select>
      </div>
      <div className="input-group">
        <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} style={{ colorScheme: 'dark' }} />
      </div>
      <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
        <button type="submit" style={{ flex: 1 }}>{initialData ? 'Update Todo' : 'Add Todo'}</button>
        {onCancel && <button type="button" className="danger" onClick={onCancel} style={{ flex: 1 }}>Cancel</button>}
      </div>
    </form>
  );
}
export default TodoForm;
