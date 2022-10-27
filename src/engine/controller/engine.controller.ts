import { Body, Controller, Post } from '@nestjs/common';
import { CartData } from '../model/engine.model';
import { EngineService } from '../service/engine.service';

@Controller()
export class EngineController {
  constructor(private readonly engineService: EngineService) {}

  @Post('/promotionEngine')
  getPromotionResult(@Body() cartData: CartData): number {
    return this.engineService.getEngineData(cartData);
  }
}
