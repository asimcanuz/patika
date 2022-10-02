import cityList from "../data/city.list.json";

const getCityList = async () => {
  const cityListTR = await cityList.filter((city) => city.country === "TR");

  return cityListTR;
};

export default getCityList;
