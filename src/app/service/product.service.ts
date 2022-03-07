import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const baseUrl = 'http://localhost:9000/shirts';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient)  { }

  getAll(): Observable<any> {
    console.log(this.http.get(baseUrl))
    return this.http.get(baseUrl);
  }
}
