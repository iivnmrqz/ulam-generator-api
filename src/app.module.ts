import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GptController } from './gpt/gpt.controller';
import { GptService } from './gpt/gpt.service';

@Module({
  controllers: [AppController, GptController],
  providers: [AppService, GptService],
})
export class AppModule {}
