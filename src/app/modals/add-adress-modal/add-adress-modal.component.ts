import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-adress-modal',
  templateUrl: './add-adress-modal.component.html',
  styleUrls: ['./add-adress-modal.component.css']
})
export class AddAdressModalComponent implements OnInit {

  adresseForm = this.fb.group({
    typeAdresse: ['', Validators.required],
    typeVoie: ['', Validators.required],
    rue: ['', Validators.required],
    num: ['', Validators.required],
    ville: ['', Validators.required],
    cp: ['', Validators.required],
    pays: ['', Validators.required],

  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  onSubmit() {
    // this._contactService.addContact(this.contactForm.value).subscribe(
    //   data => {
    //     this.dialog.closeAll();
    //     console.log(data);
    //   },
    //   error => {
    //     console.log(error);
    //   }
    // );
  }


}
