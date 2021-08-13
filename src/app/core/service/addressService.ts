import { Injectable }from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams }from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { AbstractAddressService } from './abstractAddressService';
import { Address } from '../models/address';


const cudOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

@Injectable()
export class AddressService extends AbstractAddressService {

  constructor (private http: HttpClient) {
    super();
  }

  getAddresss (): Observable<Address[]> {
    return this.http.get<Address[]>(this.contactsUrl).pipe(
   // tap(data => console.log(data)), // eyeball results in the console
      catchError(this.handleError)
    );
  }


  addAddress (address: Address): Observable<Address> {
    const adresse = { name };

    return this.http.post<Address>(this.contactsUrl, adresse, cudOptions).pipe(
      catchError(this.handleError)
    );
  }

  deleteAddress (id: Number): Observable<Address> {
    const url = `${this.contactsUrl}/${id}`;

    return this.http.delete<Address>(url, cudOptions).pipe(
      catchError(this.handleError)
    );
  }


  updateAddress (adresse: Address): Observable<Address> {
    return this.http.put<Address>(this.contactsUrl, adresse, cudOptions).pipe(
      catchError(this.handleError)
    );
  }

  // This get-by-id will 404 when id not found
  getAddress(id: number): Observable<Address> {
    const url = `${this.contactsUrl}/${id}`;
    return this.http.get<Address>(url).pipe(
      catchError(this.handleError)
    );
  }
  private handleError (error: any) {
    // In a real world app, we might send the error to remote logging infrastructure
    // and reformat for user consumption
    console.error(error); // log to console instead
    return throwError(error);
  }
}
