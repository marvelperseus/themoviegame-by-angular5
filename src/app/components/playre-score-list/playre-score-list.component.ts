import { Component, OnInit } from '@angular/core';
import { scoreData } from '../../scoredats';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MoviegameService } from '../../moviegame.service';


@Component({
  selector: 'app-playre-score-list',
  templateUrl: './playre-score-list.component.html',
  styleUrls: ['./playre-score-list.component.scss']
})
export class PlayreScoreListComponent implements OnInit {
  scoredatas:scoreData[];
  constructor(
    private moviegameservice :MoviegameService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getScoreDatas();
  }
  getScoreDatas(): void {
    this.moviegameservice.getScoreDatas()
        .subscribe(scoredatas => this.scoredatas = scoredatas);
  }
  displayedColumns: string[] = ['id', 'name', 'score'];
  // dataSource = ELEMENT_DATA;

}
