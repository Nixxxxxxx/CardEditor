import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';
import { DataService } from 'src/app/shared/data.service';
import { Card, Skill } from '../card';
import { MatDialog } from '@angular/material/dialog';
import { SkillConditionComponent } from '../skill-condition/skill-condition.component';

@Component({
  selector: 'app-edit-card',
  templateUrl: './edit-card.component.html',
  styleUrls: ['./edit-card.component.scss']
})
export class EditCardComponent implements OnInit {

  card :Card = new Card("49234c8d-c7e0-4cdc-b83e-18085edc546b", "Minion", "Timo", "https://cdn.discordapp.com/attachments/1199324977544052786/1199325109161308252/fira.png", "Some thing about timo", true, "0", "None", "Human", "F_EXPLOSION_1", "AffinityKill", "F", "E_CLOUDS_1", 1, 2, 3, 4, []);
  cardId: any ;


  VoiceLines = Array<string>();
  AttackTypes = Array<string>();
  AnimationTypes = Array<string>();
  Genders = Array<string>();
  Jobs = Array<string>();
  Races = Array<string>();

  Intent = Array<string>();
  CardTypes = Array<string>();


  constructor(private service: SharedService, private dataService: DataService, private route : ActivatedRoute, public dialog: MatDialog) {
    this.route.params.subscribe(params => {
      this.cardId = params['cardId'];
      console.log("Card ID received : " + this.cardId);

    });
   }

  ngOnInit(): void {
    this.VoiceLines = this.dataService.VoiceLines;
    this.AttackTypes = this.dataService.AttackTypes;
    this.AnimationTypes = this.dataService.AnimationTypes;
    this.Genders = this.dataService.Genders;
    this.Jobs = this.dataService.Jobs;
    this.Races = this.dataService.Races;
    this.Intent = this.dataService.Intent;
    this.CardTypes = this.dataService.CardTypes;

    this.service.getCard(this.cardId).subscribe(data => {
      this.card = data;
      console.log("Card data received : " + JSON.stringify(data));
      console.log(data);
    });


    const skillStats = document.getElementById("skill-stats");
    if (skillStats) {
      skillStats.style.display = "none";
    }
    const skillDetails = document.getElementById("skill-details");
    if (skillDetails) {
      skillDetails.style.display = "none";
    }
    const btnCardStats = document.getElementById("btn-card-stats");
    if (btnCardStats) {
      btnCardStats.style.display = "none";
    }
  }

  updateCard(){
    this.service.updateCard(this.card).subscribe(res =>{
      alert( (res as Card).name + " was updated to database");
    })
  }

  showSkill(showSkill : boolean){
    console.log("Card ID received : " + this.cardId);

    var displaySkill= showSkill ? "block" : "none";
    var displayCard= showSkill ?   "none": "block";

    const updateBtn = document.getElementById("btn-skill-stats");
    if (updateBtn) {
      updateBtn.style.display = displayCard;
    }

    const cardStats = document.getElementById("card-stats");
    if (cardStats) {
      cardStats.style.display = displayCard;
    }

    const cardDetails = document.getElementById("card-details");
    if (cardDetails) {
      cardDetails.style.display = displayCard;
    }

    const skillStats = document.getElementById("skill-stats");
    if (skillStats) {
      skillStats.style.display = displaySkill;
    }

    const skillDetails = document.getElementById("skill-details");
    if (skillDetails) {
      skillDetails.style.display = displaySkill;
    }

    const btnCardStats = document.getElementById("btn-card-stats");
    if (btnCardStats) {
      btnCardStats.style.display = displaySkill;
    }
  }

  addSkill(){
    const skill = new Skill();
    this.card.skills.push(skill);
    this.updateCard();
  }

  deleteSkill(){
    var result = window.confirm("Delete Skill!");
    if(result){
      this.card.skills = [];
      this.updateCard();
      alert("Card was deleted");
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(SkillConditionComponent, {
      width: '500px',
      height: '150px',
      disableClose: true,
      data: { condition : this.card.skills[0].condition }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed. Received data:', result);
      if(result  != undefined && result != null && result != ""	){
        this.card.skills[0].condition = result;
      }else{
        this.card.skills[0].condition = "True";
      }
    });
  }
}
