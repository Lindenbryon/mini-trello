import { Component, OnInit } from '@angular/core';
import {ListService} from '../../services/list/list.service';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-t-dashboard',
  templateUrl: './t-dashboard.component.html',
  styleUrls: ['./t-dashboard.component.css']
})
export class TDashboardComponent implements OnInit {
  lists: Observable<any[]>;
  constructor(private listService: ListService) { }

  ngOnInit() {
    this.lists = this.listService.getTrelloLists();
  }
  selectList(e) {
    let listItems = document.getElementsByClassName('list-item');
    for (let y = 0, len = listItems.length; y < len; y++) {
      if (listItems[y].classList.contains('cardToggle')) {
        listItems[y].classList.remove('cardToggle');
      }
    }
    e.path.forEach(function(path) {
      if (path.classList) {
        if (path.classList.contains('mat-card')) {
          path.classList.add('cardToggle');
        }
      }
    });





  }

}
