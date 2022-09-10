import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TokenAddressModule } from './tokenAddress/tokenAddress.module';

@Module({
  imports: [TokenAddressModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
