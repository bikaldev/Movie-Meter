import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http'; 

@Injectable()
export class AuthService {
    
    isLoggedIn: boolean = false; 
    token:string;

    constructor(private http: HttpClient) {}

    logIn(email:string, password: string) {
        const url = 'http://localhost:3000/login/';
        let query = new HttpParams().append('email', email);
        query = query.append('password', password);
        return this.http.get<{message:string, token:string}>(url, {
            params: query
        })
    }

    signUp(email:string, password: string) {
        const url = 'http://localhost:3000/signup/';
        let query = new HttpParams().append('email', email);
        query = query.append('password', password);
        
        return this.http.get<{message: string, isAuth: boolean}>(url, {
            params: query
        });
    }

    setLogIn() {
        this.isLoggedIn = true;
    }

    setToken(token:string) {
        this.token = token;
    }

}