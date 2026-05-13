function AboutPage() {
  return (
    <div className="app-container">
      <header><h1>About Student Portal</h1><p>Cloud-based student record management</p></header>
      <main>
        <div className="task-form">
          <h2>Welcome to Student Portal!</h2>
          <p style={{ marginTop: '1rem', lineHeight: '1.6', color: 'var(--text-muted)' }}>
            Student Portal is a full-stack MERN application deployed on AWS EC2 for managing student records in the cloud.
          </p>
          <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem', lineHeight: '1.6', color: 'var(--text-muted)' }}>
            <li>Add, update, and delete student records.</li>
            <li>Store name, roll no, department, year, and CGPA.</li>
            <li>Search students by name or roll number.</li>
            <li>Data stored securely in MongoDB Atlas.</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
export default AboutPage;
