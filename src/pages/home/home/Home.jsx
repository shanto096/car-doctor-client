import About from "../../about/About";
import Feature from "../../feature/Feature";
import Products from "../../products/Products";
import Services from "../../services/Services";
import ServiceContect from "../../services/serviceContect/ServiceContect";
import Banner from "../banner/Banner";




const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <ServiceContect></ServiceContect>
            <Products></Products>
            <Feature></Feature>
        </div>
    );
};

export default Home;