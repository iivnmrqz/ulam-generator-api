import { Controller, Get } from '@nestjs/common';
import { GptService } from './gpt.service';

@Controller('gpt')
export class GptController {
  constructor(private gptService: GptService) {}
  @Get()
  findAll(): string {
    this.gptService.sendPrompt();
    return 'SHOULD RETURN STRING FOR NOW';
  }
}
