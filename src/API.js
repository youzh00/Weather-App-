const key = "d724cda68c856a754decbec531b904c5";

const searchForm = document.querySelector(".city");

const getweather = async (city) => {
  const data = await fetch(
    `http://api.weatherstack.com/current?access_key=${key}&query=${city}`
  );
  const reponse = await data.json();
  console.log(reponse);
};

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const city = e.target.search.value;
  getweather(city);
});
