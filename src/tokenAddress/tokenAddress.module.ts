import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { TokenAddressController } from './tokenAddress.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'TOKENADDRESS_PACKAGE',
        transport: Transport.GRPC,
        options: {
          url: 'localhost:50053',
          package: 'tokenAddress',
          protoPath: join(
            __dirname,
            '../../src/tokenAddress/protos/tokenAddress.proto',
          ),
        },
      },
    ]),
  ],
  controllers: [TokenAddressController],
})
export class TokenAddressModule {}
