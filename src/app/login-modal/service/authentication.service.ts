import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, of, tap } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { environment } from '../../../environment/environment';

  //Crearla en archivo externo
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
  private apiUrl = environment.rutaBack + 'authentication/';
  public currentUser = new BehaviorSubject<UserDto | null>(null);
  user$ = this.currentUser.asObservable();


  constructor(private http: HttpClient) { }

  login(formLogin: FormGroup) {
    formLogin.get('email')?.setValue(formLogin.get('email')!.value.toLowerCase());
    return this.http.post<UserDto>(`${this.apiUrl}login`, formLogin.value, {
      withCredentials: true,
      headers: { 'Content-Type': 'application/json' }
    }).pipe(
      tap(user => this.currentUser.next(user))
    );
  }

  register(formRegister: FormGroup) {
  return this.http.post(`${this.apiUrl}register`, formRegister.value, {
    withCredentials: true,
    headers: { 'Content-Type': 'application/json' }
  });
  }

  logout() {
    return this.http.post(`${this.apiUrl}logout`, {}, { withCredentials: true })
      .pipe(tap(() => this.currentUser.next(null)));
  }

  loadUserSession(): Observable<UserDto | null> {
    return this.http.get<UserDto | null>(`${this.apiUrl}myUser`, { withCredentials: true })
      .pipe(tap(user => this.currentUser.next(user)));
  }

}
