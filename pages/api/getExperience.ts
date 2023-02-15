//Import api requirement
import { NextApiRequest, NextApiResponse } from "next";
//Import sanity client
import { sanityClient } from "../../sanity";
import {groq} from 'next-sanity'
import { Experience } from '../../typing';

//Define query
const query = groq`*[_type == "experience"]{
    ...,
    technologies[]->
}`

type Data = {
    experiences: Experience[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
    ) {
    const experiences: Experience[]  = await sanityClient.fetch(query)
    
    res.status(200).json(experiences)
    }