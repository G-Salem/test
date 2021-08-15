import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddressService } from 'src/app/core/service/addressService';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modifier-adress-modal',
  templateUrl: './modifier-adress-modal.component.html',
  styleUrls: ['./modifier-adress-modal.component.css']
})
export class ModifierAdressModalComponent implements OnInit {

  adresseForm = this.fb.group({
    TypeAdresse: ['', Validators.required],
    TypeVoie: ['', Validators.required],
    Rue: ['', Validators.required],
    Numero: ['', Validators.required],
    Ville: ['', Validators.required],
    Cp: ['', Validators.required],
    Pays: ['', Validators.required],
    NumTel: ['', Validators.required],
    id: [],
    ContactId: [],
    Commentaire: ['']

  });



  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder, private dialog: MatDialog, private adresseService: AddressService) { }

  ngOnInit(): void {
    console.log(this.data.contactAdresse);
    this.adresseForm.setValue(this.data.contactAdresse);

  }

  onSubmit() {


    this.adresseService.updateAddress(this.adresseForm.value).subscribe(
      res => {
        this.dialog.closeAll();
        Swal.fire({
          icon: 'success',
          title: 'Succés',
          text: 'Adresse mise à jours avec succés'
        });
      },
      error => {
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Erreur',
          text: "Un probleme est survenu lors de la mise à jours de l'adresse!",
        });
      }
    );

  }

  close(){
    this.dialog.closeAll();

  }
}

