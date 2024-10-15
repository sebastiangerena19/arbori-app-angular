import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ValueCalculationService } from '../services/calculation-service/value-calculation.service';

@Component({
  selector: 'app-helliwell-method',
  templateUrl: './helliwell-method.component.html',
  styleUrl: './helliwell-method.component.css'
})
export class HelliwellMethodComponent {

  constructor(private router: Router, private valueCalculationService: ValueCalculationService) {

  }

  calculateValue() {
    this.valueCalculationService.getValue('pino', 10, 10, 'Colombia').subscribe(data => {
      console.log(data);
      this.router.navigate(['/value'], { queryParams: { data: data } });
    });


  }

}
