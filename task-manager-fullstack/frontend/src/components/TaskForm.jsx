import { useState, useEffect } from 'react';

function TaskForm({ onSubmit, initialData, onCancel }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Medium');

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title || '');
      setDescription(initialData.description || '');
      setPriority(initialData.priority || 'Medium');
    } else {
      setTitle('');
      setDescription('');
      setPriority('Medium');
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    onSubmit({ title, description, priority });
    
    if (!initialData) {
      setTitle('');
      setDescription('');
      setPriority('Medium');
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="input-group">
        <input
          type="text"
          placeholder="What needs to be done?"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          autoFocus
        />
      </div>
      <div className="input-group">
        <textarea
          placeholder="Add details (optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="input-group">
        <select 
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="priority-select"
        >
          <option value="Low">Low Priority</option>
          <option value="Medium">Medium Priority</option>
          <option value="High">High Priority</option>
        </select>
      </div>
      <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
        <button type="submit" style={{ flex: 1 }}>
          {initialData ? 'Update Task' : 'Add Task'}
        </button>
        {onCancel && (
          <button type="button" className="danger" onClick={onCancel} style={{ flex: 1 }}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

export default TaskForm;
