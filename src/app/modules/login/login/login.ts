import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

email = '';
  password = '';
  otp = '';

  otpSent = false;

  login() {

    if (!this.email || !this.password) {
      alert('Enter Email and Password');
      return;
    }

    // Call your API here to validate email/password
    // and send OTP

    this.otpSent = true;
  }

  verifyOTP() {

    if (this.otp === '123456') {
      alert('Login Successful');

      // this.router.navigate(['/dashboard']);
    }
    else {
      alert('Invalid OTP');
    }

  }


}
