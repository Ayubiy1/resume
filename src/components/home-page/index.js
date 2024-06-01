import Imagee from "./imgs/home-banner-image-d.webp";

import "./style.css";

const HomePage = () => {
  return (
    <>
      <div className="flex items-center justify-between mt-20 bg-gray-4000">
        <div>
          <h2
            className="text-[5.8rem]"
            style={{ fontFamily: '"Roboto Slab", serif' }}
          >
            Turn your job search into a job offer
          </h2>

          <button
            className="text-[22px] menu-btn"
            style={{ fontFamily: '"Roboto Slab", serif' }}
          >
            Create Resume
          </button>
        </div>

        <img src={Imagee} className="w-[50%]" />
      </div>
    </>
  );
};

export default HomePage;
