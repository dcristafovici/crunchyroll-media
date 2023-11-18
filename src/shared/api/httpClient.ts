import { defer, Observable } from "rxjs";
import initializeAxios, { axiosRequestConfiguration } from "./axiosConfig";
import { map } from "rxjs/operators";

class HttpClient {
  private axiosInstance;

  constructor() {
    this.axiosInstance = initializeAxios(axiosRequestConfiguration);
  }

  get<T>(url: string, queryParams?: object): Observable<T> {
    return defer(() =>
      this.axiosInstance.get<T>(url, { params: queryParams })
    ).pipe(map((result) => result.data));
  }

  post<T>(
    url: string,
    body: object,
    queryParams?: object
  ): Observable<T | void> {
    return defer(() =>
      this.axiosInstance.post<T>(url, body, { params: queryParams })
    ).pipe(map((result) => result.data));
  }

  put<T>(
    url: string,
    body: object,
    queryParams?: object
  ): Observable<T | void> {
    return defer(() =>
      this.axiosInstance.put<T>(url, body, { params: queryParams })
    ).pipe(map((result) => result.data));
  }

  patch<T>(
    url: string,
    body: object,
    queryParams?: object
  ): Observable<T | void> {
    return defer(() =>
      this.axiosInstance.patch<T>(url, body, { params: queryParams })
    ).pipe(map((result) => result.data));
  }

  delete<T>(url: string, id: number): Observable<T | void> {
    return defer(() => this.axiosInstance.delete(`${url}/${id}`)).pipe(
      map((result) => result.data)
    );
  }
}

const httpClient = new HttpClient();
export default httpClient;
