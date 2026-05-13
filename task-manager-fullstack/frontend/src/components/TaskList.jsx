import TaskItem from './TaskItem';

function TaskList({ tasks, onDelete, onToggle, onEdit }) {
  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <p>No tasks yet. Create one above to get started!</p>
      </div>
    );
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem 
          key={task._id} 
          task={task} 
          onDelete={onDelete} 
          onToggle={onToggle}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}

export default TaskList;
