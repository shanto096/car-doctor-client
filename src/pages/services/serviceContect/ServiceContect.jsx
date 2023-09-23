
import img2 from '../../../assets/assets/icons/Wrench.svg'
import img from '../../../assets/assets/icons/deliveryt.svg'
const ServiceContect = () => {
    return (
        <div className='flex justify-around bg-base-200 py-14 my-10 rounded-md md:mx-0 mx-3'>
            <div className='grid md:grid-cols-3 md:gap-36 gap-16  text-white items-center '>
                <div className='flex'>
                    <img src={img} alt="" />
                    <div className='ml-2'>
                        <p className='font-bold text-lg'>We are open monday-friday</p>
                        <h1 className='text-xl'>7:00 am - 9:00 pm</h1>
                    </div>
                </div>

                <div className='flex'>
                    <img src={img2} alt="" />
                    <div className='ml-2'>
                        <p className='font-bold text-lg'>Have a question?</p>
                        <h1 className='text-xl'>+2546 251 2658</h1>
                    </div>
                </div>

                <div className='flex'>
                    <img src={img} alt="" />
                    <div className='ml-2'>
                        <p className='font-bold text-lg'>Need a repair? our address</p>
                        <h1 className='text-xl'>7Liza Street, New York</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceContect;