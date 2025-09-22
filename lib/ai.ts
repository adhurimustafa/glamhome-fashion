import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const endpoint = process.env.AZURE_OPENAI_ENDPOINT;
const apiKey = process.env.AZURE_OPENAI_KEY;
const deployment = process.env.AZURE_OPENAI_DEPLOYMENT;
const apiVersion = process.env.AZURE_API_VERSION || '2024-05-01-preview';

if (!endpoint || !apiKey || !deployment) {
  console.error('❌ Missing Azure OpenAI environment variables.');
}

const headers = {
  'Content-Type': 'application/json',
  'api-key': apiKey,
};

interface Product {
  name: string;
  description: string;
  [key: string]: any;
}

type Locale = string;
type Tone = string;

async function generateDescription(product: Product, locale: Locale): Promise<string> {
  const url = `${endpoint}/openai/deployments/${deployment}/completions?api-version=${apiVersion}`;
  const body = {
    prompt: `Generate a description for the product: ${JSON.stringify(product)} in locale: ${locale}.`,
    max_tokens: 100,
  };

  try {
    const response = await axios.post(url, body, { headers, timeout: 5000 });
    return response.data.choices[0].text.trim();
  } catch (error: any) {
    handleError(error, 'generateDescription');
    throw error;
  }
}

async function rewrite(text: string, tone: Tone): Promise<string> {
  const url = `${endpoint}/openai/deployments/${deployment}/completions?api-version=${apiVersion}`;
  const body = {
    prompt: `Rewrite the following text in a ${tone} tone: ${text}`,
    max_tokens: 100,
  };

  try {
    const response = await axios.post(url, body, { headers, timeout: 5000 });
    return response.data.choices[0].text.trim();
  } catch (error: any) {
    handleError(error, 'rewrite');
    throw error;
  }
}

function handleError(error: any, functionName: string): void {
  if (error.response) {
    console.error(`❌ ${functionName} failed with status ${error.response.status}:`, error.response.data);
  } else if (error.request) {
    console.error(`❌ ${functionName} failed: No response received.`);
  } else {
    console.error(`❌ ${functionName} error:`, error.message);
  }
}

export { generateDescription, rewrite };