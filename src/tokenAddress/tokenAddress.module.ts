import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { TokenAddressController } from './tokenAddress.controller';

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
            '../../src/tokenAddress/protos/contractAddress.proto',
          ),
        },
      },
    ]),
  ],
  controllers: [TokenAddressController],
})
export class TokenAddressModule {}
