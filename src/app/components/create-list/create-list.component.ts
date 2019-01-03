import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'create-list',
  templateUrl: './create-list.component.html',
  styleUrls: ['./create-list.component.css']
})
export class CreateListComponent implements OnInit {

  constructor() { }

  ngOnInit()
  {

  }
  ShowListNameInput(event){
    let nameInput = event.target.nextSibling;
    nameInput.style.display === 'none' ? nameInput.style.display = 'block' : nameInput.style.display = 'none';
  }
  createList(){

  }

}
