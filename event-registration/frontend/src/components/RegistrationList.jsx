import RegistrationItem from './RegistrationItem';
function RegistrationList({ registrations, onDelete, onEdit }) {
  if (registrations.length === 0) return <div className="empty-state"><p>No registrations yet. Register above!</p></div>;
  return <div className="task-list">{registrations.map((r) => <RegistrationItem key={r._id} registration={r} onDelete={onDelete} onEdit={onEdit} />)}</div>;
}
export default RegistrationList;
