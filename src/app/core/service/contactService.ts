import { Injectable }from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams }from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { AbstractContactService } from './abstractContactService';
import { Contact } from '../models/contact';


const cudOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

@Injectable()
export class ContactService extends AbstractContactService {

  constructor (private http: HttpClient) {
    super();
  }

  getContacts (): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.contactsUrl).pipe(
   // tap(data => console.log(data)), // eyeball results in the console
      catchError(this.handleError)
    );
  }


  addContact (contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.contactsUrl, contact, cudOptions).pipe(
      catchError(this.handleError)
    );
  }

  deleteContact (id: Number): Observable<Contact> {
    const url = `${this.contactsUrl}/${id}`;

    return this.http.delete<Contact>(url, cudOptions).pipe(
      catchError(this.handleError)
    );
  }


  updateContact (contact: Contact): Observable<Contact> {
    return this.http.put<Contact>(this.contactsUrl, contact, cudOptions).pipe(
      catchError(this.handleError)
    );
  }

  // This get-by-id will 404 when id not found
  getContact(id: number): Observable<Contact> {
    const url = `${this.contactsUrl}/${id}`;
    return this.http.get<Contact>(url).pipe(
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
