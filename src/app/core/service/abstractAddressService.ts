import { Observable } from 'rxjs';
import { Address } from '../models/address';

export abstract class AbstractAddressService {
  adressesUrl = 'api/addresses';  // URL to web api

  abstract getAddresss (): Observable<Address[]>;
  abstract addAddress (address: Address): Observable<Address>;
  abstract deleteAddress (id: number): Observable<Address>;
  abstract updateAddress (address: Address): Observable<Address>;
  abstract getAddress(id: number): Observable<Address>;
}
