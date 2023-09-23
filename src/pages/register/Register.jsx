import { Link } from 'react-router-dom';
import loginImg from '../../assets/assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../authProvider/AuthContextProvider';

const Register = () => {

  const {createRegister}= useContext(AuthContext)
    const handleRegisterSubmit = (e)=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
        createRegister(email,password)
       .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });

    }




  return (
    <div className="hero min-h-screen ">
      <div className="hero-content md:gap-24 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          
          <div>
            <img src={loginImg} alt="" />
          </div>
        </div>
        <form onSubmit={handleRegisterSubmit}>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl p-6 border-[4px]">
          <h1 className="text-2xl text-center font-bold">Login</h1>
            <div className="card-body ">
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name='name'
                  placeholder="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name='email'
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name='password'
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type='submit' value='Login' />
              </div>
              <p className='text-sm'>Have an Account please <Link to='/login'><span className='text-blue-600 font-bold'>Login</span></Link></p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;