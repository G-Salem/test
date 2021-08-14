import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddressService } from 'src/app/core/service/addressService';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-add-adress-modal',
  templateUrl: './add-adress-modal.component.html',
  styleUrls: ['./add-adress-modal.component.css']
})
export class AddAdressModalComponent implements OnInit {
  adresseForm = this.fb.group({
    TypeAdresse: ['', Validators.required],
    TypeVoie: ['', Validators.required],
    Rue: ['', Validators.required],
    Numero: ['', Validators.required],
    Ville: ['', Validators.required],
    Cp: ['', Validators.required],
    Pays: ['', Validators.required],
    NumTel: ['', Validators.required],
    id: ['13'],
    ContactId: [this.data.contactId],
    Commentaire: ['']

  });

  constructor(private fb: FormBuilder,@Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialog, private adresseService: AddressService) { }

  ngOnInit(): void {


  }
  onSubmit() {
    this.adresseService.addAddress(this.adresseForm.value).subscribe(
      res => {
        this.dialog.closeAll();
        Swal.fire({
          icon: 'success',
          title: 'Succés',
          text: 'Adresse ajouté avec succés'
        });
      },
      error => {
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Erreur',
          text: "Un probleme est survenu lors de l'ajout de l'adresse!",
        });
      }
    );


  }


}
