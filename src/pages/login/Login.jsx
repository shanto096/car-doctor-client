
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImg from '../../assets/assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../authProvider/AuthContextProvider';


const Login = () => {

   const navigate = useNavigate()
   const location = useLocation()

   let from = location.state?.from?.pathname || "/";
  
  const{login} = useContext(AuthContext)

    const handleLoginSubmit = (e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email,password)
        .then((result) => {
          // Signed in 
          const user = result.user;
          console.log(user);
          // const loggedUser = {
          //   email: user.email
          // }
          // console.log(loggedUser);
          // fetch('http://localhost:5000/jwt',{
          //   method:'POST',
          //   headers:{
          //     "content-type":"application/json"
          //   },
          //   body: JSON.stringify(loggedUser)
          // })
          // .then(res=>res.json())
          // .then(data =>{
          //  ;
          //    localStorage.setItem('a-token', data.token)
          // })

          navigate(from, { replace: true })
          // // ...
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
        <form onSubmit={handleLoginSubmit}>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl p-8 border-[4px]">
          <h1 className="text-2xl text-center font-bold">Login</h1>
            <div className="card-body space-y-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
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
              <p className='text-sm'>Don't have an Account please <Link to='/Register'><span className='text-blue-600 font-bold'>Register</span></Link></p>

            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
