import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  // @Get('marketcap/:tokenAddress')
  // getMarketcap() {
  //   return {
  //     data: 'SDKJFLSDJF',
  //   };
  // }

  // @Get('marketcap/:tokenAddress/history')
  // getMarketcapHistory() {
  //   return {
  //     data: [
  //       {
  //         date: new Date(),
  //         marketcap: 'jshdkchsdk',
  //       },
  //     ],
  //   };
  // }

  // @GrpcMethod('AppController', 'Accumulate')
  // accumulate(numberArray: INumberArray): ISumOfNumberArray {
  //   this.logger.log('Adding' + numberArray.data.toString());
  //   return { sum: this.appService.accumulate() };
  // }
}
