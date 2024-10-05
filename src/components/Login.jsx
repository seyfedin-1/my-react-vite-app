import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa";
import { FaUnlockKeyhole } from "react-icons/fa6";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
                credentials: 'include',
            });

            const result = await response.json();
            console.log(result)
            if (!response.ok) {
                throw new Error(result.message || 'Login failed');
            }

            // Store user data in localStorage
            localStorage.setItem('user', JSON.stringify(result));

            // Navigate based on user role
            if (result.role === 'admin') {
                navigate('/admin');
            } else {
                navigate('/user');
            }
           
        } catch (err) {
            setError(err.message);
        }
        
    };

    return (
      <div className='grid justify-center opacity-70 bg-black py-16 mt-24'>  
     <div className='bg-slate-400 opacity-55 p-20'>
     <form onSubmit={handleSubmit} className="space-y-10">

      <h2 className="text-3xl ml-10">User Login</h2>
      {error && <p className="text-red-500">{error}</p>}
   
      <div className='relative'>
      <input
          type="text" 
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 mb-2 w-full pl-7"
          required
      />
         <FaRegUser  className='absolute top-3 pl-1 text-red-300 text-2xl left-0'/>
      </div>
     <div className='relative'>
     <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 mb-2 w-full pl-7"
          required
      />
      <FaUnlockKeyhole className='absolute top-3 pl-1 text-red-300 text-2xl left-0'/>
     </div>
      <button type="submit" className="bg-blue-500 text-white p-2 w-full rounded hover:bg-inherit">Login</button>
  </form>
     </div>
  </div>
    );
};

export default Login;
