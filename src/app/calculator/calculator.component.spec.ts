import { analyzeAndValidateNgModules } from '@angular/compiler';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalculatorComponent } from './calculator.component';
import { CalculatorService } from '../services/calculator.service';

describe('Scientific Calculator', () => {
   const service = new CalculatorService();
   it('Addition of two no', () => {
     let a = 2;
     let b = 3;
     expect(service.sum(a,b)).toEqual(5);
   })
   it('Subtraction of two no', () => {
    let a = 2;
    let b = 2;
    expect(service.sub(a,b)).toEqual(0);
  })
  it('Multiplication of two no', () => {
    let a = 2;
    let b = 2;
    expect(service.multi(a,b)).toEqual(4);
  })
});
