import Prompt from "@models/prompt";
import { connectDB } from "@utils/mongoose";

export const GET = async (req, {params}) => {
    
    try {
        await connectDB();

        const prompts = await Prompt.find({creador: params.id}).populate('creador');

        return new Response(JSON.stringify(prompts), {status: 200})

    } catch (error) {
        return new Response('Fallo al obtener posts', {status: 500})
    }
}