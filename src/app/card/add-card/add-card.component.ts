import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Card } from '../card';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-add-edit-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss']
})
export class AddCardComponent implements OnInit {
  card :Card = new Card("49234c8d-c7e0-4cdc-b83e-18085edc546b", "Minion", "New-Character", "https://firebasestorage.googleapis.com/v0/b/fire-hexos.appspot.com/o/characters%2Ffrosty.png?alt=media&token=c93b76cb-b2b7-4abd-9bcb-d32183a8d711", "Some thing about timo", true, "0", "None", "Human", "F_EXPLOSION_1", "Kill", "F", "E_CLOUDS_1", 1, 2, 3, 4, []);

  VoiceLines = Array<string>();
  AttackTypes = Array<string>();
  AnimationTypes = Array<string>();
  Genders = Array<string>();
  Jobs = Array<string>();
  Races = Array<string>();
  Intent = Array<string>();
  CardTypes = Array<string>();

  constructor(private service: SharedService, private dataService: DataService) { }

  ngOnInit(): void {
    this.VoiceLines = this.dataService.VoiceLines;
    this.AttackTypes = this.dataService.AttackTypes;
    this.AnimationTypes = this.dataService.AnimationTypes;
    this.Genders = this.dataService.Genders;
    this.Jobs = this.dataService.Jobs;
    this.Races = this.dataService.Races;
    this.Intent = this.dataService.Intent;
    this.CardTypes = this.dataService.CardTypes;
  }

  addCard(){
    var val = {
      "CardId": this.dataService.generateGuid(),
      "name": this.card.name,
      "imageUrl": this.card.imageUrl,
      "cost": this.card.cost,
      "atk": this.card.atk,
      "def": this.card.def,
      "agility": this.card.agility,
      "voiceLine": this.card.voiceLine,
      "job": this.card.job,
      "race": this.card.race,
      "attackType": this.card.attackType,
      "gender":this.card.gender,
      "animationType": this.card.animationType,
      "isRealeaseReady":this.card.isRealeaseReady,
      "description": this.card.description,
      "intent" : this.card.intent,
      "cardType" : this.card.cardType,
    };

    this.service.addCard(val).subscribe(res =>{
      alert( (res as Card).name + " was added to database");
    })
  }
}
