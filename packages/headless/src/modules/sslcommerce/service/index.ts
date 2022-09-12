import { HttpStatus, Injectable } from '@nestjs/common';
import * as FormData from 'form-data';
import fetch from 'node-fetch';


import { store_id, store_passwd, is_live, post_body } from '../test.data';
import { throwError } from 'rxjs';

@Injectable()
export class SSLPaymentGatewayService {
  constructor() {}

  async paymentInitiate():Promise<string>{
    const fdata = new FormData();
    for (const a in post_body) {
        fdata.append(a, post_body[a] ? post_body[a] : '');
    }

    const result = await fetch('https://sandbox.sslcommerz.com/gwprocess/v4/api.php', {
      method: 'POST',
      body: fdata,
    }); 
    // if(!result) return {}; 
    const resJson = await result.json();
    return resJson.GatewayPageURL;  // //    return a.subscribe(val => val.data)
  }

  async successHandler(body: any) {
    return body;
  }

  async cancelHandler(body: any) {
    return body;
  }

  async failureHandler(body: any) {
    return body;
  }

  async notificationHandler(body: any) {
    return body;
  }
}

