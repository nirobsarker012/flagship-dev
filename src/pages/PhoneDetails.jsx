import React from "react";
import { useLoaderData, useParams } from "react-router";
import Button from "../components/ui/Button";
import { MdBookmarkAdded } from "react-icons/md";
import { BsFillCartCheckFill } from "react-icons/bs";
import { addFavourites } from "../utils";

const PhoneDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const singlePhone = data?.find((phone) => phone?.id === parseInt(id));
  const {
    brand,
    name,
    model,
    image,
    price,
    description,
    storage,
    camera_info,
  } = singlePhone || {};
  const handleFavourite = () => {
    addFavourites(singlePhone);
  };
  return (
    <div className="w-full py-5">
      <img
        className="w-full mx-auto md:max-w-xl"
        src={image}
        alt="Banner Img"
      />
      {/* Title and buttons section */}
      <div className="flex justify-between mt-4">
        <h2 className="text-6xl font-thin mb-8">{name}</h2>
        <div className="flex gap-2.5">
          <Button type="submit" label={<BsFillCartCheckFill />} />
          <Button onClick={handleFavourite} label={<MdBookmarkAdded />} />
        </div>
      </div>
      {/* Details */}
      <div></div>
    </div>
  );
};

export default PhoneDetails;
