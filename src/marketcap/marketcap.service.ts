import { Inject, Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { MarketcapServiceClient } from './marketcap.interface';

@Injectable()
export class MarketcapService implements OnModuleInit {
  private logger = new Logger('MarketcapService');
  private svc: MarketcapServiceClient;
  constructor(
    @Inject('MARKETCAP_PACKAGE')
    private client: ClientGrpc,
  ) {}

  onModuleInit(): void {
    this.svc =
      this.client.getService<MarketcapServiceClient>('MarketcapService');
  }

  getCurrentMarketcap(contractAddress: string) {
    return this.svc.getCurrentMarketcap({
      contractAddress,
    });
  }

  getMarketcapHistory(contractAddress: string) {
    return this.svc.getMarketcapHistory({
      contractAddress,
    });
  }
}
