import React, { useEffect, useState } from "react";
import PhoneCard from "./PhoneCard";
import Button from "./ui/Button";

const PhonesContainer = ({ phones }) => {
  const [displayPhones, setDisplayPhones] = useState([]);
  const [showAllBtn, setShowAllBtn] = useState(false);
  useEffect(() => {
    if (showAllBtn) {
      setDisplayPhones(phones);
    } else {
      setDisplayPhones(phones.slice(0, 6));
    }
  }, [phones, showAllBtn]);
  // console.log(phones);
  return (
    <div className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center jus mb-8">
        {displayPhones.map((phone) => (
          <PhoneCard phone={phone} key={Math.random()} />
        ))}
      </div>
      <Button
        onClick={() => {
          setShowAllBtn((prev) => !prev);
          if (showAllBtn) {
            window.scrollTo(0, 400);
          }
        }}
        label={showAllBtn ? "Show Less" : "Show All"}
      />
    </div>
  );
};

export default PhonesContainer;
