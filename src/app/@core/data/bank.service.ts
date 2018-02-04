import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {ServerDataSource} from 'ng2-smart-table';
import {Observable} from 'rxjs';

@Injectable()
export class BankService {

  banks;
  headersPost: Headers = new Headers();
  optionsPost: any;

  constructor(private http: Http) {
    this.headersPost.set('Authorization', 'JWT ' + 'falta_fazer');
    this.headersPost.append('Content-Type', 'application/json');
    this.optionsPost = new RequestOptions({headers: this.headersPost});
  }

  getBanks() {
    this.banks = new ServerDataSource(this.http, { endPoint: '/api/banks', filterFieldKey: '#field#__contains' });
    return this.banks;
  }

  saveBank(bank: any): Observable<string> {
    if (bank.url) {
      console.log('antes');
      return this.http
        .put(
          bank.url,
          JSON.stringify(bank),
          this.optionsPost,
        )
        .map(response => response.json());
    } else {
      // return this.http.post(`${NFBR_API}/produto/`,
      //                       JSON.stringify(produto),
      //                       this.optionsPost)
      //                 .map(response => response.json());
    }
  }
}
