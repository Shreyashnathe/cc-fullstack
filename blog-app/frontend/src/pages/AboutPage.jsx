function AboutPage() {
  return (
    <div className="app-container">
      <header><h1>About Blog Hub</h1><p>A cloud-deployed blogging platform</p></header>
      <main>
        <div className="task-form">
          <h2>Welcome to Blog Hub!</h2>
          <p style={{ marginTop: '1rem', lineHeight: '1.6', color: 'var(--text-muted)' }}>
            Blog Hub is a full-stack MERN blog application deployed on AWS EC2. Create, manage, and share your blog posts with ease.
          </p>
          <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem', lineHeight: '1.6', color: 'var(--text-muted)' }}>
            <li>Create and publish blog posts instantly.</li>
            <li>Organize posts by category.</li>
            <li>Search posts by title or author.</li>
            <li>Built with React, Express, and MongoDB Atlas.</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
export default AboutPage;
