import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from "src/app/shared.service";


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  grids:any = [];

  constructor(private service: SharedService, private router : Router) { }

  ngOnInit(): void {
      this.refreshGridList();
      console.log('This is a log message.');
  }

  refreshGridList(){
    this.service.getGridList().subscribe( data => {
      this.grids = data;
      console.log(data);
    });
  }

  deleteGrid(id : any){
    var result = window.confirm("Delete Grid!");
    if(result){
      this.service.deleteGrid(id).subscribe(data => {
        alert("Grid was deleted");
        this.refreshGridList();
      });
    }
  }

  editGrid(gridId : any) {
    console.log("Editing: " + gridId);
   this.router.navigate(['/edit-grid', gridId])
  }
}
