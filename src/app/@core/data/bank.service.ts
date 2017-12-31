import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {ServerDataSource} from "ng2-smart-table";

@Injectable()
export class BankService {

  banks;

  constructor(private http: Http) {}

  getBanks() {
    this.banks = new ServerDataSource(this.http, { endPoint: '/api/banks', filterFieldKey: '#field#__contains' });
    return this.banks;
  }
}
