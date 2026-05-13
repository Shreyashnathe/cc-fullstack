function AboutPage() {
  return (
    <div className="app-container">
      <header>
        <h1>About Task Master</h1>
        <p>Learn more about this application</p>
      </header>

      <main>
        <div className="task-form">
          <h2>Welcome to Task Master!</h2>
          <p style={{ marginTop: '1rem', lineHeight: '1.6', color: 'var(--text-muted)' }}>
            This application is a simple, premium Task Manager built using the MERN stack (MongoDB, Express, React, Node.js).
            It allows you to organize your daily activities efficiently without the clutter of complex interfaces.
          </p>
          <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem', lineHeight: '1.6', color: 'var(--text-muted)' }}>
            <li>Create, read, update, and delete tasks instantly.</li>
            <li>Assign priority levels to keep focus on what matters most.</li>
            <li>Filter and search your tasks smoothly.</li>
            <li>Built with pure React and customized vanilla CSS for maximum speed.</li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default AboutPage;
