import { Observable } from 'rxjs';

export interface CreateContractAddressRequest {
  tokenAddress: string;
}

export interface CreateContractAddressResponse {
  message: string;
}

export interface ContractServiceClient {
  createContractAddress(
    request: CreateContractAddressRequest,
  ): Observable<CreateContractAddressResponse>;
}
