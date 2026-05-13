function AboutPage() {
  return (
    <div className="app-container">
      <header><h1>About DoIt</h1><p>Cloud-based to-do list manager</p></header>
      <main>
        <div className="task-form">
          <h2>Welcome to DoIt!</h2>
          <p style={{ marginTop: '1rem', lineHeight: '1.6', color: 'var(--text-muted)' }}>
            DoIt is a full-stack MERN to-do list application deployed on AWS EC2. Manage your daily tasks with priorities and due dates.
          </p>
          <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem', lineHeight: '1.6', color: 'var(--text-muted)' }}>
            <li>Create, update, and delete todos.</li>
            <li>Assign priority levels and due dates.</li>
            <li>Mark todos as complete.</li>
            <li>Filter by status: Active or Completed.</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
export default AboutPage;
