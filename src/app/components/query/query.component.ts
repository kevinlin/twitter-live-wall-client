import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.sass']
})
export class QueryComponent implements OnInit {

  query: string;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  join() {
    if (this.query.length) {
      this.router.navigate(['/tweet', this.query]);
    }
  }

}
