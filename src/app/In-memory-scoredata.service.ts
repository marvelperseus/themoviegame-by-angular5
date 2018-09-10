import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryScoreDataService implements InMemoryDbService {
  createDb() {
    const scoredatas = [
      { id: 1, name:'John', score:41},
      { id: 2, name:'Walter', score:34 },
      { id: 3, name:'Richard', score:29 },
      { id: 4, name:'Greg', score:26 },
      { id: 5, name:'keeper', score:21 },
      { id: 6, name:'crazy-drama', score:17 },
      { id: 7, name:'freedom', score:12 },
      { id: 8, name:'Ask me', score:4 }
    ]
    const datas = [
      { id: 0, url:'src/assets/image/11.png', title:'CEO-2013', answer: 'Richard Lee' },
      { id: 1, url:'src/assets/image/12.jpeg', title:'CTO-1990', answer: 'Wang Li' },
      { id: 2, url:'src/assets/image/13.png', title:'Mobile development Team leader-2017', answer: 'Zhang Ho' },
      { id: 3, url:'src/assets/image/14.png', title:'Web development Team leader-2107', answer: 'James Lin' },
      { id: 4, url:'src/assets/image/15.jpg', title:'Web developer-1993', answer: 'David Lee' },
      { id: 5, url:'src/assets/image/16.jpg', title:'Web developer-2000', answer: 'John Smith' },
      { id: 6, url:'src/assets/image/17.jpeg', title:'Designer-205', answer: 'Kristyna Vondrouhova' },
      { id: 7, url:'src/assets/image/18.png', title:'Mobile developer-2019', answer: 'Greg Bauer' },
      { id: 8, url:'src/assets/image/19.jpeg', title:'Mobile developer-1989', answer: 'Rory Fryer' },
      { id: 9, url:'src/assets/image/20.jpeg', title:'Database developer-1979', answer: 'Tornado' }
    ]
    return {scoredatas, datas};
  }
}
