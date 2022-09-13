import { Observable } from 'rxjs';

export interface GetMarketcapHistoryRequest {
  contractAddress: string;
}

export interface GetMarketcapHistoryResponse {
  data: [];
}

export interface GetCurrentMarketcapRequest {
  contractAddress: string;
}

export interface GetCurrentMarketcapResponse {
  data: [];
}
export interface MarketcapServiceClient {
  getCurrentMarketcap(
    request: GetCurrentMarketcapRequest,
  ): Observable<GetCurrentMarketcapResponse>;
  getMarketcapHistory(
    request: GetMarketcapHistoryRequest,
  ): Observable<GetMarketcapHistoryResponse>;
}
