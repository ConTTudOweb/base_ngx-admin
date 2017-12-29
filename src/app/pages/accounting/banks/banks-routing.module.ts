import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BanksComponent } from './banks.component';
import { BankListComponent } from './bank-list/bank-list.component';

const routes: Routes = [{
  path: '',
  component: BanksComponent,
  children: [{
    path: 'list',
    component: BankListComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablesRoutingModule { }

export const routedComponents = [
  BanksComponent,
  BankListComponent,
];
