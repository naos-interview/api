import {
  Body,
  Controller,
  Inject,
  Logger,
  OnModuleInit,
  Post,
} from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { CreateTokenAddressDTO } from './dtos/CreateTokenAddress.dto';
import { TokenServiceClient } from './grpc.interface';

@Controller('marketcap')
export class TokenAddressController implements OnModuleInit {
  private svc: TokenServiceClient;
  private logger = new Logger('AppController');

  @Inject('CONTRACTADDRESS_PACKAGE')
  private client: ClientGrpc;

  onModuleInit(): void {
    this.svc = this.client.getService<TokenServiceClient>('TokenAdressService');
  }

  @Post()
  createNewTokenAddress(@Body() body: CreateTokenAddressDTO) {
    return this.svc.createTokenAddress(body);
  }
}
