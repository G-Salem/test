import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './pages/home/home.component';
import { CarnetAdressesComponent } from './pages/carnet-adresses/carnet-adresses.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './core/service/in-memory-data.service';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import { ModalModule } from 'ngb-modal';
import { CarnetDetailComponent } from './pages/carnet-detail/carnet-detail.component';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { ContactService } from './core/service/contactService';
import { AddContactModalComponent } from './modals/add-contact-modal/add-contact-modal.component';
import { AddAdressModalComponent } from './modals/add-adress-modal/add-adress-modal.component';
import { EditContactCustomRenderer } from './custom-renderers/edit-contact-custom-renderer';
import { AddressService } from './core/service/addressService';
import { ModifierAdressModalComponent } from './modals/modifier-adress-modal/modifier-adress-modal.component';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CarnetAdressesComponent,
    CarnetDetailComponent,
    AddContactModalComponent,
    AddAdressModalComponent,
    ModifierAdressModalComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    MatToolbarModule,
    AppRoutingModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    FormsModule,
    HttpClientInMemoryWebApiModule,AgGridModule,
    HttpClientModule,
    MatInputModule,
    ModalModule,
    AgGridModule.withComponents([EditContactCustomRenderer]),
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [InMemoryDataService,CarnetAdressesComponent,ContactService,AddressService],
  bootstrap: [AppComponent]
})
export class AppModule { }
