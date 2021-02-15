import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { IMetric } from '../shared/model/metrics.model';
import { IRStation } from '../shared/model/station.model';


enum ApiMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly baseUrl: string;

  constructor(private httpClient: HttpClient, @Inject('API_URL') apiUrl: string) { }

  private callApi<T>(method: ApiMethod, path: string, params?: any): Promise<T> {
    return this.callApiObservable<T>(method, path, params).toPromise();
  }

  private callApiObservable<T>(method: ApiMethod, path: string, params?: any): Observable<T> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json; charset = utf-8;' });

    const url = path;
    const hasBody = method === ApiMethod.POST || method === ApiMethod.PUT || method === ApiMethod.PATCH;
    const options = {
      headers,
      body: hasBody ? params : undefined,
      params: !hasBody ? params : undefined,
    };

    const logMethodPrefix = `${method} ${path}`;

    return this.httpClient.request<T>(method.toString(), url, options).pipe(
      tap((x) => console.log(`Succeed - ${logMethodPrefix}`, x)),
      catchError((e) => {
        console.error(`Failed - ${logMethodPrefix}`, e);
        return throwError(e);
      })
    );
  }

  async getMetrics(metric: Partial<IMetric>): Promise<IMetric> {
    return await this.callApi<IMetric>(ApiMethod.POST, `metrics/`, metric);
  }

  async loadStations(query: string): Promise<IRStation> {
    return await this.callApi<IRStation>(ApiMethod.GET, `stations/?${query}`);
  }
}
