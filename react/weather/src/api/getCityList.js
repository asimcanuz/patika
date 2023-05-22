import cityList from "../data/city.list.json";

const getCityList = async () => {
  return await cityList.filter((city) => city.country === "TR");
};

export default getCityList;
