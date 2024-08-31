import Prompt from "@models/prompt";
import { connectDB } from "@utils/mongoose";

export const POST = async (req) => {
    
    const { userID, prompt, tag} = await req.json();

    try {
        await connectDB();
        const newPrompt = new Prompt({
            creador: userID,
            prompt,
            tag
        })
        await newPrompt.save();

        return new Response(JSON.stringify(newPrompt), {status: 201})
    } catch (error) {
        return new Response("Fallo al crear prompt",{status: 500} )
    }
}