import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from "src/app/shared.service";

@Component({
  selector: 'app-show-card',
  templateUrl: './show-card.component.html',
  styleUrls: ['./show-card.component.scss']
})
export class ShowCardComponent implements OnInit {

  cards:any = [];

  constructor(private service: SharedService, private router : Router) { }

  ngOnInit(): void {
      this.refreshCardList();
      console.log('This is a log message.');
  }

  refreshCardList(){
    this.service.getCardList().subscribe( data => {
      this.cards = data;
      console.log(this.cards);
    });
  }

  deleteCard(id : any){
    var result = window.confirm("Delete Card!");
    if(result){
      this.service.deleteCard(id).subscribe(data => {
        alert("Card was deleted");
        this.refreshCardList();
      });
    }
  }

  editCard(cardId : any) {
    console.log("cccc" + cardId);
   this.router.navigate(['/edit-card', cardId])
  }
}
