//Import axios
import axios from "axios";
//Import type
import { Skill } from "@/typing";

//Fetch data from axios and convert to type skill array
export const fetchSkill = async () => {
  const data: Skill[] = await axios
    .get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`)
    .then((res) => {
      return res.data as Skill[];
    })
    .catch((err) => {
        console.log(err);
        return [];  
    });
  //Return data
  return data;
};
