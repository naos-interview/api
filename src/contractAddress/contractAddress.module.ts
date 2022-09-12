import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
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
    ]),
  ],
  controllers: [ContractAddressController],
})
export class ContractAddressModule {}