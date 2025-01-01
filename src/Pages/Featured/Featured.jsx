import SectionTitle from "../../components/SectionTitle/SectionTitle";
import featuredimg from "../../assets/home/featured.jpg";
import './Featured.css'

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-8 my-20">
      <SectionTitle
        subHeading={"check it out"}
        heading={"featured item"}
      ></SectionTitle>
      <div className="md:flex justify-center items-center bg-slate-600 bg-opacity-50 pb-20 pt-12 px-36">
        <div>
          <img src={featuredimg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Sep 20, 2028</p>
          <p className="uppercase">where can i get some?</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima qui
            laudantium eos? Illo error vero repellat placeat sed earum laborum
            harum inventore voluptatem totam voluptas architecto eius rem
            expedita labore, iure suscipit dicta animi distinctio. Deleniti
            magni quas omnis commodi, asperiores nihil itaque fugiat autem quos,
            sequi ullam non doloremque!
          </p>
          <button className="btn btn-outline border-0 border-b-4 mt-4 text-white uppercase">read more</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
