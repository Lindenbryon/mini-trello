import { Component, OnInit, Input } from '@angular/core';
import { ListService} from '../../services/list/list.service';

@Component({
  selector: 'app-list-item-child',
  templateUrl: './list-item-child.component.html',
  styleUrls: ['./list-item-child.component.css']
})
export class ListItemChildComponent implements OnInit {
  @Input() item: any;
itemName: string;
itemId: string;
docId: string;
  constructor(private listService: ListService) { }

  ngOnInit() {
    this.itemName = this.item.payload.doc.data().task_name;
    this.itemId = this.item.payload.doc.data().board_id;
    this.docId = this.item.payload.doc.id;
  }
  deleteListItemChild(e) {
    e.preventDefault();
    this.listService.deleteListItemChild(this.docId).then(() => {

    }, (error) => {
      console.log(error);
    });
  }

}
