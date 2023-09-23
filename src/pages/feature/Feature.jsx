
import img1 from '../../assets/assets/icons/group.svg'
import img2 from '../../assets/assets/icons/Wrench.svg'
import img3 from '../../assets/assets/icons/deliveryt.svg'
import img4 from '../../assets/assets/icons/group.svg'
import img5 from '../../assets/assets/icons/deliveryt.svg'
import img6 from '../../assets/assets/icons/Wrench.svg'
const Feature = () => {
    return (
        <div>
            <div className="my-10 ">
            <div className="space-y-3 mx-2">
                <h2 className=" text-center font-bold text-orange-500">Core Features</h2>
                <h1 className=" text-center text-4xl font-bold">Why Choose Us</h1>
                <p className="text-center">the majority have suffered alteration in some form, by injected humour, <br /> or randomised words which dot look even slightly believable. </p>
            </div>
            </div>
             <div className='flex justify-center mb-20 border-2 py-10 rounded-md mx-5 md:mx-0'>
            <div className='grid md:grid-cols-6 grid-cols-2   md:gap-20 gap-5 text-white items-center '>
                <div className='border-2 text-center rounded-md p-4  '>
                    <div className='flex justify-center'>
                    <img src={img1} className='border-[1px] p-2  rounded-md  ' alt="" />
                    </div>
                    <div className='mt-3'>
                        <p className='text-black font-bold'>Expert Team</p>
                        
                    </div>
                </div>


                <div className='border-2 text-center rounded-md p-4  '>
                    <div className='flex justify-center'>
                    <img src={img2} className='border-[1px] p-2  rounded-md  ' alt="" />
                    </div>
                    <div className='mt-3'>
                        <p className='text-black font-bold '>Expert Team</p>
                        
                    </div>
                </div>

                <div className='border-2 text-center rounded-md p-4  '>
                    <div className='flex justify-center'>
                    <img src={img3} className='border-[1px] p-2  rounded-md  ' alt="" />
                    </div>
                    <div className='mt-3'>
                        <p className='text-black font-bold '>Expert Team</p>
                        
                    </div>
                </div>

                <div className='border-2 text-center rounded-md p-4  '>
                    <div className='flex justify-center'>
                    <img src={img4} className='border-[1px] p-2  rounded-md  ' alt="" />
                    </div>
                    <div className='mt-3'>
                        <p className='text-black font-bold '>Expert Team</p>
                        
                    </div>
                </div>

                <div className='border-2 text-center rounded-md p-4  '>
                    <div className='flex justify-center'>
                    <img src={img5} className='border-[1px] p-2  rounded-md  ' alt="" />
                    </div>
                    <div className='mt-3'>
                        <p className='text-black font-bold '>Expert Team</p>
                        
                    </div>
                </div>

                <div className='border-2 text-center rounded-md p-4  '>
                    <div className='flex justify-center'>
                    <img src={img6} className='border-[1px] p-2  rounded-md  ' alt="" />
                    </div>
                    <div className='mt-3'>
                        <p className='text-black font-bold'>Expert Team</p>
                        
                    </div>
                </div>

                </div>
            </div>
        </div>
        
    );
};

export default Feature;