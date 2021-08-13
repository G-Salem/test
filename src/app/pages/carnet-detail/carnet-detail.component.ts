import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Address } from 'src/app/core/models/address';
import { Contact } from 'src/app/core/models/contact';
import { AddressService } from 'src/app/core/service/addressService';
import { ContactService } from 'src/app/core/service/contactService';
import { ModifierAdressModalComponent } from 'src/app/modals/modifier-adress-modal/modifier-adress-modal.component';

@Component({
  selector: 'app-carnet-detail',
  templateUrl: './carnet-detail.component.html',
  styleUrls: ['./carnet-detail.component.css']
})
export class CarnetDetailComponent implements OnInit {
  public id;
  contact: Contact;
  adresses: Address[];
  listeadresse: Address[] = [];
  constructor(private activatedRoute: ActivatedRoute, private dialog: MatDialog, private contactService: ContactService, private adresseService: AddressService) {
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');

    this.contactService.getContact(this.id).subscribe(data => {
      this.contact = data;
    }, err => {
      console.log(err);
    });
    this.getAdresses();

  }
  getAdresses() {
    this.adresseService.getAddresss().subscribe(res => {
      this.adresses = res;
      this.listeadresse = [];
      this.adresses.forEach(element => {
        if (element.ContactId == this.id) {
          this.listeadresse.push(element);
        }
      },
        error => {
          console.log(error);
        });
    });

  }
  modifierAdresse(contactAdresse: Address) {

    const dialogRef = this.dialog.open(ModifierAdressModalComponent, {
      data: { contactAdresse }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getAdresses();
    });


  }
  supprimerAdresse(id: number) {
// confirm
    this.adresseService.deleteAddress(id).subscribe(data => {
      console.log(data);
      this.getAdresses();
    }, err => {
      console.log(err);

    });

    //ma mchetech y5arrejli fel data null


  }
}
