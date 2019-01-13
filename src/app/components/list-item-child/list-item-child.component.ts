import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-item-child',
  templateUrl: './list-item-child.component.html',
  styleUrls: ['./list-item-child.component.css']
})
export class ListItemChildComponent implements OnInit {
  @Input() item: any;
itemName: string;
  constructor() { }

  ngOnInit() {
    this.itemName = this.item.payload.doc.data().task_name;
  }
  deleteListItem(){

  }

}
