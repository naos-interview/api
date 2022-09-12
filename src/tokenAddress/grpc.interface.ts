import { Observable } from 'rxjs';

export interface CreateTokenAddressRequest {
  tokenAddress: string;
}

export interface CreateTokenAddressResponse {
  message: string;
}

export interface TokenServiceClient {
  createContractAddress(
    request: CreateTokenAddressRequest,
  ): Observable<CreateTokenAddressResponse>;
}
