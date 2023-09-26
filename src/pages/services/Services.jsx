import { useEffect, useRef, useState } from "react";
import Service from "./Service";

const Services = () => {
  const [services, setServices] = useState([]);
  const [acc, setacc] = useState(true);
  const [search, setSearch] = useState('');

    const searchRef = useRef(null)

  const handleSearch = () =>{
      console.log(searchRef.current.value);
      setSearch(searchRef.current.value)
  }


  useEffect(() => {
    fetch(`http://localhost:5000/services?search=${search}&sort=${acc ? "acc" : "desc"}`)
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, [acc,search]);

  return (
    <div className="my-10 ">
      <div className="space-y-3 mx-2">
        <h2 className=" text-center font-bold text-orange-500">Services</h2>
        <h1 className=" text-center text-4xl font-bold">Our Service Area</h1>
        <p className="text-center">
          the majority have suffered alteration in some form, by injected
          humour, <br /> or randomised words which dot look even slightly
          believable.{" "}
        </p>
         <div className=" flex justify-center">
            <div>
            <div className="form-control ">
          <div className="input-group">
            <input
              ref={searchRef}
              type="text"
              placeholder="Search…"
              className="input input-bordered"
            />
            <button
            onClick={handleSearch}
            className="btn btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
        <button
          className="text-center block mt-5 bg-orange-400 rounded-md p-2 text-white"
          onClick={() => setacc(!acc)}
        >
          {acc ? "Boro thake choto" : "choto thake boro"}
        </button>
            </div>
         </div>
      </div>

      <div className="flex justify-center">
        <div className="grid md:grid-cols-3  md:gap-16 gap-6 my-5">
          {services.map((ser) => (
            <Service key={ser._id} service={ser}></Service>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
