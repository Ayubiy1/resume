import { MdOutlineDoneOutline } from "react-icons/md";
import Imagee from "./home-banner-image-d.webp";

const HomePage = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-[5.8rem]">
            Turn your job search into a job offer
          </h2>

          <ul>
            <li className="flex">
              <MdOutlineDoneOutline /> Build a fresh resume or enhance your
              existing document.
            </li>
          </ul>
        </div>

        <img src={Imagee} className="w-[50%]" />
      </div>
    </>
  );
};

export default HomePage;
