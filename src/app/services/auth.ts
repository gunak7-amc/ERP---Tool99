import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private api = 'http://localhost:4001/api/user';

  constructor(private http: HttpClient) {}

  login(data: any) {
    return this.http.post(
      `${this.api}/login`,
      data
    );
  }

  verifyOtp(data: any) {
    return this.http.post(
      `${this.api}/verify-otp`,
      data
    );
  }

}