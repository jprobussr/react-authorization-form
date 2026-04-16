import { useState } from 'react';
import './App.css';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(false);

  const isFormInvalid = !email || !password;

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setMessage('Please fill out both fields.');
      setMessageType('error');
      return;
    }

    setMessage('Successfully signed in!');
    setMessageType('success');
    setEmail('');
    setPassword('');
    setShowPassword(false);
    setIsAuthorized(true);
  };

  const handleSignOut = () => {
    setIsAuthorized(false);
    setMessage('');
    setMessageType('');
  };

  return (
    <main className="page">
      <section className="auth-card">
        {isAuthorized ? (
          <div className="authorized-view">
            <p className="auth-label">Access Granted</p>
            <h2 className="auth-title">Welcome Back</h2>
            <p className="auth-description">
              You have successfully entered the authorization area.
            </p>

            <button className="submit-button" onClick={handleSignOut}>
              Sign Out
            </button>
          </div>
        ) : (
          <>
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
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={handlePasswordChange}
                />

                <button
                  type="button"
                  className="toggle-password-button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? 'Hide Password' : 'Show Password'}
                </button>
              </div>

              <button
                type="submit"
                className="submit-button"
                disabled={isFormInvalid}
              >
                Sign In
              </button>
            </form>

            {message && (
              <p className={`form-message ${messageType}`}>{message}</p>
            )}
          </>
        )}
      </section>
    </main>
  );
};

export default App;
