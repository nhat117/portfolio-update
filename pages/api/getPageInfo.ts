//Import api requirement
import { NextApiRequest, NextApiResponse } from "next";
//Import sanity client
import { sanityClient } from "../../sanity";
import { groq } from "next-sanity";
import { PageInfo } from "@/typing";

//Define query
const query = groq`*[_type == "pageInfo"][0]`;

type Data = {
  pageInfo: PageInfo;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const pageInfo: PageInfo = await sanityClient.fetch(query).catch((err) => console.log(err));
  console.log(pageInfo);
  res.status(200).json(pageInfo);
}
