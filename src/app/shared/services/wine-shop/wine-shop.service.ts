import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WineShopService {

  constructor(private http: HttpClient) {

  }
  wineShopData(): Observable<any> {
    return this.http.get('https://storage.googleapis.com/wineshop-assets/wine-shop.json')
      .pipe(catchError(error => {
        retry(2);
        return observableThrowError(error);
      })
      );
  }

}

