import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImg from './../../assets/images/login/login.svg'
import { useContext } from 'react';
import { authContext } from '../../Provider/AuthProvider';
import axios from 'axios';

  

const Login = () => {
    const {signInUser} = useContext(authContext)
    const location = useLocation()
    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target
        // const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        // console.log(email, password);
        signInUser(email, password)
        .then(res=> {
            const loggedUser = res.user
            console.log(loggedUser);
            const user = {email}
            
            //get access token
            axios.post(`http://localhost:5000/jwt`, user, {
                withCredentials: true
            })
            .then(res => {
                 console.log(res.data);
                if(res.data.success){
                    navigate(location?.state? location?.state : '/')
                }
            })
        })
        .catch(error => {
            console.log(error.message);
        })

    }

    return (
        <div className='flex justify-center items-center py-5 pb-10'>
            <div className=''>
                <img src={loginImg} alt="" className='w-3/4' />
            </div>
            <div className='card shrink-0 w-full max-w-sm border-2 py-14 '>
                <h1 className='text-5xl text-center font-semibold'>Login</h1>
                <form className="card-body" onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-orange-500 hover:bg-orange-600 text-white text-xl">Login</button>
                    </div>
                    <p>New to Car Doctor ? <Link className='text-orange-500 font-bold' to='/signup'>Sign up</Link> </p>
                </form>




            </div>
        </div>
    );
};

export default Login;