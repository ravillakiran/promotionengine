import { Injectable } from '@nestjs/common';
import { HealthStatus } from './app.model';

@Injectable()
export class AppService {
  initializePromotionEngine(): string {
    return 'Engine Service Running...';
  }

  healthChek(): HealthStatus {
    return {
      status: 200,
      message: 'engine service up and running on port:3000',
    };
  }
}
