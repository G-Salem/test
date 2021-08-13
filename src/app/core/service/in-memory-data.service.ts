import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Address } from '../models/address';
import { Contact } from '../models/contact';
import { Typeadresse } from '../models/typeadresse';
import { TypeVoie } from '../models/typevoie';

@Injectable()
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const contacts: Contact[] = [
      {
        id: 11, Nom: 'Mr. Nice', Prenom: 'jordi', DateNaissance: new Date('1995/09/07').toLocaleDateString('fr-CA')
      },
      {
        id: 12, Nom: 'Mrs. Kind', Prenom: 'sins', DateNaissance: new Date('1985/02/17').toLocaleDateString('fr-CA')
      },
      {
        id: 17, Nom: 'Mr. Good', Prenom: 'jordi', DateNaissance: new Date('1995/09/07').toLocaleDateString('fr-CA')
      },

    ];
    const addresses: Address[] = [
      {
        id: 1,
        ContactId: 11,
        TypeAdresse: Typeadresse.Domicile,
        TypeVoie: TypeVoie.droite,
        Cp: '12',
        Commentaire: 'rodd belek',
        NumTel: 27826333,
        Numero: '15',
        Rue: 'ben arous',
        Pays: 'tunisie',
        Ville: 'ben arous'
      },
      {
        id: 2,
        ContactId: 11,
        TypeAdresse: Typeadresse.Domicile,
        TypeVoie: TypeVoie.droite,
        Cp: '127',
        Commentaire: 'rodddd belek',
        NumTel: 57826333,
        Numero: '75',
        Rue: 'ben arous',
        Pays: 'tunisie',
        Ville: 'ben arous'
      },
      {
        id: 3,
        ContactId: 12,
        TypeAdresse: Typeadresse.Travail,
        TypeVoie: TypeVoie.droite,
        Cp: '127',
        Commentaire: 'rodd belek',
        NumTel: 57826333,
        Numero: '75',
        Rue: 'ben arous',
        Pays: 'tunisie',
        Ville: 'ben arous'
      },
      {
        id: 4,
        ContactId: 17,
        TypeAdresse: Typeadresse.Secours,
        TypeVoie: TypeVoie.droite,
        Cp: '177',
        Commentaire: 'rodd belek',
        NumTel: 57826333,
        Numero: '75',
        Rue: 'ben arous',
        Pays: 'tunisie',
        Ville: 'ben arous'
      },
      {
        id: 5,
        ContactId: 17,
        TypeAdresse: Typeadresse.Travail,
        TypeVoie: TypeVoie.gauche,
        Cp: '124',
        Commentaire: 'rodd belek mennou',
        NumTel: 27826553,
        Numero: '14',
        Rue: 'ben arous',
        Pays: 'tunisie',
        Ville: 'ben arous'
      }
    ];
    return { contacts: contacts, addresses: addresses };
  }
}
