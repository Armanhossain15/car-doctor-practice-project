import { Link } from "react-router-dom";
import loginImg from './../../assets/images/login/login.svg'
import { useContext } from "react";
import { authContext } from "../../Provider/AuthProvider";

const SignUp = () => {

    const {createUser} = useContext(authContext)

    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target
        // const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        // const UserData  = {name, email, password}
        // console.log(UserData);
        createUser(email, password)
        .then(result => {
            const user = result.user
            console.log('current user', user);
        })
        .catch(error => {
            console.log(error.message)
        })
    }


    return (
        <div className='flex justify-center items-center py-2 pb-10'>
            <div className=''>
                <img src={loginImg} alt="" className='w-3/4' />
            </div>
            <div className='card shrink-0 w-full max-w-sm border-2 py-14 '>
                <h1 className='text-5xl text-center font-semibold'>Sign up</h1>
                <form className="card-body" onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-orange-500 hover:bg-orange-600 text-white text-xl">Sign Up</button>
                    </div>
                    <p>Allready have an account ? <Link className='text-orange-500 font-bold' to='/login'>Sign up</Link> </p>
                </form>




            </div>
        </div>
    );
};

export default SignUp;