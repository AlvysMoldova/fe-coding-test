import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

/**
 * Custom http client which can be used in order
 * to provide request options or to handle errors in
 * a generic way
 */
@Injectable({ providedIn: 'root' })
export class ApiClient {
  constructor(private _http: HttpClient) {}

  /**
   * Default options and headers
   */
  private _defaultOptions = {
    responseType: 'json',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
  };

  /**
   * Performs a `GET` request to `https://gorest.co.in/` api.
   */
  get(url: string, requestOptions?): Observable<any> {
    let options = this._buildHttpOptions(requestOptions);
    let endpoint = this.buildUrl(url);

    return this._http
      .get(endpoint, options)
      .pipe(catchError((httpEvent) => this._handleHttpError(httpEvent)));
  }

  /**
   * Performs a `POST` request to `https://gorest.co.in/` api.
   */
  post(url: string, body: any, requestOptions?): Observable<any> {
    let options = this._buildHttpOptions(requestOptions);
    let endpoint = this.buildUrl(url);

    return this._http
      .post(endpoint, body, options)
      .pipe(catchError((httpEvent) => this._handleHttpError(httpEvent)));
  }

  /**
   * Performs a `PATCH` request to `https://gorest.co.in/` api.
   */
  patch(url: string, body: any, requestOptions?): Observable<any> {
    let options = this._buildHttpOptions(requestOptions);
    let endpoint = this.buildUrl(url);

    return this._http
      .patch(endpoint, body, options)
      .pipe(catchError((httpEvent) => this._handleHttpError(httpEvent)));
  }

  /**
   * Performs a `DELETE` request to `https://gorest.co.in/` api.
   */
  delete(url: string, requestOptions?): Observable<any> {
    let options = this._buildHttpOptions(requestOptions);
    let endpoint = this.buildUrl(url);

    return this._http
      .delete(endpoint, options)
      .pipe(catchError((httpEvent) => this._handleHttpError(httpEvent)));
  }

  private _handleHttpError(
    httpErrorResponse: HttpErrorResponse
  ): Observable<never> {
    //TODO: Add custom http error handling here
    return throwError(() => httpErrorResponse.error);
  }

  private _buildHttpOptions(requestOptions): any {
    let options = { ...this._defaultOptions, ...requestOptions };
    options.headers = new HttpHeaders(options.headers);
    return options;
  }

  /**
   * Gets `full url` to `https://gorest.co.in/` API.
   */
  buildUrl(urlChunk: string): string {
    return `${environment.apiUrl}${urlChunk}`;
  }
}
