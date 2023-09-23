import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../authProvider/AuthContextProvider";
import BookingAdd from "./BookingAdd";
import { useNavigate } from "react-router-dom";


const BookingsAdd = () => {
    const {user} = useContext(AuthContext)
    const navigate = useNavigate()

    const[bookingAdd, setBookingAdd] =useState([])

    const handleDelete = (id)=>{
        fetch(`http://localhost:5000/booking/${id}`,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
            if (data.deletedCount>0) {
                alert("Delete successful")
                const remaining = bookingAdd.filter(b => b._id !== id)
                setBookingAdd(remaining)
            }
        })

    }






    const handleConfrim = (id)=>{
        fetch(`http://localhost:5000/booking/${id}`,{
            method:"PATCH",
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify({oder: 'Confirm'})
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if (data.modifiedCount>0) {
                alert("Oder Added successful")
                const remaining = bookingAdd.filter(d => d._id !== id)
                const booking= bookingAdd.find(d => d._id === id)
                booking.order = 'Confirm'
                const newBooking =[booking, ...remaining]
                setBookingAdd(newBooking)
            }
        })

    }

    const url = `http://localhost:5000/booking?email=${user?.email}`
    useEffect(()=>{
            fetch(url,
            //    {
            //   method:'GET',
            //   headers:{
            //     authorization:`Bearer ${localStorage.getItem('a-token')}`
            //   }
            // }
            )
            .then(res=>res.json())
            .then(data=>{
              console.log(data);
              // if (!data.error) {
                 setBookingAdd(data)
              // }
              // else{
              //   navigate('/')
              // }
              })
    },[url,navigate])
    return (
        <div className="overflow-x-auto mt-5 mb-20 border-[1px] rounded-md border-black">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
       
        <th></th>
        <th>Service</th>
        <th>Email</th>
        <th>name</th>
        <th>Price</th>
        <th>Date</th>
        <th>Action</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        bookingAdd.map(b =><BookingAdd key={b._id} b={b} handleDelete={handleDelete} handleConfrim={handleConfrim}></BookingAdd>)
      }
    </tbody>
    
    
  </table>
</div>
    );
};

export default BookingsAdd;