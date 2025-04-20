import React, { useEffect, useState } from "react";
import { getFavourites, removeFavourite } from "../utils";
import PhoneCard from "../components/PhoneCard";

const Favourites = () => {
  const [displayPhones, setDisplayPhones] = useState([]);
  useEffect(() => {
    const savedPhone = getFavourites();
    setDisplayPhones(savedPhone);
  }, []);

  const handleDelete = (id) => {
    removeFavourite(id);
    setDisplayPhones(getFavourites());
  };
  return (
    <div>
      <div className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center jus mb-8">
          {displayPhones.map((phone) => (
            <PhoneCard
              handleDelete={handleDelete}
              phone={phone}
              key={Math?.random()}
              deletable={true}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favourites;
