import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  new_owner: string;
  old_owner: string;
  commodity_id: number;
  product_id: number;
  timestamp: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    new_owner: 'jim',
    old_owner: 'pam',
    commodity_id: 782822,
    product_id: 981139,
    timestamp: 'on Fri, 01 Jan 2021 16:43:23 IST',
  },
  {
    new_owner: 'jim',
    old_owner: 'pam',
    commodity_id: 782822,
    product_id: 981139,
    timestamp: 'on Fri, 01 Jan 2021 16:43:23 IST',
  },
  {
    new_owner: 'jim',
    old_owner: 'pam',
    commodity_id: 782822,
    product_id: 981139,
    timestamp: 'on Fri, 01 Jan 2021 16:43:23 IST',
  },
  {
    new_owner: 'jim',
    old_owner: 'pam',
    commodity_id: 782822,
    product_id: 981139,
    timestamp: 'on Fri, 01 Jan 2021 16:43:23 IST',
  },
  {
    new_owner: 'jim',
    old_owner: 'pam',
    commodity_id: 782822,
    product_id: 981139,
    timestamp: 'on Fri, 01 Jan 2021 16:43:23 IST',
  },
  {
    new_owner: 'jim',
    old_owner: 'pam',
    commodity_id: 782822,
    product_id: 981139,
    timestamp: 'on Fri, 01 Jan 2021 16:43:23 IST',
  },
  {
    new_owner: 'jim',
    old_owner: 'pam',
    commodity_id: 782822,
    product_id: 981139,
    timestamp: 'on Fri, 01 Jan 2021 16:43:23 IST',
  },
  {
    new_owner: 'jim',
    old_owner: 'pam',
    commodity_id: 782822,
    product_id: 981139,
    timestamp: 'on Fri, 01 Jan 2021 16:43:23 IST',
  },
  {
    new_owner: 'jim',
    old_owner: 'pam',
    commodity_id: 782822,
    product_id: 981139,
    timestamp: 'on Fri, 01 Jan 2021 16:43:23 IST',
  },
  {
    new_owner: 'jim',
    old_owner: 'pam',
    commodity_id: 782822,
    product_id: 981139,
    timestamp: '2on Fri, 01 Jan 2021 16:43:23 IST',
  },
  // { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  // { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  // { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  // { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  // { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  // { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  // { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  // { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  // { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  // { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  // { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  // { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  // { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  // { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  // { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  // { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  // { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  // { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  // { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  // { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-tx-table',
  templateUrl: './tx-table.component.html',
  styleUrls: ['./tx-table.component.css'],
})
export class TxTableComponent implements OnInit {
  displayedColumns: string[] = [
    'new_owner',
    'old_owner',
    'commodity_id',
    'product_id',
    'timestamp',
  ];
  dataSource = ELEMENT_DATA;
  constructor() {}

  ngOnInit(): void {}
}
