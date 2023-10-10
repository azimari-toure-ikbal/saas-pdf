import { PineconeClient } from "@pinecone-database/pinecone";

export const getPineconeClient = async () => {
  const client = new PineconeClient();

  await client.init({
    apiKey: process.env.NEXT_PUBLIC_PINECONE_API_KEY!,
    environment: "us-west1-gcp-free",
  });

  return client;
};
