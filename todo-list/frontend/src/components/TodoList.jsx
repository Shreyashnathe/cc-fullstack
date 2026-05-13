import TodoItem from './TodoItem';
function TodoList({ todos, onDelete, onToggle, onEdit }) {
  if (todos.length === 0) return <div className="empty-state"><p>No todos yet. Add one above!</p></div>;
  return <div className="task-list">{todos.map((t) => <TodoItem key={t._id} todo={t} onDelete={onDelete} onToggle={onToggle} onEdit={onEdit} />)}</div>;
}
export default TodoList;
