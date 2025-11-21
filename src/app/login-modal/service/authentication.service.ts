import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, of, tap } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { FormGroup } from '@angular/forms';


export interface UserDto {
  id: number;
  email: string;
  username: string;
  role_id: number;
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private apiUrl = 'http://localhost:8080/api/authentication';
  public currentUser = new BehaviorSubject<UserDto | null>(null);
  user$ = this.currentUser.asObservable();


  constructor(private http: HttpClient) { }

  login(formLogin: FormGroup) {
    formLogin.get('email')?.setValue(formLogin.get('email')!.value.toLowerCase());
    return this.http.post<UserDto>(`${this.apiUrl}/login`, formLogin.value, {
      withCredentials: true,
      headers: { 'Content-Type': 'application/json' }
    }).pipe(
      tap(user => this.currentUser.next(user))
    );
  }

  loadUser() {
    return this.http.get<UserDto>(`${this.apiUrl}/myUser`, { withCredentials: true })
      .pipe(
        tap(user => this.currentUser.next(user)),
        catchError(() => {
          this.currentUser.next(null);
          return of(null);
        })
      );
  }

  register(email: string, username: string, password: string) {
    const body = {
      email,
      username,
      password
    };

    return this.http.post(`${this.apiUrl}/register`, body, {
      withCredentials: true
    });
  }

  logout() {
    return this.http.post(`${this.apiUrl}/logout`, {}, { withCredentials: true })
      .pipe(tap(() => this.currentUser.next(null)));
  }

  loadUserSession(): Observable<UserDto | null> {
    return this.http.get<UserDto | null>(`${this.apiUrl}/myUser`, { withCredentials: true })
      .pipe(tap(user => this.currentUser.next(user)));
  }

}
