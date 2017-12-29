import { Injectable } from '@angular/core';

@Injectable()
export class BankService {

  data = [{
    code: '001',
    description: 'Bank 001',
  }, {
    code: '002',
    description: 'Bank 002',
  }];

  getData() {
    return this.data;
  }
}
