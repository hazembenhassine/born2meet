import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-payment-modal',
  templateUrl: './payment-modal.component.html',
  styleUrls: ['./payment-modal.component.scss']
})
export class PaymentModalComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<PaymentModalComponent>) { }

  ngOnInit(): void {
  }

  confirm(): void {
    this.dialogRef.close(true);
  }

}
