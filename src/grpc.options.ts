import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

// Same options object used by microservice server
export const microserviceOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    url: 'localhost:50053',
    package: 'tokenAddress',
    protoPath: join(__dirname, '../src/protos/tokenAddress.proto'),
  },
};
