import { useContext, useEffect, useState } from "react";
import { authContext } from "../../Provider/AuthProvider";
import BookingRow from "./BookingRow";
import Swal from 'sweetalert2'
import axios from "axios";

const Bookings = () => {
    const { user } = useContext(authContext)
    const [bookings, setBookings] = useState([])


    const url = `http://localhost:5000/bookings?email=${user?.email}`

    useEffect(() => {
        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => setBookings(data))
        axios.get(url, {
            withCredentials: true
        })
        .then(res => {
            setBookings(res.data)
        })
    }, [url])
    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/booking/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {

                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remaining = bookings.filter(booked => booked._id !== id)
                            setBookings(remaining)
                        }
                    })




            }
        });
    }

    const handleConfirm = id => {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: "PATCH", 
            headers: {
                'content-type' : 'application/json' 
            },
            body: JSON.stringify({status : 'confirmed'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            const remaining =  bookings.filter(booking => booking._id !== id)
            const updated = bookings.find(booking => booking._id === id)
            updated.status = 'confirmed'
            const newBooking = [updated, ...remaining]
            setBookings(newBooking)
        })
    }
    return (
        <div>
            <h1 className="text-4xl ">My Booking {bookings.length}</h1>
            <div>
                <div className="">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <th>Image</th>
                                <th>Service</th>
                                <th>Price</th>
                                <th>Date</th>
                                <th>Stutus</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bookings.map((bookedInfo, index) => <BookingRow
                                    key={index}
                                    handleDelete={handleDelete}
                                    bookedInfo={bookedInfo}
                                    handleConfirm={handleConfirm}
                                ></BookingRow>)
                            }
                        </tbody>


                    </table>
                </div>
            </div>


        </div>
    );
};

export default Bookings;