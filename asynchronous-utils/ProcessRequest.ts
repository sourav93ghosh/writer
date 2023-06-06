import { HttpClient } from "./HttpClient";
import { Request } from "./Request";

export abstract class ProcessRequest {
  public result: any;
  public strategy: string;
  private httpClient: HttpClient;

  constructor(strategy: string) {
    this.strategy = strategy; // strategy name : get, post, forkJoin, switchMap
  }

  public async process(...config: Request[]): Promise<any> {
    let data = null;
    this.before(config);
    data = await this.httpClient[this.strategy](config);
    this.complete(data);
  }

  public abstract before(config: any): void;
  public abstract complete(data: any): void;
}
