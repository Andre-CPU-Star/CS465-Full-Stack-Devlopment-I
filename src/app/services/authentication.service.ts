import { Inject, Injectable } from '@angular/core';
import { BROWSER_STORAGE } from '../storage';
import { User } from '../models/user';
import { AuthResponse } from '../models/authresponse';
import { TripDataService } from './trip-data.service';
@Injectable({
providedIn: 'root'
})
export class AuthenticationService {
isLoggedIn(): boolean {
  throw new Error('Method not implemented.');
}
constructor(
 @Inject(BROWSER_STORAGE) private storage: Storage,
 private tripDataService: TripDataService
) { }
public saveToken(token: string): void {
 this.storage.setItem('travlr-token', token);
 } 
public login(user: User): Promise<any> {
 return this.tripDataService.login(user)
 } 
public register(user: User): Promise<any> {
 return this.tripDataService.register(user)
 } 
public logout(): void {
 this.storage.removeItem('travlr-token');
 } 
 
}

