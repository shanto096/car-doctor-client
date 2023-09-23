import { useEffect, useState } from "react";
import Service from "./Service";


const Services = () => {

    const [services, setServices] =useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => {
            setServices(data)
        })
        

    },[])

    return (
        <div className="my-10 ">
            <div className="space-y-3 mx-2">
                <h2 className=" text-center font-bold text-orange-500">Services</h2>
                <h1 className=" text-center text-4xl font-bold">Our Service Area</h1>
                <p className="text-center">the majority have suffered alteration in some form, by injected humour, <br /> or randomised words which dot look even slightly believable. </p>
            </div>
           <div className="flex justify-center">
           <div className="grid md:grid-cols-3  md:gap-16 gap-6 my-5">
                {
                    services.map(ser => <Service key={ser._id} service={ser}></Service>)
                }
            </div>
           </div>
        </div>
    );
};

export default Services;