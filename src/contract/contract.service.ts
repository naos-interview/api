import { Inject, Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import {
  ContractServiceClient,
  CreateContractAddressRequest,
} from './contract.interface';

@Injectable()
export class ContractService implements OnModuleInit {
  private logger = new Logger('ContractService');
  private svc: ContractServiceClient;
  constructor(
    @Inject('CONTRACT_PACKAGE')
    private client: ClientGrpc,
  ) {}
  onModuleInit(): void {
    this.svc = this.client.getService<ContractServiceClient>(
      'ContractAddressService',
    );
  }
  createContractAddress(data: CreateContractAddressRequest) {
    return this.svc.createContractAddress(data);
  }
  getAllContractAddress() {
    return this.svc.getAllContractAddress({});
  }
}
