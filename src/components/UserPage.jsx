
import { useNavigate } from 'react-router-dom';

function UserPage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user'); // Clear user data
    navigate('/'); // Navigate to landing page
  };

  return (
    <div>
      <h1>User Dashboard</h1>
      <button onClick={handleLogout} className="bg-red-500 text-white p-2 rounded">
        Logout
      </button>
    </div>
  );
}

export default UserPage;
