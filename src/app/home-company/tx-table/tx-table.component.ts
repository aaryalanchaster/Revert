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
  // {
  //   new_owner: 'jim',
  //   old_owner: 'pam',
  //   commodity_id: 782822,
  //   product_id: 981139,
  //   timestamp: 'on Fri, 01 Jan 2021 16:43:23 IST',
  // },
  // {
  //   new_owner: 'jim',
  //   old_owner: 'pam',
  //   commodity_id: 782822,
  //   product_id: 981139,
  //   timestamp: 'on Fri, 01 Jan 2021 16:43:23 IST',
  // },
  // {
  //   new_owner: 'jim',
  //   old_owner: 'pam',
  //   commodity_id: 782822,
  //   product_id: 981139,
  //   timestamp: 'on Fri, 01 Jan 2021 16:43:23 IST',
  // },
  // {
  //   new_owner: 'jim',
  //   old_owner: 'pam',
  //   commodity_id: 782822,
  //   product_id: 981139,
  //   timestamp: 'on Fri, 01 Jan 2021 16:43:23 IST',
  // },
  // {
  //   new_owner: 'jim',
  //   old_owner: 'pam',
  //   commodity_id: 782822,
  //   product_id: 981139,
  //   timestamp: 'on Fri, 01 Jan 2021 16:43:23 IST',
  // },
  // {
  //   new_owner: 'jim',
  //   old_owner: 'pam',
  //   commodity_id: 782822,
  //   product_id: 981139,
  //   timestamp: 'on Fri, 01 Jan 2021 16:43:23 IST',
  // },
  // {
  //   new_owner: 'jim',
  //   old_owner: 'pam',
  //   commodity_id: 782822,
  //   product_id: 981139,
  //   timestamp: 'on Fri, 01 Jan 2021 16:43:23 IST',
  // },
  // {
  //   new_owner: 'jim',
  //   old_owner: 'pam',
  //   commodity_id: 782822,
  //   product_id: 981139,
  //   timestamp: 'on Fri, 01 Jan 2021 16:43:23 IST',
  // },
  // {
  //   new_owner: 'jim',
  //   old_owner: 'pam',
  //   commodity_id: 782822,
  //   product_id: 981139,
  //   timestamp: '2on Fri, 01 Jan 2021 16:43:23 IST',
  // },
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
  constructor() { }

  ngOnInit(): void { }
}
