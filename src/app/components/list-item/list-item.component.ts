import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { ListService} from '../../services/list/list.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input() list: any;
  listname: string;
  listItemId: string;
  listItemName: string;
  listItemObject: any;
  constructor(private route: ActivatedRoute, private listService: ListService) { }

  ngOnInit() {
      this.listname = this.list.payload.doc.data().list_name;
      this.listItemId = this.list.payload.doc.id;

      this.listItemObject = this.listService.getListItems(this.listItemId);
  }
  deleteListItem() {
      this.listService.deleteListItem(this.listItemId).then(() => {

      }, (error) => {
        console.log(error);
    });
  }
  addItemToList() {
    console.log(this.listItemName);
    this.listService.addItemToList(this.listItemId, this.listItemName).then(() => {
        this.listItemName = '';
    }, (error) => {
        console.log(error);
    });
  }

}
