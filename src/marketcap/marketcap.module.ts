import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ScheduleModule } from '@nestjs/schedule';
import { join } from 'path';
import { MarketcapService } from './marketcap.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'MARKETCAP_PACKAGE',
        transport: Transport.GRPC,
        options: {
          url: 'marketcap-service:50054',
          package: 'marketcap',
          protoPath: join(__dirname, '../../src/protos/marketcap.proto'),
        },
      },
    ]),
    ScheduleModule.forRoot(),
  ],
  controllers: [],
  providers: [MarketcapService],
  exports: [MarketcapService],
})
export class MarketcaptModule {}
