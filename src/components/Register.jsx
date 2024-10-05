            import { useState } from 'react';
            import { useNavigate } from 'react-router-dom';
            import aboutImage3 from '../assets/offer-4.jpg'

            const Register = () => {
            const [formData, setFormData] = useState({
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
            });
            const [errors, setErrors] = useState({});
            const navigate = useNavigate();
            async function handleSubmit(e) {
            e.preventDefault();
            const res = await fetch("/api/register", {
            method: "POST",
            body: JSON.stringify(formData),
            });
            const data = await res.json();
            if (data.errors) {
            setErrors(data.errors);
            } else {
            console.log(data);
            navigate('/login'); // Adjust the path according to your routes
            }
            }

            const handleChange = (e) => {
            setFormData({
            ...formData,
            [e.target.name]: e.target.value,
            });
            };

    return (
                        <div className='flex opacity-80 md:flex-row rounded flex-col py-16 mt-28 justify-center   space-x- bg-[rgb(252,249,249)]'>
                            <div className='rounded-md fadeInLeft'>
                            <img
        src={aboutImage3}
        className=""
       
        alt="About Us 3"
      />
                            </div>
                          <div className='bg-[#30f381] opacity-90 p-20 fadeInRight'>  <h1 className='text-3xl mb-10 text-center  '>create your account</h1>
                            <form onSubmit={handleSubmit} className='space-y-10'>
                        <div >
                        
                        <input
                        placeholder='Full Name'
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className='w-full p-1 pl-2 rounded bg-white'
                        />
                        {errors.name && <p>{errors.name[0]}</p>}
                        </div>
                        <div>
                        <input
                        placeholder='email'
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className='w-full p-1 pl-2 rounded bg-white'
                        />
                        {errors.email && <p>{errors.email[0]}</p>}
                        </div>

                        <div>
                       
                        <input
                        placeholder='Password'
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className='w-full p-1 pl-2 rounded bg-white'
                        />
                        {errors.password && <p>{errors.password[0]}</p>}
                        </div>

                        <div>
                        <input
                        placeholder='Confirm Password'
                            type="password"
                            name="password_confirmation"
                            value={formData.password_confirmation}
                            onChange={handleChange}
                            className='w-full p-1 pl-2 rounded bg-white'
                        />
                        </div>

                        <button type="submit " className='ml-16 text-lg bg-[#86E033] p-1 rounded-md px-3 hover:bg-inherit '>Register</button>
                        </form></div>
                        </div>
            );
            };
            export default Register;
