import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-grid-edit',
  templateUrl: './grid-edit.component.html',
  styleUrls: ['./grid-edit.component.scss']
})
export class GridEditComponent implements OnInit {
  gridId: any ;
  grid : any ;

  constructor(private service: SharedService, private route : ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.gridId = params['gridId'];
      console.log("Card ID received : " + this.gridId);

    });
   }

  ngOnInit(): void {
    this.service.getGrid(this.gridId).subscribe(data => {
      this.grid = data;
      console.log("Grid data received : " + JSON.stringify(data));
      console.log(data);
    });
  }

  updateGrid() {
    console.log("Updating Grid");
    this.service.updateGrid(this.grid).subscribe(res =>{
      alert("Grid was updated");
    })
  }
}
