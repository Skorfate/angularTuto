import { Injectable, Inject } from '@angular/core';
import { HttpClient,HttpResponse,HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';



@Injectable()
export class PeticioneService{

    public url: string;
    
    constructor(private _http : HttpClient){
       this.url = "https://jsonplaceholder.typicode.com/posts";    
    }

    getInfo() :Observable<any>{
        //new Angular HttpClient service
        return this._http.get(this.url).pipe(
        tap(heroes => console.log(`fetched heroes`)),    
        catchError(this.handleError));        
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An error occurred:', error.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.error(
            `Backend returned code ${error.status}, ` +
            `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError(
          'Something bad happened; please try again later.');
      };
}
