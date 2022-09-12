import {
  Body,
  Controller,
  Inject,
  Logger,
  OnModuleInit,
  Post,
} from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { CreateContractAddressDTO } from './dtos/CreateContractAddress.dto';
import { ContractServiceClient } from './grpc.interface';

@Controller('marketcap')
export class ContractAddressController implements OnModuleInit {
  private svc: ContractServiceClient;
  private logger = new Logger('AppController');

  @Inject('CONTRACTADDRESS_PACKAGE')
  private client: ClientGrpc;

  onModuleInit(): void {
    this.svc = this.client.getService<ContractServiceClient>(
      'ContractAddressService',
    );
  }

  @Post()
  createContractAddress(@Body() body: CreateContractAddressDTO) {
    return this.svc.createContractAddress(body);
  }
}
