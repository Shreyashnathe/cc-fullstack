function TodoItem({ todo, onDelete, onToggle, onEdit }) {
  return (
    <div className={`task-item ${todo.completed ? 'completed' : ''}`}>
      <div className="task-content">
        <input type="checkbox" className="task-checkbox" checked={todo.completed} onChange={() => onToggle(todo)} />
        <div className="task-details">
          <div className="task-title">
            {todo.task}
            <span className={`priority-badge priority-${todo.priority?.toLowerCase() || 'medium'}`}>{todo.priority || 'Medium'}</span>
          </div>
          {todo.description && <div className="task-desc">{todo.description}</div>}
          {todo.dueDate && <div className="task-desc">📅 Due: {todo.dueDate}</div>}
        </div>
      </div>
      <div className="task-actions">
        <button className="icon-btn" onClick={() => onEdit(todo)} title="Edit Todo">
          <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
        </button>
        <button className="icon-btn delete" onClick={() => onDelete(todo._id)} title="Delete Todo">
          <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
        </button>
      </div>
    </div>
  );
}
export default TodoItem;
