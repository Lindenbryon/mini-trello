import { Component, OnInit } from '@angular/core';
import {ListService} from '../../services/list/list.service';
import {Observable} from 'rxjs';
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-t-dashboard',
  templateUrl: './t-dashboard.component.html',
  styleUrls: ['./t-dashboard.component.css']
})
export class TDashboardComponent implements OnInit {
  lists: Observable<any[]>;
  dashboardId: string;
  constructor(private listService: ListService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((url) => {
      this.dashboardId = url.get('id');
    });

    this.lists = this.listService.getTrelloLists(this.dashboardId);


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
  mainMenu(){
    this.router.navigate(['/dashboard']);
  }


}
