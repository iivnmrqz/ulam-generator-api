import { Injectable } from '@nestjs/common';
import { OpenAI } from 'openai';

@Injectable()
export class GptService {
  private readonly openai: OpenAI;

  constructor() {
    this.openai = new OpenAI({
      organization: process.env.OPENA_ORG_ID,
      project: process.env.OPENAI_PROJ_ID,
    });
  }
  async sendPrompt() {
    const stream = await this.openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: 'Say this is a test' }],
      stream: true,
    });

    for await (const chunk of stream) {
      console.log(chunk.choices[0]?.delta?.content || '');
    }
  }
}
