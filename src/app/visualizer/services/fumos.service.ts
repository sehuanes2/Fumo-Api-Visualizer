import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class FumosService {

  results:any = {};

  constructor(private http:HttpClient) {
    this.results = JSON.parse(localStorage.getItem('Resp')!)
  }

  getApi(){
    this.http.get('https://fumo-api.nosesisaid.com/').subscribe((resp)=>{
      this.results = resp;
      localStorage.setItem('Resp',JSON.stringify(this.results))
    })
  }
}
