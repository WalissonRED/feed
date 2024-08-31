import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
import { supabase } from './supabaseClient';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setError(error.message);
    } else {
      navigate('/'); 
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginImage}>
        <img
          src="/placeholder.svg"
          alt="Login Image"
          className={styles.image}
        />
      </div>

      <div className={styles.loginForm}>
        <div className={styles.formContainer}>
          <div className={styles.formHeader}>
            <h1>Login</h1>
            <p>Enter your credentials to access your account.</p>
          </div>
          <form onSubmit={handleSignIn}>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className={styles.loginButton}>
              Login
            </button>
          </form>
          <button className={styles.createAccountButton}>
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
}
