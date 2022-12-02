import { Component } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Directive, ElementRef } from '@angular/core';
import { passwordMatchValidator } from './utils';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.scss']
})

export class AppComponent {
  title = 'form-project';
  gif = 1;
  showE = false;
  shakeI = false;
  showG = false;
  sub = false;
  showFire = false;

  Form = new FormGroup({
    fname: new FormControl("", Validators.required),
    lname: new FormControl("", Validators.required),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", Validators.required),
    cpassword: new FormControl("", [Validators.required,passwordMatchValidator]),
    checked: new FormControl(false, Validators.required)
  });

  onFormSubmit(): void {
    if (this.Form.valid && this.Form.get('checked')?.value) {
      console.log("ok")
      this.showFire = true;
      setTimeout(() => {
        this.showFire = false;
      }, 6000);
    }else{
      this.sub = true;
    }
  }

  showM(){
    if (!this.Form.valid || !this.Form.get('checked')?.value) {
      this.showE = !this.showE;
      this.showG = !this.showG
    }
    setTimeout(() => {
      this.showG = false;
      this.gif=2;
    }, 1500);
    
  }

  shake(){
    if (!this.Form.valid) {
      this.shakeI = !this.shakeI;
    }
    setTimeout(() => {
      this.shakeI = false;
    }, 500);
  }
}
