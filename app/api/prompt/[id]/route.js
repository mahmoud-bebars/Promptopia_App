import { dbConnect } from "@utils/database";
import Prompt from "@models/prompt";

// GET (read)
export const GET = async (rrequest, { params }) => {
  try {
    await dbConnect();
    const prompt = await Prompt.findById(params.id).populate("creator");
    if (!prompt) return new Response("Prompt Not Found", { status: 404 });

    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (error) {
    return new Response("Faild to Fetch Propmts From DB", { status: 500 });
  }
};

// PATCH (update)
export const PATCH = async (request, { params }) => {
  const { prompt, tag } = await request.json();

  try {
    await dbConnect();

    const existingPrompt = await Prompt.findById(params.id);

    if (!existingPrompt)
      return new Response("Prompt Not Found", { status: 404 });

    existingPrompt.prompt = prompt;
    existingPrompt.tag = tag;

    await existingPrompt.save();

    return new Response(JSON.stringify(existingPrompt), { status: 200 });
  } catch (error) {
    return new Response("Faild to Update Your Propmt", { status: 500 });
  }
};

// DELETE (delete)
export const DELETE = async (request, { params }) => {
  try {
    await dbConnect();

    await Prompt.findByIdAndDelete(params.id);

    const deltePost = await existingPrompt.save();

    return new Response("The Prompt Has Been Delted Succesfully", {
      status: 200,
    });
  } catch (error) {
    return new Response("Faild to Update Your Propmt", { status: 500 });
  }
};
