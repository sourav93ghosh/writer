import { Request } from "./Request";
import { HttpMethod } from "./HttpMethodEnum";
import { copyFile } from "fs";

export class HttpClient {
  constructor() {}

  public async get(config: Request[]): Promise<any> {
    const response = await fetch(config[0].url);
    const data = await response.json();
    return data;
  }

  public async post(config: Request[]): Promise<any> {
    const response = await fetch(config[0].url, {
      method: HttpMethod.POST,
      headers: config[0].headers ?? {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(config[0].requestBody),
    });
    const data = await response.json();
    return data;
  }

  public async forkJoin(config: Request[]): Promise<any> {
    const promise = [];
    for (const conf of config) {
      switch (conf.httpMethod) {
        case HttpMethod.GET:
          promise.push(fetch(conf.url));
          break;
        case HttpMethod.POST:
          promise.push(
            fetch(conf.url, {
              method: HttpMethod.POST,
              headers: conf.headers ?? {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify(conf.requestBody),
            })
          );
          break;
      }
    }
    const response = await Promise.all(promise);
    return response;
  }

  public async switchMap(config: Request[]): Promise<any> {
    let data = null;
    for (const conf of config) {
      let response = null;
      conf.before();
      switch (conf.httpMethod) {
        case HttpMethod.GET:
          response = await fetch(conf.url);
          data = await response.json();
          break;
        case HttpMethod.POST:
          response = await fetch(conf.url, {
            method: HttpMethod.POST,
            headers: conf.headers ?? {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(conf.requestBody),
          });
          data = await response.json();
          break;
      }
      conf.complete(data);
    }
    return data;
  }
}
