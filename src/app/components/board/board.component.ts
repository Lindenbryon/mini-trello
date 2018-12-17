import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard/dashboard.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  boardItems: any;
  constructor(private dash: DashboardService) { }

  ngOnInit() {
    this.dash.getBoards().subscribe((data) => {
      console.log(data);
    });
  }

}
