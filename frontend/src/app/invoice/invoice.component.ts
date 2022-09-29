import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //fonction to generate the receipt
  generateReciept() {
    console.log('generateReciept()');
  }

//fonction to send the Reciept by email
  sendReciept() {
    console.log('sendReciept()');
  }

  //fonction to generate the invoice
  generateInvoice() {
    console.log('generateInvoice()');
  }

  //fonction to send the invoice by email
  sendInvoice() {
    console.log('sendInvoice()');
  }

}
