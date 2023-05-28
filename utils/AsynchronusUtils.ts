enum HttpMethod {
  GET = "get",
  POST = "post",
  PUT = "put",
  DELETE = "delete",
}

class KVPair {
  key: string;
  value: string;
}

class Config {
  public url: string;
  public headers: any;
  public httpMethod: HttpMethod;
  public requestBody: any;
  public queryString: Array<KVPair>;
  public pathVariable: Array<string>;
  public propToBeUsedInNextCall: any;
  public cb: any;
}

export class AsynchronusUtils {
  constructor() {}

  public async getCall(config: Config): Promise<any> {
    const response = await fetch(config.url);
    const data = await response.json();
    return data;
  }

  public async postCall(config: Config): Promise<any> {
    const response = await fetch(config.url, {
      method: HttpMethod.POST,
      headers: config.headers ?? {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(config.requestBody),
    });
    const data = await response.json();
    return data;
  }

  public async parallelApiCallUsingPromise(
    config: Array<Config>
  ): Promise<any> {
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

  public async sequentialApiCallUsingPromise(config: Array<Config>) {
    let data = null;
    for (const conf of config) {
      let response = null;
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
    }
  }
}
