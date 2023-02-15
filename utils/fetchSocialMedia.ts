//Import axios
import axios from "axios";
//Import type
import { SocialMedia } from "../typing";

//Fetch data from axios and convert to type skill array
export const fetchSocialMedia = async () => {
  const data: SocialMedia[] = await axios
    .get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocial`)
    .then((res) => {
      return res.data as SocialMedia[];
    })
    .catch((err) => {
      console.log(err);
      return [];
    });
  //Return data
  return data;
};
