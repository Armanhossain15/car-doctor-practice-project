import { useContext } from "react";
import { json, useLoaderData } from "react-router-dom";
import { authContext } from "../../Provider/AuthProvider";


const Checkout = () => {
    const {user} = useContext(authContext)



    const service = useLoaderData()
    const { title, _id, price, img } = service
    const handleBookService = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const date = form.date.value
        const price = form.price.value
        const email = form.email.value
        const orderInfo = {
            customerName : name, 
            date,
            price,
            email,
            img,
            BookedService : title,
            BookedService_id : _id
        }
        console.log(orderInfo);
        fetch('http://localhost:5000/booking', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderInfo)
        })
        .then(res => res.json() )
        .then(data => {
            console.log(data);
            if(data.insertedId){
                alert('booked successfully')
            }
        })

    }
    return (
        <div>
            <h2 className="text-3xl text-center font-semibold mb-4">Book Service  : {title}</h2>

            <div className="border w-3/5 mx-auto">
                <form className="card-body" onSubmit={handleBookService}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"> Name</span>
                            </label>
                            <input type="text" placeholder="your Name"
                            defaultValue={user?.displayName}
                                name="name"
                                className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">last date</span>
                            </label>
                            <input type="date" placeholder="date"
                                name="date" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">price</span>
                            </label>
                            <input type="text" defaultValue={'$' + price}
                                name="price" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">email</span>
                            </label>
                            <input type="email" placeholder="email"
                                name="email"
                                defaultValue={user?.email} 
                                className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-primary btn-block" type="submit" value="Order Confirm" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Checkout;