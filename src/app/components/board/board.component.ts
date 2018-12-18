import { Component, OnInit, Input } from '@angular/core';
import { DashboardService } from '../../services/dashboard/dashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
    @Input() board: any;
    name: string;
    boardId: string;
  constructor(private dash: DashboardService, private router: Router) { }

  ngOnInit() {
      this.name = this.board.payload.doc.data().name;
      this.boardId = this.board.payload.doc.id;
  }
  goToBoard(){

  }

}
