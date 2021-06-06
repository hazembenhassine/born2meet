import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { MatDialog } from '@angular/material/dialog';
import { PaymentModalComponent } from '../../modals/payment-modal/payment-modal.component';

@Component({
  selector: 'app-truth',
  templateUrl: './truth.component.html',
  styleUrls: ['./truth.component.scss']
})
export class TruthComponent implements OnInit {

  moment = moment;

  dates: {date1: string, date2: string, coupleType: number};
  result: string;
  text: string;
  shortText: string;

  showLong: boolean;

  constructor(private route: ActivatedRoute,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.dates = JSON.parse(this.route.snapshot.queryParams.dates);
    this.result = this.route.snapshot.data.compatibility.result;
    this.text = this.route.snapshot.data.compatibility.texte;
    this.shortText = this.route.snapshot.data.compatibility.shortTexte;
    const dialog = this.dialog.open(PaymentModalComponent, {
      width: '1050px',
      panelClass: 'modal-panel'
    });
    dialog.afterClosed().subscribe(value => {
      if (value) {
        this.showLong = true;
      }
    });
  }

}
