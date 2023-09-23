import { Link } from "react-router-dom";

const Service = ({service}) => {

    const {_id, img, title, price} = service;
    return (
        <div className="card md:w-96 w-80 h-80 glass ">
        <figure><img src={img}  alt="car!"/></figure>
        <div className="card-body">
        <h2 className="card-title">{title}</h2>
          <p className="text-orange-500">Price : ${price}</p>
          <div className="card-actions">
            <Link to={`/booking/${_id}`}>
            <button className="btn btn-primary">Booking </button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Service;