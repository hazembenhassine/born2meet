import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-premium',
  templateUrl: './premium.component.html',
  styleUrls: ['./premium.component.scss']
})
export class PremiumComponent implements OnInit {

  form: FormGroup = this.fb.group({
    date1: ['', [Validators.required]],
    date2: ['', [Validators.required]],
    coupleType: [1],
    language: ['FR', [Validators.required]],
  });

  constructor(private fb: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
  }

  getCoupleType(): number {
    return this.form.get('coupleType').value;
  }

  setCoupleType(type: number): void {
    this.form.get('coupleType').patchValue(type);
  }

  submitDates(): void {
    if (this.form.valid) {
      console.log('test');
      const dates = this.form.value;
      dates.date1 = moment(dates.date1, 'YYYY-MM-DD').format('DD/MM/YYYY');
      dates.date2 = moment(dates.date2, 'YYYY-MM-DD').format('DD/MM/YYYY');
      this.router.navigate(
        ['/premium/truth'],
        {
          queryParams: {
            dates: JSON.stringify(dates)
          }
        }
      );
    } else {
      console.log('test');
      console.log(this.form.value);
      console.log(this.form.errors);
    }
  }

}
