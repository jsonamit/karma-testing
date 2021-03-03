import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }

  sum(a:number,b:number) {
     return a+b;
  } 

 sub(a:number,b:number) {
    return a-b;
 } 

 multi(a:number,b:number) {
  return a*b;
} 

}
