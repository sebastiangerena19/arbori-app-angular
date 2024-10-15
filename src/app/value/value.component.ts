import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrl: './value.component.css'
})
export class ValueComponent implements OnInit {

  data: any;
  constructor(private activatedRoute: ActivatedRoute) {

  }
  ngOnInit() {
    this.data = this.activatedRoute.snapshot.queryParamMap.get('data');
  }

}
