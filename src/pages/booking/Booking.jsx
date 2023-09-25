import { useContext } from "react";
import {  useLoaderData } from "react-router-dom";
import { AuthContext } from "../../authProvider/AuthContextProvider";

const Booking = () => {
 
    const {user} = useContext(AuthContext)
    
  const bookingData = useLoaderData();
  const { _id, price, img, title } = bookingData;
  console.log(bookingData);

     const bookSubmit = (e)=>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = form.email.value;
        const booking ={
             customerName:name,
             date, 
             email,
             img,
             customerId:_id,
             service:title,
             price
            }
        console.log(booking);

        fetch('https://car-doctor-server-gray-nine.vercel.app/booking',{
            method:'POST',
            headers:{
               "content-type":"application/json"
            },
            body: JSON.stringify(booking)

        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if (data.insertedId) {
               alert('Booking successful') 
            }
        })
     }

  return (
    <div className="md:mx-32 my-10">
      <div className="border-2 p-5 rounded-md">
      <h1 className="text-2xl font-bold text-center mb-10">Booking Service: <span className="text-slate-700">{title}</span></h1>
        <form onSubmit={bookSubmit} className="grid md:grid-cols-2 md:gap-x-10">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="name"
              name="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="Date"
              name="date"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              defaultValue={user? user.email:null}
              name="email"
              readOnly
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">price</span>
            </label>
            <input
              type="number"
              name="price"
              defaultValue={price}
              readOnly
              className="input input-bordered"
            />
          </div>
          <div className="form-control my-8 md:col-span-2 ">
            <input className="btn btn-primary" type="submit" value="Book Now" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Booking;
