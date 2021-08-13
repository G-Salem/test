import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ContactService } from 'src/app/core/service/contactService';

@Component({
  selector: 'app-add-contact-modal',
  templateUrl: './add-contact-modal.component.html',
  styleUrls: ['./add-contact-modal.component.css']
})
export class AddContactModalComponent implements OnInit {
  contactForm = this.fb.group({
    Nom: ['', Validators.required],
    Prenom: ['', Validators.required],
    DateNaissance: ['', Validators.required],
  });
  constructor(private fb: FormBuilder,
    private dialog: MatDialog,
    private _contactService: ContactService,) { }

  ngOnInit(): void {
  }
  onSubmit() {
    this._contactService.addContact(this.contactForm.value).subscribe(
      data => {
        this.dialog.closeAll();
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

}