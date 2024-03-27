import OpenAI from 'openai';
import { OPENAI_API_KEY } from '$env/static/private';

export const load: any = async () => {
  const openai = new OpenAI({ apiKey: OPENAI_API_KEY });

  const response = await openai.images.generate({
    model: "dall-e-3",
    prompt: "a white siamese cat",
    n: 1,
    size: "1024x1024",
  });

  const image_url = response.data[0].url;

  return {
    image: {
      url: image_url 
    }
  }
};
