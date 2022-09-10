import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  accumulate() {
    return 1;
  }
  getHello(): string {
    return 'Hello World!';
  }
}
