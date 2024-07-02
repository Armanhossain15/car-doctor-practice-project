import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";


const ServiceCard = ({ data }) => {
    return (
        <div className="card bg-base-100 border">
            <figure className="px-5 pt-5 ">
                <img src={data.img} className='rounded-xl' />
            </figure>
            <div className="card-body ">
                <h2 className="card-title">{data.title}</h2>
                <div className='flex justify-between items-center text-orange-500'>
                    <p className='text-xl font-bold'>Price : {data.price}</p>
                    <Link to={`/checkout/${data._id}`}>
                        <FaArrowRight className='text-xl' />
                    </Link>
                </div>
            </div>
        </div>
    );
};
ServiceCard.propTypes = {
    data: PropTypes.object,
}
export default ServiceCard;