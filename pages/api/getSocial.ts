//Import api requirement
import { NextApiRequest, NextApiResponse } from "next";
//Import sanity client
import { sanityClient } from "../../sanity";
import {groq} from 'next-sanity'
import { SocialMedia } from "@/typing";

//Define query
const query = groq`*[_type == "socialMedia"]`

type Data = {
    socialMedias: SocialMedia[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
    ) {
    const socialMedias: SocialMedia[]  = await sanityClient.fetch(query)
    
    res.status(200).json(socialMedias)
    }