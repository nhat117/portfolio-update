//Import axios
import axios from "axios";
//Import type
import { Project } from "@/typing";

//Fetch data from axios and convert to type skill array
export const fetchProject = async () => {
  const data: Project[] = await axios
    .get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`)
    .then((res) => {
      return res.data as Project[];
    })
    .catch((err) => {
      console.log(err);
      return [];
    });
  //Return data
  return data;
};
