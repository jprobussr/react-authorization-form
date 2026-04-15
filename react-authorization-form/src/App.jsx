import './App.css';

const App = () => {
  return (
    <main className="page">
      <section className="auth-card">
        <p className="auth-label">Secure Access</p>
        <h1 className="auth-title">Authorization Form</h1>
        <p className="auth-description">
          Enter your email and password to continue.
        </p>

        <form className="auth-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
            />
          </div>

          <button className="submit-button">Sign In</button>
        </form>
      </section>
    </main>
  );
};

export default App;
