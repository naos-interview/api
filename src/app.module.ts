import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContractAddressModule } from './contractAddress/contractAddress.module';

@Module({
  imports: [ContractAddressModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
