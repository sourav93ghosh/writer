import { HttpMethod } from "./HttpMethodEnum";

export interface Request {
  url: string;
  httpMethod: HttpMethod;
  headers?: any;
  requestBody?: any;
  params?: any; // used to build query string
  pathVariable?: any; // entity name to id map
  usePropsFromPreviousCall?: boolean; // use props got from presvious call
  result?: any;
  before(): void;
  complete(data: any): void;
}
