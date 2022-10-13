import { Component,OnInit,ViewChild,ElementRef  } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  @ViewChild('htmlData') htmlData!: ElementRef;
  USERS = [
    {
      id: 1,
      name: 'Leanne Graham',
      email: 'sincere@april.biz',
      phone: '1-770-736-8031 x56442',
    },
    {
      id: 2,
      name: 'Ervin Howell',
      email: 'shanna@melissa.tv',
      phone: '010-692-6593 x09125',
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      email: 'nathan@yesenia.net',
      phone: '1-463-123-4447',
    },
  ];

  public openPDF(): void {
    let DATA: any = document.getElementById('htmlData');
      html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('angular-demo.pdf');
    });
  }

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
