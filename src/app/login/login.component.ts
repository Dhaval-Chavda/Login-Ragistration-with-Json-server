
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { APiService } from '../api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  // Password hide-show property
  hide = true;
  userData: any;


  constructor(private router: Router, private api: APiService, private toaster: ToastrService) { }

  loginForm = new FormGroup({

    Email: new FormControl('', [Validators.required,]),
    Password: new FormControl('', [Validators.required,])

  })

  loginSuccess() {
    if (this.loginForm.valid) {

      //  this.api.addData(this.loginForm.value).subscribe(res=>{
      //   let user = res.find((a:any)=>{
      //     return a.Password === this.loginForm.value.Password
      //   });

      //   this.router.navigate(['home']);
      //   this.toaster.success("User Login Successfully...")

      //  })

      this.api.addData(this.loginForm.value).subscribe({
        next: (res) => {
          this.router.navigate(['home']);
        }
      })
    }
    else{
      this.toaster.error("Please Enter Details","",{timeOut:1000})
    }

  }


}
