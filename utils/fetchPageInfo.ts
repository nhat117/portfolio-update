//Import axios
import axios from "axios";
//Import type
import { PageInfo } from "@/typing";

//Fetch data from axios and convert to type skill array
export const fetchPageInfo = async () => {
  const data: PageInfo = await axios
    .get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`)
    .then((res) => {
      return res.data as PageInfo;
    })
    .catch((err) => {
        console.log(err);
        return {} as PageInfo;
    });
  //Return data
  return data;
};
