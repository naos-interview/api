import { Module } from '@nestjs/common';
import { ApiController } from './api.controller';
import { ApiService } from './app.service';
import { ContractModule } from './contract/contract.module';
import { MarketcaptModule } from './marketcap/marketcap.module';

@Module({
  imports: [ContractModule, MarketcaptModule],
  controllers: [ApiController],
  providers: [ApiService],
})
export class ApiModule {}
