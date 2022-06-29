import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public http:HttpClient) { } //DI for HttpClient pre defined API
  // loadProductData(){
  //   this.http.get("https://fakestoreapi.com/products").
  //   subscribe(result=>console.log(result),error=>console.log(error),()=>console.log("done"));
  // }
  loadProductData():Observable<Product[]>{
    return this.http.get<Product[]>("https://fakestoreapi.com/products");
  }
}
