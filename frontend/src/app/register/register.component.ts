import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http'
import { EmailExist } from '../helpers/email.validator';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  myForm!: FormGroup; 
  personalSubmitted = false;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient) { }
  
  ngOnInit(): void {

    //name of fields i want to get the values 
    this.myForm = this.fb.group({
      firstName: ['', Validators.required], 
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      option1: '',
      option2: ''
    }, {
      validator: [ EmailExist('email', this.http)],
    });

    // //even when authentifation is fasle or true
  // openSnackBar(message: string, action: string) {
  //   this._snackBar.open(message, action, {
  //     duration: 2500,
  //   });
  // }

  }

  //get the form control
  get personal() { return this.myForm.controls; }

  //submit the personal form
  submitPersonal() {
    const formData = this.myForm.getRawValue();
    console.log(formData);
    // const data = {
    //   email: formData.email,
    //   password: formData.password,
    // }

    this.personalSubmitted = true;
    if (!this.myForm.invalid) {
      console.log(this.myForm.value);
      // this.http.post('http://localhost:3000/api/v1/users/register', this.myForm.value).subscribe((res: any) => {
      //   console.log(res);
      // }
    }

  }

}
