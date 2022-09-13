import { Injectable } from '@nestjs/common';

@Injectable()
export class ApiService {
  accumulate() {
    return 1;
  }
  getHello(): string {
    return 'Hello World!';
  }
}
