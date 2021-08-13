import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AddressService } from 'src/app/core/service/addressService';

@Component({
  selector: 'app-modifier-adress-modal',
  templateUrl: './modifier-adress-modal.component.html',
  styleUrls: ['./modifier-adress-modal.component.css']
})
export class ModifierAdressModalComponent implements OnInit {

  adresseForm = this.fb.group({
    typeAdresse: ['', Validators.required],
    typeVoie: ['', Validators.required],
    rue: ['', Validators.required],
    num: ['', Validators.required],
    ville: ['', Validators.required],
    cp: ['', Validators.required],
    pays: ['', Validators.required],
    numTel: ['', Validators.required],

  });

  constructor(private fb: FormBuilder,private dialog: MatDialog, private adresseService: AddressService) { }

  ngOnInit(): void {

  }
  onSubmit() {

    // this.adresseService.updateAddress(this.adresseForm.value).subscribe(
    //   data => {
    //     this.dialog.closeAll();
    //     console.log(data);
    //   },
    //   error => {
    //     console.log(error);
    //   }
    // );

    //ma mchetech ama ma na3refch 3lech ma mchetech
  }


}

