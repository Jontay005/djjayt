import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upcoming-shows',
  templateUrl: './upcoming-shows.component.html',
  styleUrls: ['./upcoming-shows.component.css']
})
export class UpcomingShowsComponent implements OnInit {
  title: string;
  shows: any[];
  
  constructor() { }

  ngOnInit() {
    this.title = 'Upcoming Shows December 2018';
    this.shows = [
        { id: 1, date: '12/1', Location: 'Phoenix, Arizona.', venue: 'Jambo Bar'},
        { id: 2, date: '12/2', Location: 'Dallas, Texas.', venue: 'Kaldis Coffee'},
        { id: 3, date: '12/3', Location: 'Seattle, Washington.', venue: 'Olive Bar'},
        { id: 4, date: '12/4', Location: 'New York, New York.', venue: 'Rafikis'}
    ];
  }
}
