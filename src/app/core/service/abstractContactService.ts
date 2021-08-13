import { Observable } from 'rxjs';
import { Contact } from '../models/contact';

export abstract class AbstractContactService {
  contactsUrl = 'api/contacts';  // URL to web api

  abstract getContacts (): Observable<Contact[]>;
  abstract addContact (contact: Contact): Observable<Contact>;
  abstract deleteContact (id: number): Observable<Contact>;
  abstract updateContact (contact: Contact): Observable<Contact>;
  abstract getContact(id: number): Observable<Contact>;
}
