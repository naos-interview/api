import {
  Body,
  Controller,
  Get,
  Inject,
  Logger,
  OnModuleInit,
  Param,
  Post,
} from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Cron } from '@nestjs/schedule';
import { CreateContractAddressDTO } from './dtos/CreateContractAddress.dto';
import { GetCurrentMarketcapDTO } from './dtos/GetCurrentMarketcap.dto';
import { ContractServiceClient } from './grpc.interface';
import { MarketcapServiceClient } from './marketcap.interface';

@Controller('marketcap')
export class ContractAddressController implements OnModuleInit {
  private svc: ContractServiceClient;
  private marketcapService: MarketcapServiceClient;
  private logger = new Logger('AppController');

  @Inject('CONTRACTADDRESS_PACKAGE')
  private client: ClientGrpc;

  @Inject('MARKETCAP_PACKAGE')
  private marketClient: ClientGrpc;

  onModuleInit(): void {
    this.svc = this.client.getService<ContractServiceClient>(
      'ContractAddressService',
    );
    this.marketcapService =
      this.marketClient.getService<MarketcapServiceClient>('MarketcapService');
  }

  @Post()
  createContractAddress(@Body() body: CreateContractAddressDTO) {
    return this.svc.createContractAddress(body);
  }
  @Get(':tokenAddress')
  getCurrentMarketcap(@Param() params: GetCurrentMarketcapDTO) {
    return this.marketcapService.getCurrentMarketcap({
      contractAddress: params.tokenAddress,
    });
  }

  @Get(':tokenAddress/history')
  getMarketcapHistory(@Param() params: GetCurrentMarketcapDTO) {
    return this.marketcapService.getMarketcapHistory({
      contractAddress: params.tokenAddress,
    });
  }
}
