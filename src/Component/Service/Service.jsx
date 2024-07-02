import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Service = () => {
    const [allData, setAllData] = useState()
    const [Asc, setAsc] = useState(true)
    const [searchText, setSearchText] = useState('')
    const handleSearch = (e)=>{
        e.preventDefault()
        const text= e.target.search.value
        setSearchText(text);
        // console.log('searchText', searchText);
    }
    useEffect(() => {
        fetch(`http://localhost:5000/services?sort=${Asc? 'asc': 'desc'}&search=${searchText}`)
            .then(res => res.json())
            .then(data => setAllData(data))
    }, [Asc,searchText])

    return (
        <div >
            <div className="text-center my-7">
                <h1 className='text-2xl font-bold text-orange-500'>Service</h1>
                <h1 className="text-4xl md:text-5xl font-bold">Our Service Area</h1>
                <p className="py-6 w-3/4 md:w-2/4 mx-auto">the majority have suffered alteration in some form, by injected humour, or randomised words which do nott look even slightly believable.  </p>
                <form onSubmit={handleSearch}>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs mr-2" name="search"/> 
                <input type="submit" value="Search" className="btn btn-primary" />
                </form>
                <button onClick={()=> setAsc(!Asc)}
                    className="btn bg-orange-500 text-white">
                    {Asc ? 'Price : Low To High' : 'Price : High To Low'}
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
                {
                    allData?.map(data => <ServiceCard key={data._id} data={data}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Service;