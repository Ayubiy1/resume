import { CiLocationOn, CiPhone } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";

const CreateResume = () => {
  return (
    <>
      <div className="">
        <div className="bg-amber-50 w-[1212px] mx-auto">
          <h1 className="text-center text-[66px] font-bold">
            Ayubbek O'rinboyev
          </h1>
          <h3 className="text-center text-[30px] font-bold">
            Frontend Developer
          </h3>
          <div className="flex gap-20 items-center justify-center">
            <div className="flex items-center text-[20px]">
              <CiPhone />
              <span>+998 90 546 90 66</span>
            </div>

            <div className="flex items-center text-[20px]">
              <MdOutlineEmail />
              <span>yourEmail@gmail.com</span>
            </div>

            <div className="flex items-center text-[20px]">
              <CiLocationOn />
              <span>Your location</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateResume;
