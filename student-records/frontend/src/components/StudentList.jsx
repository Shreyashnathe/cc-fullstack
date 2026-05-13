import StudentItem from './StudentItem';
function StudentList({ students, onDelete, onEdit }) {
  if (students.length === 0) return <div className="empty-state"><p>No students yet. Add one above!</p></div>;
  return <div className="task-list">{students.map((s) => <StudentItem key={s._id} student={s} onDelete={onDelete} onEdit={onEdit} />)}</div>;
}
export default StudentList;
