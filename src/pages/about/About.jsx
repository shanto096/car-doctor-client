import aboutImg from '../../assets/assets/images/about_us/person.jpg'
import aboutImg2 from '../../assets/assets/images/about_us/parts.jpg'
const About = () => {
  return (
    <div className="md:flex lg:card-side md:my-12  ml-3 md:ml-0">
        <div className='relative flex '>
        <figure>
        <img className='w-[65%] rounded-md'
          src={aboutImg}
          alt="Album"
        />
      </figure>
        <div className='flex absolute justify-end  right-5 bottom-0'>
          <img className='w-[40%] rounded-md' src={aboutImg2} alt="" />
        </div>
        </div>
      
      <div className="card-body md:space-y-5">
        <h2 className="card-title text-orange-500">About us</h2>
        <h1 className="card-title text-3xl font-bold">We are qualified & of experience in this field</h1>
        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dot look even slightly believable. </p>
        <div className="card-actions ">
          <button className="btn btn-primary bg-orange-500">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
