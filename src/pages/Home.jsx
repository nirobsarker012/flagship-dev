import React, { useState } from "react";
import Hero from "../components/Hero";
import PhonesContainer from "../components/PhonesContainer";
import { useLoaderData } from "react-router";

const Home = () => {
  // Data
  const data = useLoaderData();
  const [phones, setPhones] = useState(data);
  const handleSeacrh = (e, text) => {
    e.preventDefault();
    if (text === "") return setPhones(data);
    const searchedPhones = data.filter(
      (phone) =>
        phone?.name?.toLowerCase().split(" ")?.includes(text.toLowerCase()) ||
        phone?.brand?.toLowerCase().split(" ")?.includes(text.toLowerCase())
    );
    console.log(searchedPhones);
    setPhones(searchedPhones);
  };
  // console.log(data);
  return (
    <div>
      <Hero handleSeacrh={handleSeacrh} />
      <PhonesContainer phones={phones} />
    </div>
  );
};

export default Home;
