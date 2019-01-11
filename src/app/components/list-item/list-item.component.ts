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
  constructor(private route: ActivatedRoute, private listService: ListService) { }

  ngOnInit() {
      this.listname = this.list.payload.doc.data().list_name;
      this.listItemId = this.list.payload.doc.id;
      console.log(this.listItemId);
  }
  deleteListItem() {
      this.listService.deleteListItem(this.listItemId).then(() => {

      }, (error) => {
        console.log(error);
    });
  }

}
