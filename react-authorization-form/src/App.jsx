import { useState } from 'react';
import './App.css';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setMessage('Please fill out both fields.');
      return;
    }

    setMessage('Successfully signed in!');
  }

  return (
    <main className="page">
      <section className="auth-card">
        <p className="auth-label">Secure Access</p>
        <h1 className="auth-title">Authorization Form</h1>
        <p className="auth-description">
          Enter your email and password to continue.
        </p>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>

          <button type="submit" className="submit-button">
            Sign In
          </button>
        </form>
        {message && <p className='form-message'>{message}</p>}
      </section>
    </main>
  );
};

export default App;
