import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import { APiService } from '../api.service';


@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-ragistration',
  templateUrl: './ragistration.component.html',
  styleUrls: ['./ragistration.component.scss']
})
export class RagistrationComponent {

  hide = true;



  allUser: Array<any>  = new Array<any>();
  spToken: any;
  token = localStorage.getItem('token')

  registerForm!: FormGroup;


  constructor(private router: Router, private toaster: ToastrService, private api:APiService) {}

  ngOnInit(): void {

    this.ReactiveForm();

    if(this.token)
    {
      this.router.navigate(['home']);
    }
    else{
      this.router.navigate(['ragistration']);
    }
  }


  ReactiveForm()
  {
    this.spToken = this.makeid(12);

    this.registerForm = new FormGroup({

    userName: new FormControl(''),
    Email: new FormControl('', [Validators.required]),
    Password: new FormControl('', [Validators.required,]),
    C_Password: new FormControl('', [Validators.required,]),
    token: new FormControl(this.spToken),

  })

}

makeid(length: number)
{
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  const charactersLength = characters.length;
  let counter = 0;

  while(counter < length){
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
    counter += 1;
  }
  return result;
}

  addUser()
  {
    if(this.registerForm.valid)
    {
      this.api.addData(this.registerForm.value).subscribe({
        next: (res) => {console.log(res)},
        error: (err) => {console.log(err)},
        complete: () => { this.router.navigate(['login']);
        this.toaster.success("User Registrations Successfully...")}
      })
    }
    else{
      this.toaster.error("Please Enter Deatials...","",{timeOut:2000})
    }
  }


}
