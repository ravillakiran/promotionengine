import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Engine Service Running..."', () => {
      expect(appController.initializePromotionEngine()).toBe(
        'Engine Service Running...',
      );
    });

    it('should return "Engine Service Running..."', () => {
      expect(appController.healthChekPromotionEngine()).toBe({
        status: 200,
        message: 'engine service up and running on port:3000',
      });
    });
  });
});
