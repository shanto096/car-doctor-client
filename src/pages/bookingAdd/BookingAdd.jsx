

const BookingAdd = ({b, handleDelete, handleConfrim}) => {
    const{_id, img,service,date,price,customerName,email,order}=b


    return (
        <tr>
        <th>
          <label>
           <button onClick={()=>handleDelete(_id)} className="border-[1px] h-7 w-7 rounded-md">X</button>
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
             {img && <div className="rounded-md w-12 h-12">
                <img src={img} alt="Avatar Tailwind CSS Component" />
              </div>}
            </div>
            <div>
              <div className="font-bold">{service}</div>
            </div>
          </div>
        </td>
        <td>
          <span className=" ">{email}</span>
        </td>
        <td>
          <span className=" ">{customerName}</span>
        </td>
        <td>{price}</td>
        <td>{date}</td>
        <th>
         { order === 'Confirm' ?  <button  className="btn btn-ghost bg-green-600 btn-xs text-white">Confirm</button> : <button onClick={()=>handleConfrim(_id)} className="btn btn-ghost bg-red-600 btn-xs text-white">Pending...</button>}
        </th>
      </tr>
    );
};

export default BookingAdd;