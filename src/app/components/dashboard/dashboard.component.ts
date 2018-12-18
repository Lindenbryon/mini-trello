import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard/dashboard.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  boardName: string = null;
  boards: Observable<any[]>;
  addBoardDiv: any;
  constructor(private dash: DashboardService) { }

  ngOnInit() {
      this.boards = this.dash.getBoards();
  }
  toggleAddBoard(event){
    this.addBoardDiv = event.target.nextSibling;
    if(this.addBoardDiv.style.display === 'none'){
      this.addBoardDiv.style.display = 'block';
    }else {
      this.addBoardDiv.style.display = 'none';
    }
  }
  createNewBoard() {
    this.dash.addBoard(this.boardName).then((data)=>{
        this.addBoardDiv.style.display = "none";
    }, (error) => {
        console.log("failed");
    });
  }

}
