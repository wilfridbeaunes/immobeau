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
  invoice_data= [{
    USER :
      {
        id:1,
        first_name: 'Jamil',
        last_name: 'ASGHAR JAN',
        second:{
          id:1,
          first_name: 'Shabana',
          last_name: 'AFSHAN',
        }
      },
    OWNER:{
      id:1,
      first_name: 'Nadine',
      last_name: 'MAWAMBA',
      street: '5 Route de Montereau',
      post_code: '77130',
      city: 'MAROLLES-SUR-SEINE',
      country: 'FRANCE',
      phone: '0628612273',
    } ,
    HOUSE:{
      id:1,
      street: '27 avenue du général de gaulle',
      post_code: '77210',
      city: 'AVON',
      details: 'Bâtiment F18',
      country: 'FRANCE',
    },  
    INVOICE :{
      id:1,
      loyer:{
        loyerHC: 682.81,
        charge: 200,
      },
      unpay_total: 0,
      date_start: '06.10.2022',
      date_end: '05.11.2022',
      date_pay: '05.11.2022',
    }
  }];

  public downloadPDF(): void {
    let DATA: any = document.getElementById('htmlData');
      html2canvas(DATA).then((canvas) => {
      let fileWidth = 228;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/jpeg');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'JPEG', 0, position, fileWidth, fileHeight);
      PDF.save('angular-demo.pdf');
    });
  }

  constructor() { }

  ngOnInit(): void {
  }

}
