import { Typeadresse } from "./typeadresse";
import { TypeVoie } from "./typevoie";

export class Address {
  id: number;
  ContactId: number;
  TypeAdresse: Typeadresse;
  TypeVoie: TypeVoie;
  Rue: string;
  Numero: string;
  Ville: string;
  Cp: string;
  Pays: string;
  Commentaire: string;
  NumTel: number;

}
