

const BookingRow = ({ bookedInfo, handleDelete, handleConfirm  }) => {
    const { _id, BookedService, img, date, price, status } = bookedInfo

    
    return (

        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="rounded-md  w-24 h-24">
                            <img src={img} />
                        </div>
                    </div>
                </div>
            </td>
            <td>
                <div>
                    <div className="font-bold">{BookedService}</div>
                </div>
            </td>
            <td>

                <span className="badge badge-ghost badge-sm">{price}</span>
            </td>
            <td>{date}</td>
            <th>
                {
                    status === 'confirmed' ? 
                    <span className="font-bold text-primary"> Confirmed</span>
                    : <button onClick={()=>handleConfirm(_id)} className="btn  btn-md">Please Confirm</button>
                }
            </th>
        </tr>
    );
};

export default BookingRow;