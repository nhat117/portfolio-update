//Import api requirement
import { NextApiRequest, NextApiResponse } from "next";
//Import sanity client
import { sanityClient } from "../../sanity";
import {groq} from 'next-sanity'
import { Skill } from "@/typing";

//Define query
const query = groq`*[_type == "skill"]`

type Data = {
    skills: Skill[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
    ) {
    const skills: Skill[]  = await sanityClient.fetch(query)
    
    res.status(200).json(skills)
    }