import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-grid-add',
  templateUrl: './grid-add.component.html',
  styleUrls: ['./grid-add.component.scss']
})
export class GridAddComponent implements OnInit {

  constructor(private service: SharedService) { }

  grid : any = {
    "id": this.generateGuid(),
    "name": "Test Grid",
    "description": "This is a test grid",
    "theme": "base_v1",
    "imageUrl": "https://firebasestorage.googleapis.com/v0/b/fire-hexos.appspot.com/o/grids%2Fb_0_4.png?alt=media&token=629c227b-5ef6-43fe-baa0-15c1cf18a4af",
    "agilityRequired": 0,
    "isInteractable": false,
    "hasEffect": false,
  };

  ngOnInit(): void {
  }

  addGrid(){
    console.log("Adding Grid");
    this.grid.id = this.generateGuid();
    this.service.addGrid(this.grid).subscribe(res =>{
      alert("Grid was added to database");
    })
  }

  generateGuid(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}
