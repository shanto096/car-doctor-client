
import img1 from '../../assets/assets/images/products/1.png'
import img2 from '../../assets/assets/images/products/2.png'
import img3 from '../../assets/assets/images/products/3.png'
import img4 from '../../assets/assets/images/products/4.png'
import img5 from '../../assets/assets/images/products/5.png'
import img6 from '../../assets/assets/images/products/6.png'
const Products = () => {
    return (
        <div>
            <div className="my-10 ">
            <div className="space-y-3 mx-2">
                <h2 className=" text-center font-bold text-orange-500">Popular Products</h2>
                <h1 className=" text-center text-4xl font-bold">Browse Our Products</h1>
                <p className="text-center">the majority have suffered alteration in some form, by injected humour, <br /> or randomised words which dot look even slightly believable. </p>
            </div>
            </div>
             <div className='flex justify-center mb-20'>
            <div className='grid md:grid-cols-3 md:gap-10 gap-10 mx-5 md:mx-0  text-white items-center '>
                <div className='border-2 text-center rounded-md p-4  '>
                    <img src={img1} className='border-[1px] rounded-md h-60 w-96 ' alt="" />
                    <div className='mt-3'>
                        <p className='text-black font-bold text-lg'>Car Engine Plug</p>
                        <h1 className='text-xl text-orange-500'>$20.00</h1>
                    </div>
                </div>

                <div className='border-2 text-center rounded-md p-4  '>
                    <img src={img2} className='border-[1px] rounded-md h-60 w-96 ' alt="" />
                    <div className='mt-3'>
                        <p className='text-black font-bold text-lg'>Car Engine Plug</p>
                        <h1 className='text-xl text-orange-500'>$20.00</h1>
                    </div>
                </div>

                <div className='border-2 text-center rounded-md p-4  '>
                    <img src={img3} className='border-[1px] rounded-md h-60 w-96 ' alt="" />
                    <div className='mt-3'>
                        <p className='text-black font-bold text-lg'>Car Engine Plug</p>
                        <h1 className='text-xl text-orange-500'>$20.00</h1>
                    </div>
                </div>

                <div className='border-2 text-center rounded-md p-4  '>
                    <img src={img4} className='border-[1px] rounded-md h-60 w-96 ' alt="" />
                    <div className='mt-3'>
                        <p className='text-black font-bold text-lg'>Car Engine Plug</p>
                        <h1 className='text-xl text-orange-500'>$20.00</h1>
                    </div>
                </div>

                <div className='border-2 text-center rounded-md p-4  '>
                    <img src={img5} className='border-[1px] rounded-md h-60 w-96' alt="" />
                    <div className='mt-3'>
                        <p className='text-black font-bold text-lg'>Car Engine Plug</p>
                        <h1 className='text-xl text-orange-500'>$20.00</h1>
                    </div>
                </div>
                <div className='border-2 text-center rounded-md p-4  '>
                    <img src={img6} className='border-[1px] rounded-md h-60 w-96 ' alt="" />
                    <div className='mt-3'>
                        <p className='text-black font-bold text-lg'>Car Engine Plug</p>
                        <h1 className='text-xl text-orange-500'>$20.00</h1>
                    </div>
                </div>

                </div>
            </div>
        </div>
        
    );
};

export default Products;