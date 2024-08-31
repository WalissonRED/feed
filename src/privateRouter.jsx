import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { supabase } from './supabaseClient';
import { useEffect, useState } from 'react';

const PrivateRoute = ({ element }) => {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSession() {
      const { data: { session } } = await supabase.auth.getSession();
      setSession(session);
      setLoading(false);
    }

    fetchSession();

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    // Limpeza da subscrição ao desmontar o componente
    return () => {
      if (authListener?.subscription) {
        authListener.subscription.unsubscribe();
      }
    };
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return session ? (
    element
  ) : (
    <Navigate to="/login" replace />
  );
};

PrivateRoute.propTypes = {
  element: PropTypes.element.isRequired,
};

export default PrivateRoute;
