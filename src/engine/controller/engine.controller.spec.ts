import { Test } from '@nestjs/testing';
import { EngineService } from '../service/engine.service';
import { EngineController } from './engine.controller';

describe('Engine Controller', () => {
  let engineController: EngineController;
  let engineService: EngineService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [EngineController],
      providers: [EngineService],
    }).compile();

    engineService = moduleRef.get<EngineService>(EngineService);
    engineController = moduleRef.get<EngineController>(EngineController);
  });

  describe('promotionEngine', () => {
    it('should return result for scenario A with result => 100', async () => {
      const result = 100;
      const cartData = {
        products: [
          {
            productId: 'A',
          },
          {
            productId: 'B',
          },
          {
            productId: 'C',
          },
        ],
      };
      jest
        .spyOn(engineService, 'getEngineData')
        .mockImplementation(() => result);

      expect(await engineController.getPromotionResult(cartData)).toBe(result);
    });
  });

  describe('promotionEngine', () => {
    it('should return result for scenario B with result => 370', async () => {
      const result = 285;
      const cartData = {
        products: [
          {
            productId: 'A',
          },
          {
            productId: 'A',
          },
          {
            productId: 'A',
          },
          {
            productId: 'B',
          },
          {
            productId: 'B',
          },
          {
            productId: 'B',
          },
          {
            productId: 'B',
          },
          {
            productId: 'B',
          },
          {
            productId: 'C',
          },
        ],
      };
      jest
        .spyOn(engineService, 'getEngineData')
        .mockImplementation(() => result);

      expect(await engineController.getPromotionResult(cartData)).toBe(result);
    });
  });

  describe('promotionEngine', () => {
    it('should return result for scenario B with result => 280', async () => {
      const result = 285;
      const cartData = {
        products: [
          {
            productId: 'A',
          },
          {
            productId: 'A',
          },
          {
            productId: 'A',
          },
          {
            productId: 'B',
          },
          {
            productId: 'B',
          },
          {
            productId: 'B',
          },
          {
            productId: 'B',
          },
          {
            productId: 'B',
          },
          {
            productId: 'C',
          },
          {
            productId: 'D',
          },
        ],
      };
      jest
        .spyOn(engineService, 'getEngineData')
        .mockImplementation(() => result);

      expect(await engineController.getPromotionResult(cartData)).toBe(result);
    });
  });
});
