import person from './../../assets/images/about_us/person.jpg'
import parts from './../../assets/images/about_us/parts.jpg'

const AboutUs = () => {
    return (
        <div className="hero min-h-screen  mt-6 md:mt-2">
            <div className="flex flex-col lg:flex-row gap-x-32 justify-center items-center ">
                <div className='relative  '>
                    <img src={person} className='w-[350px] h-[420px] object-cover rounded-lg'/>
                    <img src={parts} className='hidden md:flex w-[220px] h-[320px] object-cover	 absolute -right-16 -bottom-20 border-8 border-white rounded-lg'/>
                </div>
                <div className='md:w-2/4 flex flex-col  mx-5 md:mx-0 mt-5 md:mt-0'>
                    <div className='space-y-2'>
                    <h1 className='text-2xl font-bold text-orange-500'>About Us</h1>
                    <h1 className="text-4xl md:text-5xl font-bold">We are qualified <br /> & of experience <br /> in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <p>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <button className="btn bg-orange-500 text-white">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;