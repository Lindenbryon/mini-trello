import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input() list: any;
  listname: string;
  constructor() { }

  ngOnInit() {
    console.log(this.list);
  }

}
