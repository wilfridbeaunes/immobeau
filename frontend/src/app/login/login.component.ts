import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm!: FormGroup; 
  personalSubmitted = false;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private _snackBar: MatSnackBar,
    private AuthService: AuthService
    ) { }

  ngOnInit(): void {
    //name of fields i want to get the values 
    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  //get the form control
  get personal() { return this.myForm.controls; }

  //user connextion 
  submit(){
    this.personalSubmitted = true;
    if (!this.myForm.invalid) {
      const formData = this.myForm.getRawValue();
      const data = {
        email: formData.email,
        password: formData.password,
      }
      //send the data to the backend to create a new user
      this.AuthService.loginUser(data).then((res: any) => {
        console.log(res);
        if (res.success) {
          this.router.navigate(['/profil']);
          // get information
          this._snackBar.open('Connexion succès', 'Close', {duration: 1500,  panelClass: ['green-snackbar']});
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
