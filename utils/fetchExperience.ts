//Import axios
import axios from "axios";
//Import type
import { Experience } from "@/typing";

//Fetch data from axios and convert to type skill array
export const fetchExperience = async () => {
  const data: Experience[] = await axios
    .get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`)
    .then((res) => {
      console.log(res.data);
      return res.data as Experience[];
    })
    .catch((err) => {
        console.log(err);
        return [];  
    });
  return data;
};
