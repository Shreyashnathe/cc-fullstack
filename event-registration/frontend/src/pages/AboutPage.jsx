function AboutPage() {
  return (
    <div className="app-container">
      <header><h1>About EventReg</h1><p>Online event registration system</p></header>
      <main>
        <div className="task-form">
          <h2>Welcome to EventReg!</h2>
          <p style={{ marginTop: '1rem', lineHeight: '1.6', color: 'var(--text-muted)' }}>
            EventReg is a full-stack MERN application deployed on AWS EC2. Register participants for events and manage registrations effortlessly.
          </p>
          <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem', lineHeight: '1.6', color: 'var(--text-muted)' }}>
            <li>Register participants with name, email, and phone.</li>
            <li>Select from multiple event types.</li>
            <li>View and manage all registrations.</li>
            <li>Data stored in cloud MongoDB Atlas.</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
export default AboutPage;
