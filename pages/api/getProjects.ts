//Import api requirement
import { NextApiRequest, NextApiResponse } from "next";
//Import sanity client
import { sanityClient } from "../../sanity";
import {groq} from 'next-sanity'
import { Project } from "@/typing";

//Define query
const query = groq`*[_type == "project"]{
    ...,
    technologies[]->}

}`

type Data = {
    projects: Project[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
    ) {
    const projects: Project[]  = await sanityClient.fetch(query)
    
    res.status(200).json(projects)
    }