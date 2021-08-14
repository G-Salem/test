import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Contact } from 'src/app/core/models/contact';
import { ContactService } from 'src/app/core/service/contactService';
import { detailContactCustomRenderer } from 'src/app/custom-renderers/detail-contact-custom-renderer';
import { EditContactCustomRenderer } from 'src/app/custom-renderers/edit-contact-custom-renderer';
import { AddContactModalComponent } from 'src/app/modals/add-contact-modal/add-contact-modal.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-carnet-adresses',
  templateUrl: './carnet-adresses.component.html',
  styleUrls: ['./carnet-adresses.component.css']
})
export class CarnetAdressesComponent implements OnInit {
  constructor(
    private _contactService: ContactService,
    private router: Router,
    private dialog: MatDialog) {
    this.frameworkComponents = {
      buttonRenderer: EditContactCustomRenderer,
      buttonDetailRenderer:detailContactCustomRenderer,
    }
  }
  defaultColDef = {
    suppressKeyboardEvent: params => {
      const selectedRow = params.api.getSelectedRows()[0];
      if (!params.editing && selectedRow) {
        let isBackspaceKey = params.event.keyCode === 8;
        let isDeleteKey = params.event.keyCode === 46;
        // Delete selected rows with back space
        if (isBackspaceKey || isDeleteKey) {
          Swal.fire({
            title: 'Voulez vous supprimer ce contact ?',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: `Supprimer`,
            denyButtonText: `Annuler`,
          }).then((result) => {
            if (result.isConfirmed) {
              this._contactService.deleteContact(selectedRow.id).subscribe(
                data => {
                  this.getContact();
                },
                error => {
                }
              );
              Swal.fire('Contact supprimé avec succés !', '', 'success')
            }
          });
        }
      }
    }
  };
  columnDefs = [
    {
      field: "",
      checkboxSelection: true
    },
    {
      field: "Nom",editable: true
    },
    {
      field: "Prenom",editable: true
    },
    {
      field: "DateNaissance",
      headerName: "Date de naissance",
      editable: true
    },
    {
      headerName: 'Edit',
      cellRenderer: 'buttonRenderer',
      cellRendererParams: {
        onClick: this.onEditButtonClick.bind(this),
        label: 'Edit'
      },
    },
    {
      headerName: 'Voir les details',
      cellRenderer: 'buttonDetailRenderer',
      cellRendererParams: {
        label: 'details'
      },
    },
  ];
  frameworkComponents: any;
  searchExpl = '';
  contactList: Contact[];
  contactListFilter: Contact[];
  showClearBtn = false;
  api: any;

  ngOnInit(): void {
    this.getContact();
  }
  getContact() {
    this._contactService.getContacts().subscribe(res => {
      this.contactList = res;
      this.contactListFilter = this.contactList;
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddContactModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.getContact();
    });
  }

  onEditButtonClick(params) {
    this.api.startEditingCell({
      rowIndex: params.rowIndex,
      colKey: 'Nom'
    });
  }
  onRowEditingStopped(event) {
    // swal
    this._contactService.updateContact(event.data).subscribe(
      data => {
        Swal.fire({
          icon: 'success',
          title: 'Succés',
          text: 'Contact mis à jours avec succés'
        });
      },
      error => {
        Swal.fire({
          icon: 'error',
          title: 'Erreur',
          text: "Un probleme est survenu lors de la mise à jours du contact!",
        });
      }
    );
  }
  cleanBtnControler() {
    this.showClearBtn = !this.showClearBtn;
  }
  search(event) {
    this.searchExpl = event.target.value;
    if (this.searchExpl && this.searchExpl !== '') {
      this.contactList = this.contactListFilter.filter(contact => contact.Nom.toLowerCase().indexOf(this.searchExpl.toLowerCase()) > -1
        || contact.Prenom.toLowerCase().indexOf(this.searchExpl.toLowerCase()) > -1);
    } else {
      this.contactList = this.contactListFilter;
    }
  }
  cleanSearch() {
    this.contactList = this.contactListFilter;
    this.searchExpl = '';
    this.showClearBtn = false;
  }
  onGridReady(params) {
    this.api = params.api;
  }
}

