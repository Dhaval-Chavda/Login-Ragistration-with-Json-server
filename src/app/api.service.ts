import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class APiService {

  RegisterUrl = "http://localhost:3000/Register";





  constructor(private _http:HttpClient) { }

  addData(registerForm:any)
  {
    return this._http.post(this.RegisterUrl, registerForm);
  }
  getData()
  {
    return this._http.get(this.RegisterUrl);
  }

}
