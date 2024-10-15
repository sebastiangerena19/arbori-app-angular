import { Component } from '@angular/core';
import { ValueCalculationService } from '../services/calculation-service/value-calculation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ctla-method',
  templateUrl: './ctla-method.component.html',
  styleUrl: './ctla-method.component.css'
})
export class CtlaMethodComponent {

  constructor(private valueCalculationService: ValueCalculationService, private router: Router) {
  }

  calculateValue() {
    let response = this.valueCalculationService.getValue('pino', 10, 10, 'Colombia').subscribe(data => {
      console.log(data);
      this.router.navigate(['/value'], { queryParams: { data: data } });
    });
    

  }
}
