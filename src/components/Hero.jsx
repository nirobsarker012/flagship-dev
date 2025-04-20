import React, { useState } from "react";
import bannerImg from "../assets/banner.png";
import Button from "./ui/Button";

const Hero = ({ handleSeacrh }) => {
  const [searchText, setSearchTex] = useState("");
  return (
    <div className="py-12">
      <img
        className="w-full mx-auto md:max-w-md"
        src={bannerImg}
        alt="Banner Img"
      />
      <div className="text-center space-y-4">
        <h1 className="font-thin text-7xl text-gray-900">
          Browse,Search,View,Buy
        </h1>
        <p className="text-gray-500 md:max-w-[460px] mx-auto">
          Best place to browse, search, view details and purchase of top
          flagship phones of the current time - FlagshipFaceOff
        </p>
        <form
          onSubmit={(e) => {
            handleSeacrh(e, searchText);
            setSearchTex("");
          }}
          className="flex flex-col md:flex-row justify-center items-center mb-4 md:px-24"
        >
          <input
            defaultValue={searchText}
            onChange={(e) => setSearchTex(e.target.value)}
            className="bg-white border border-gray-300 rounded shadow-md w-2/3 py-3 px-2 mb-3 focus:outline-none focus:shadow-none md:mr-2 md:mb-0"
            type="text"
            placeholder="Search Phone by Name"
          />
          <Button type={"submit"} label={"Search"} />
        </form>
      </div>
    </div>
  );
};

export default Hero;
