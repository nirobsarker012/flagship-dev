export const getFavourites = () => {
  const favourites = localStorage.getItem("favourites");
  if (favourites) return JSON.parse(favourites);
  return [];
};

export const addFavourites = (phone) => {
  const favouriteItem = getFavourites();
  const isExit = favouriteItem.find((p) => p.id === phone.id);
  if (isExit) return console.log("Phone already added");
  favouriteItem.push(phone);
  localStorage.setItem("favourites", JSON.stringify(favouriteItem));
};

export const removeFavourite = (id) => {
  const favouriteItem = getFavourites();
  const remainingFavourites = favouriteItem.filter((phone) => phone.id !== id);
  localStorage.setItem("favourites", JSON.stringify(remainingFavourites));
};
