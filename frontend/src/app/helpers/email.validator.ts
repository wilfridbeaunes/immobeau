import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';

export function EmailExist(emailControlName: string, http: HttpClient) {
  return (formGroup: FormGroup) => {
    const emailControl = formGroup.controls[emailControlName];

    if (emailControl.errors && !emailControl.errors.exists) {
      return;
    }
    const data = {
      email: emailControl.value
    }
    // check if the email exists 
    http.get('http://localhost:8000/api/email-exist', { params: data }).subscribe(
      (result: any) => {
        if (result.length != 0) {
          emailControl.setErrors({ exists: true });
        }
      },
      error => {
        console.log(error);
      }
    );
  }
}