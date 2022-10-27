import { Module } from '@nestjs/common';
import { EngineController } from './controller/engine.controller';
import { EngineService } from './service/engine.service';

@Module({
    controllers: [EngineController],
    providers: [EngineService]
})
export class EngineModule { }