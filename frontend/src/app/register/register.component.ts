import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http'
import { EmailExist } from '../helpers/email.validator';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  myForm!: FormGroup; 
  personalSubmitted = false;
  role='propritaire'; //default value for the role

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private _snackBar: MatSnackBar,
    private AuthService: AuthService) { }
  
  ngOnInit(): void {

    //name of fields i want to get the values 
    this.myForm = this.fb.group({
      firstName: ['', Validators.required], 
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role:''
    }, {
      validator: [ EmailExist('email', this.http)],
    });
  }

 //change if the user is a propritaire or a locataire
 //get user role
  onChange(e:any) {
    this.role= e.target.value;
  }

  //get the form control
  get personal() { return this.myForm.controls; }

  //submit the personal form
  submitPersonal() {
    this.personalSubmitted = true;
    if (!this.myForm.invalid) {
      const formData = this.myForm.getRawValue();
      const data = {
        email: formData.email,
        password: formData.password,
        firstName: formData.firstName,
        lastName: formData.lastName,
        role: this.role
      }
      //send the data to the backend to create a new user
      this.AuthService.registerUser(data).then((res: any) => {
        console.log(res);
        if (res.success) {
          this.router.navigate(['/login']);
          this._snackBar.open('Compte crée avec succès', 'Close', {duration: 1500,  panelClass: ['green-snackbar']});
        }else {
          this._snackBar.open(res.message, 'Close', {duration: 1500,  panelClass: ['red-snackbar']});
          };
      }).catch((err: any) => {
        //failed to fetch
        this._snackBar.open(err.message, 'Close', {duration: 2500, panelClass: ['red-snackbar']});
        console.log(err);
      });

    }
  }
}
