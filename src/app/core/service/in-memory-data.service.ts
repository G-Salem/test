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
        id: 1, Nom: 'Mr. Gabsi', Prenom: 'Mohamed Salem', DateNaissance: new Date('1995/09/07').toLocaleDateString('fr-CA')
      },
      {
        id: 2, Nom: 'Mrs. Gabsi', Prenom: 'Amira', DateNaissance: new Date('1985/02/17').toLocaleDateString('fr-CA')
      },
      {
        id: 3, Nom: 'Mr. Aissi', Prenom: 'Ahmed', DateNaissance: new Date('1995/09/07').toLocaleDateString('fr-CA')
      },
      {
        id: 4, Nom: 'Mr. Gabsi', Prenom: 'Lotfi', DateNaissance: new Date('1995/09/07').toLocaleDateString('fr-CA')
      },
      {
        id: 5, Nom: 'Mr. Gabsi ', Prenom: 'Boubaker', DateNaissance: new Date('1995/09/07').toLocaleDateString('fr-CA')
      }, {
        id: 6, Nom: 'Mr. Gabdi', Prenom: 'Ali', DateNaissance: new Date('1995/09/07').toLocaleDateString('fr-CA')
      },

    ];
    const addresses: Address[] = [
      {
        id: 1,
        ContactId: 1,
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
        ContactId: 2,
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
        ContactId: 2,
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
        ContactId: 2,
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
        ContactId: 3,
        TypeAdresse: Typeadresse.Travail,
        TypeVoie: TypeVoie.gauche,
        Cp: '124',
        Commentaire: 'rodd belek mennou',
        NumTel: 27826553,
        Numero: '14',
        Rue: 'ben arous',
        Pays: 'tunisie',
        Ville: 'ben arous'
      },
      {
        id: 6,
        ContactId: 3,
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
        id: 7,
        ContactId: 4,
        TypeAdresse: Typeadresse.Travail,
        TypeVoie: TypeVoie.gauche,
        Cp: '124',
        Commentaire: 'rodd belek mennou',
        NumTel: 27826553,
        Numero: '14',
        Rue: 'ben arous',
        Pays: 'tunisie',
        Ville: 'ben arous'
      },
      {
        id: 8,
        ContactId: 4,
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
        id: 9,
        ContactId: 4,
        TypeAdresse: Typeadresse.Travail,
        TypeVoie: TypeVoie.gauche,
        Cp: '124',
        Commentaire: 'rodd belek mennou',
        NumTel: 27826553,
        Numero: '14',
        Rue: 'ben arous',
        Pays: 'tunisie',
        Ville: 'ben arous'
      },
      {
        id: 10,
        ContactId: 5,
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
        id: 11,
        ContactId: 6,
        TypeAdresse: Typeadresse.Travail,
        TypeVoie: TypeVoie.gauche,
        Cp: '124',
        Commentaire: 'rodd belek mennou',
        NumTel: 27826553,
        Numero: '14',
        Rue: 'ben arous',
        Pays: 'tunisie',
        Ville: 'ben arous'
      },
      {
        id: 12,
        ContactId: 6,
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
        id: 13,
        ContactId: 5,
        TypeAdresse: Typeadresse.Travail,
        TypeVoie: TypeVoie.gauche,
        Cp: '124',
        Commentaire: 'rodd belek mennou',
        NumTel: 27826553,
        Numero: '14',
        Rue: 'ben arous',
        Pays: 'tunisie',
        Ville: 'ben arous'
      },
      {
        id: 14,
        ContactId: 6,
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
        id: 15,
        ContactId: 4,
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
