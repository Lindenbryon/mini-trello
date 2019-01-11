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
    let selectedElement = e.target;

    if (selectedElement.classList.contains('mat-card')) {
      selectedElement.classList.contains('cardToggle') ? selectedElement.classList.remove('cardToggle') : selectedElement.classList.add('cardToggle');
    }




  }

}
