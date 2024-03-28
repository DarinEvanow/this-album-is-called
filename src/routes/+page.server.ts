import OpenAI from 'openai';
import { OPENAI_API_KEY } from '$env/static/private';

export const load: any = async () => {
  const openai = new OpenAI({ apiKey: OPENAI_API_KEY });

  // const response = await openai.images.generate({
  //   model: "dall-e-3",
  //   prompt: "a white siamese cat",
  //   n: 1,
  //   size: "1024x1024",
  // });

  // Test data
  const response = {
    data:[{ url: "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg" }]
  }

  const image_url = response.data[0].url;

  return {
    image: {
      url: image_url 
    }
  }
};
