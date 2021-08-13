// Author: T4professor

import { Component } from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import {CarnetAdressesComponent} from 'src/app/pages/carnet-adresses/carnet-adresses.component';
@Component({
  selector: 'app-button-renderer',
  template: `    <button type="button" (click)="detail()">{{label}}</button>`
})

export class detailContactCustomRenderer implements ICellRendererAngularComp {
  constructor(private router: Router){}
  params;
  label: string;

  agInit(params): void {
    this.params = params;
    this.label = this.params.label || null;
  }

  refresh(params?: any): boolean {
    return true;
  }
detail(){
  this.router.navigateByUrl('/carnetdetail/'+this.params.data.id);
}
  onClick($event) {
    if (this.params.onClick instanceof Function) {
      // // put anything into params u want pass into parents component
      // const params = {
      //   event: $event,
      //   rowData: this.params.node.data
      // }
      // this.params.onClick(this.params);
      // this.router.navigateByUrl("/carnetdetail/1")

    }
  }
}
