import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check email password
    // success Login redirect to '/'
    navigate('/');
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input placeholder="email" />
        <input placeholder="password" />
        <button>Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
