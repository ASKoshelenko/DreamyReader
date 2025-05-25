import { OpenAIClient, AzureKeyCredential } from '@azure/openai';

const client = new OpenAIClient(
  process.env.AZURE_OPENAI_ENDPOINT!,
  new AzureKeyCredential(process.env.AZURE_OPENAI_API_KEY!)
);

export interface TTSOptions {
  text: string;
  voice?: string;
  speed?: number;
  format?: 'mp3' | 'wav' | 'aac';
}

export async function textToSpeech({
  text,
  voice = 'en-US-JennyNeural',
  speed = 1.0,
  format = 'mp3'
}: TTSOptions): Promise<ArrayBuffer> {
  try {
    const response = await client.getAudioTranscription(
      process.env.AZURE_OPENAI_DEPLOYMENT_NAME!,
      {
        text,
        voice,
        speed,
        format
      }
    );

    return response;
  } catch (error) {
    console.error('Error in textToSpeech:', error);
    throw error;
  }
}

export async function getAvailableVoices(): Promise<string[]> {
  try {
    const response = await client.getAudioVoices();
    return response.voices.map(voice => voice.name);
  } catch (error) {
    console.error('Error getting available voices:', error);
    return [];
  }
} 