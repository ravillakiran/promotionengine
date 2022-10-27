import { Controller, Get } from '@nestjs/common';
import { HealthStatus } from './app.model';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  initializePromotionEngine(): string {
    return this.appService.initializePromotionEngine();
  }

  @Get('/helathcheck')
  healthChekPromotionEngine(): HealthStatus {
    return this.appService.healthChek();
  }
}
