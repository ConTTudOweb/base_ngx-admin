import { Component } from '@angular/core';
import { ServerDataSource } from 'ng2-smart-table';

import { BankService } from '../../../../@core/data/bank.service';
import {Http} from '@angular/http';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './bank-list.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class BankListComponent {

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      code: {
        title: 'Código',
        type: 'string',
      },
      description: {
        title: 'Descrição',
        type: 'string',
      },
    },
  };

  // source: LocalDataSource = new LocalDataSource();
  source: ServerDataSource;

  constructor(private service: BankService, http: Http) {
    // this.source = new ServerDataSource(http, { endPoint: '/api/banks' });
    this.source = this.service.getBanks();
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onEditConfirm(event): void {
    if (window.confirm('Salvar?')) {
      event.confirm.resolve();
      console.log(event.newData);

      this.service.saveBank(event.newData)
        .subscribe(() => {
          console.log('feitoooo');
        });

    } else {
      event.confirm.reject();
    }
  }
}
