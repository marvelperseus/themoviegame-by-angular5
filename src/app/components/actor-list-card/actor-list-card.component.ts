import { Component, OnInit } from '@angular/core';
import { Data } from '../../data';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MoviegameService } from '../../moviegame.service';

@Component({
  selector: 'app-actor-list-card',
  templateUrl: './actor-list-card.component.html',
  styleUrls: ['./actor-list-card.component.scss']
})
export class ActorListCardComponent implements OnInit {
  datas: Data[];
  constructor(
    private moviegameservice :MoviegameService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getDatas();
  }
  getDatas(): void {
    this.moviegameservice.getDatas()
        .subscribe(datas => this.datas = datas);
  }


}
