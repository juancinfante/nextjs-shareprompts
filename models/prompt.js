import { Schema, model, models } from "mongoose";

const PromptSchema = new Schema({
    creador: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    prompt:{
        type: String,
        required: [true, 'El prompt es requerido.'],
    },
    tag: {
        type: String,
        required: [true, 'El tag es requerido.'],
    }
})

const Prompt = models.Prompt || model("Prompt", PromptSchema);

export default Prompt;

