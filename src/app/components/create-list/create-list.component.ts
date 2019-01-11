import { Component, OnInit, Input } from '@angular/core';
import { ListService} from '../../services/list/list.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'create-list',
  templateUrl: './create-list.component.html',
  styleUrls: ['./create-list.component.css']
})
export class CreateListComponent implements OnInit {
  @Input()
    listName: string;
    boardId: string = null;
  constructor(private listService: ListService, private route: ActivatedRoute) { }

  ngOnInit()
  {
    this.route.paramMap.subscribe((url) => {
        this.boardId = url.get('id');
    });
  }
  ShowListNameInput(event){
    let nameInput = event.target.nextSibling;
    nameInput.style.display === 'none' ? nameInput.style.display = 'block' : nameInput.style.display = 'none';
  }
  createList(){
    this.listService.createTrelloList(this.listName, this.boardId).then(() => {
        console.log('resolved');
    }, (error) => {
      console.log(error);
    });
  }

}
