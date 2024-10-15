import { Injectable } from '@angular/core';
import { enviroment } from '../../../enviroments/enviroment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ValueCalculationService {

  constructor(private http: HttpClient) {
    const calculationUrl = enviroment.baseUrl + '/api/value';
  }

  getValue(species: String, age: number, height: number, location: String) {
    return this.http.post(enviroment.baseUrl + '/api/value',
      {
        species: species,
        age: age,
        height: height,
        location: location
      },
      {
        responseType: 'text'

      });
  }


}
