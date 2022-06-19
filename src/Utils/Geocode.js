import axios from "axios";

export const geocode = async (city) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    city
  )}.json?access_token=pk.eyJ1IjoibW9vbGRhcjIwIiwiYSI6ImNsMjJjZndyazBkdDkzaW8xaTF4amU2amkifQ.ShjuTzuL68yhSUp40vjiQQ&limit=1`;
  const address = {};

  const { data } = await axios.get(url);
  if (data.features.length === 0) {
    address.message = "failed";
    return address;
  }
  address.latitude = data.features[0].center[1];
  address.longitude = data.features[0].center[0];
  address.location = data.features[0].place_name;
  return address;
};
