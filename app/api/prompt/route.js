import Prompt from "@models/prompt";
import { connectDB } from "@utils/mongoose";

export const GET = async (req) => {
    
    try {
        await connectDB();

        const prompts = await Prompt.find({}).populate('creador');

        return new Response(JSON.stringify(prompts), {status: 200})

    } catch (error) {
        return new Response('Fallo al obtener posts', {status: 500})
    }
}