import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ScheduleModule } from '@nestjs/schedule';
import { join } from 'path';
import { ContractAddressController } from './contractAddress.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'CONTRACTADDRESS_PACKAGE',
        transport: Transport.GRPC,
        options: {
          url: 'localhost:50053',
          package: 'contractAddress',
          protoPath: join(
            __dirname,
            '../../src/contractAddress/protos/contractAddress.proto',
          ),
        },
      },
      {
        name: 'MARKETCAP_PACKAGE',
        transport: Transport.GRPC,
        options: {
          url: 'localhost:50054',
          package: 'marketcap',
          protoPath: join(
            __dirname,
            '../../src/contractAddress/protos/marketcap.proto',
          ),
        },
      },
    ]),
    ScheduleModule.forRoot(),
  ],
  controllers: [ContractAddressController],
})
export class ContractAddressModule {}
