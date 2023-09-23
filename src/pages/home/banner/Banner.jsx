import img1 from '../../../assets/assets/images/banner/6.jpg'
import img2 from '../../../assets/assets/images/banner/2.jpg'
import img3 from '../../../assets/assets/images/banner/3.jpg'
import img4 from '../../../assets/assets/images/banner/5.jpg'
const Banner = () => {
    return (
        <div className="carousel w-full my-10 rounded-md ">
        <div id="slide1" className="carousel-item relative  w-full">
          <img src={img2} className="w-full md:h-[80vh] h-[50vh]" />
          <div className=' bg-gradient-to-r from-[#000000] to-[rgba(21, 21, 21, 0)]  h-full absolute flex items-center left-0   top-0 '>
           <div className=' md:pl-32 pl-8 md:w-1/2 md: space-y-7 text-white'>
           <h1 className='md:text-6xl text-4xl font-bold '>Affordable Price For Car Servicing</h1>
            <p className=''>There are many variations of passages of  available,<br /> but the majority have suffered alteration in some form</p>
            <div>
            <button className="btn  btn-outline btn-secondary mr-5">Discover More</button>
            <button className="btn btn-outline btn-secondary">Latest Project</button>
            </div>
           </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 ">
            <a href="#slide4" className="btn btn-circle btn-outline border-[3px] bg-white btn-secondary mr-5">❮</a> 
            <a href="#slide2" className="btn btn-circle btn-outline border-[3px]  bg-white btn-secondary mr-5">❯</a>
          </div>
         
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
        <img src={img1} className="w-full md:h-[80vh] h-[50vh]" />
          <div className=' bg-gradient-to-r from-[#000000] to-[rgba(21, 21, 21, 0)]  h-full absolute flex items-center left-0   top-0 '>
           <div className=' md:pl-32 pl-8 md:w-1/2 md: space-y-7 text-white'>
           <h1 className='md:text-6xl text-4xl font-bold '>Affordable Price For Car Servicing</h1>
            <p className=''>There are many variations of passages of  available,<br /> but the majority have suffered alteration in some form</p>
            <div>
            <button className="btn  btn-outline btn-secondary mr-5">Discover More</button>
            <button className="btn btn-outline btn-secondary">Latest Project</button>
            </div>
           </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 ">
            <a href="#slide4" className="btn btn-circle btn-outline border-[3px] bg-white btn-secondary mr-5">❮</a> 
            <a href="#slide2" className="btn btn-circle btn-outline border-[3px]  bg-white btn-secondary mr-5">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full md:h-[80vh] h-[50vh]" />
          <div className=' bg-gradient-to-r from-[#000000] to-[rgba(21, 21, 21, 0)]  h-full absolute flex items-center left-0   top-0 '>
           <div className=' md:pl-32 pl-8 md:w-1/2 md: space-y-7 text-white'>
           <h1 className='md:text-6xl text-4xl font-bold '>Affordable Price For Car Servicing</h1>
            <p className=''>There are many variations of passages of  available,<br /> but the majority have suffered alteration in some form</p>
            <div>
            <button className="btn  btn-outline btn-secondary mr-5">Discover More</button>
            <button className="btn btn-outline btn-secondary">Latest Project</button>
            </div>
           </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 ">
            <a href="#slide4" className="btn btn-circle btn-outline border-[3px] bg-white btn-secondary mr-5">❮</a> 
            <a href="#slide2" className="btn btn-circle btn-outline border-[3px]  bg-white btn-secondary mr-5">❯</a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full md:h-[80vh] h-[50vh]" />
          <div className=' bg-gradient-to-r from-[#000000] to-[rgba(21, 21, 21, 0)]  h-full absolute flex items-center left-0   top-0 '>
           <div className=' md:pl-32 pl-8 md:w-1/2 md: space-y-7 text-white'>
           <h1 className='md:text-6xl text-4xl font-bold '>Affordable Price For Car Servicing</h1>
            <p className=''>There are many variations of passages of  available,<br /> but the majority have suffered alteration in some form</p>
            <div>
            <button className="btn  btn-outline btn-secondary mr-5">Discover More</button>
            <button className="btn btn-outline btn-secondary">Latest Project</button>
            </div>
           </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 ">
            <a href="#slide4" className="btn btn-circle btn-outline border-[3px] bg-white btn-secondary mr-5">❮</a> 
            <a href="#slide2" className="btn btn-circle btn-outline border-[3px]  bg-white btn-secondary mr-5">❯</a>
          </div>
        </div>
      </div>
    );
};

export default Banner;