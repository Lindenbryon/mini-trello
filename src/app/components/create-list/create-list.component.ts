import { Component, OnInit, Input } from '@angular/core';
import { ListService} from '../../services/list/list.service';

@Component({
  selector: 'create-list',
  templateUrl: './create-list.component.html',
  styleUrls: ['./create-list.component.css']
})
export class CreateListComponent implements OnInit {
  @Input()
    listName: string;
  constructor(private listService: ListService) { }

  ngOnInit()
  {

  }
  ShowListNameInput(event){
    let nameInput = event.target.nextSibling;
    nameInput.style.display === 'none' ? nameInput.style.display = 'block' : nameInput.style.display = 'none';
  }
  createList(){
    this.listService.createTrelloList(this.listName).then(() => {
        console.log('resolved');
    }, (error) => {
      console.log(error);
    });
  }

}
