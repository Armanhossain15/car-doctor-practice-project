
import img1 from './../../assets/images/banner/1.jpg'
import img2 from './../../assets/images/banner/2.jpg'
import img3 from './../../assets/images/banner/3.jpg'
import img4 from './../../assets/images/banner/4.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full h-[500px] rounded-2xl">
                <img src={img1} className="w-full rounded-2xl" />
                <div className='absolute text-white w-full flex flex-col   h-full justify-center bg-gradient-to-r from-[#151515] to-[#15151500] rounded-2xl'>
                    <div className='md:pl-14 space-y-4 text-center md:text-left lg:w-2/6'>
                        <h1 className=' text-5xl font-bold'>Affordable <br /> Price For Car <br /> Servicing</h1>
                        <p   className='mx-5 md:mx-0'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className='btn btn-primary mr-6'>Discover More</button>
                        <button className='btn btn-outline border-white text-white'>Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2  right-28 md:right-12 bottom-5 ">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full h-[500px] rounded-2xl">
                <img src={img2} className="w-full rounded-2xl" />
                <div className='absolute text-white w-full flex flex-col   h-full justify-center bg-gradient-to-r from-[#151515] to-[#15151500] rounded-2xl'>
                    <div className='md:pl-14 space-y-4 text-center md:text-left lg:w-2/6'>
                        <h1 className='text-5xl font-bold'>Affordable <br /> Price For Car <br /> Servicing</h1>
                        < p className='mx-5 md:mx-0'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className='btn btn-primary mr-6'>Discover More</button>
                        <button className='btn btn-outline border-white text-white'>Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2  right-28 md:right-12 bottom-5 ">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full h-[500px] rounded-2xl">
                <img src={img3} className="w-full rounded-2xl" />
                <div className='absolute text-white w-full flex flex-col   h-full justify-center bg-gradient-to-r from-[#151515] to-[#15151500] rounded-2xl'>
                    <div className='md:pl-14 space-y-4 text-center md:text-left lg:w-2/6'>
                        <h1 className='text-5xl font-bold'>Affordable <br /> Price For Car <br /> Servicing</h1>
                        < p className='mx-5 md:mx-0'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className='btn btn-primary mr-6'>Discover More</button>
                        <button className='btn btn-outline border-white text-white'>Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2  right-28 md:right-12 bottom-5">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full h-[500px] rounded-2xl">
                <img src={img4} className="w-full rounded-2xl" />
                <div className='absolute text-white w-full flex flex-col   h-full justify-center bg-gradient-to-r from-[#151515] to-[#15151500] rounded-2xl'>
                    <div className='md:pl-14 space-y-4 text-center md:text-left lg:w-2/6'>
                        <h1 className='text-5xl font-bold'>Affordable <br /> Price For Car <br /> Servicing</h1>
                        < p className='mx-5 md:mx-0'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className='btn btn-primary mr-6'>Discover More</button>
                        <button className='btn btn-outline border-white text-white'>Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2  right-28 md:right-12 bottom-5">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;