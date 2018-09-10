import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Location } from '@angular/common';
import { Data } from '../../data';
import { MoviegameService } from '../../moviegame.service';

@Component({
  selector: 'app-game-body-card',
  templateUrl: './game-body-card.component.html',
  styleUrls: ['./game-body-card.component.scss']
})
export class GameBodyCardComponent implements OnInit {

   myControl = new FormControl();
   options: string[];
   filteredOptions: Observable<string[]>;
   data : Data;
   datas : Data[];
   compareValue = '';
   value1 = '';
   score = 0;

  constructor(
      private moviegameservice :MoviegameService,
      private location: Location
    ) { }

  ngOnInit() {
    this.startOver();
  }

  filteredOptions = this.myControl.valueChanges
    .pipe(
      startWith(''),
      map(value => this._filter(value))
    );

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    if(!(value.length == 0)) {
      return this.options.filter(option => option.toLowerCase().includes(filterValue));
    }

  }
//get one data and all datas from moviegameservice
  startOver(): void {
   this.moviegameservice.getData().subscribe(data => this.data = data);
   this.moviegameservice.getDatas().subscribe(datas => {
     this.options = datas.map(one => one.answer)
    });
  }
//event when enter press
 onEnter(value){
  this.compareValue = 'true';
  this.value1 = value;
   if(this.value1 == this.data.answer){
      ++this.score;
   }
 }
//when playAgain button click
 playAgain(): void {
    location.reload();
 }

}
