import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ContractService } from './contract/contract.service';
import { CreateContractAddressDTO } from './dtos/CreateContractAddress.dto';
import { GetCurrentMarketcapDTO } from './dtos/GetCurrentMarketcap.dto';
import { MarketcapService } from './marketcap/marketcap.service';

@Controller()
export class ApiController {
  constructor(
    private contractService: ContractService,
    private marketcapService: MarketcapService,
  ) {}

  @Post('marketcap')
  createContractAddress(@Body() body: CreateContractAddressDTO) {
    return this.contractService.createContractAddress(body);
  }

  @Get('marketcap')
  getAllContractAddress() {
    return this.contractService.getAllContractAddress();
  }

  @Get('marketcap/:tokenAddress')
  getCurrentMarketcap(@Param() params: GetCurrentMarketcapDTO) {
    return this.marketcapService.getCurrentMarketcap(params.tokenAddress);
  }

  @Get('marketcap/:tokenAddress/history')
  getMarketcapHistory(@Param() params: GetCurrentMarketcapDTO) {
    return this.marketcapService.getMarketcapHistory(params.tokenAddress);
  }
}
