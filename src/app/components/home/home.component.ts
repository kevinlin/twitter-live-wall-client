import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {CommonService} from '../../services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  moduleId: module.id,
})
export class HomeComponent implements OnInit {

  query: string;

  constructor(private commonService: CommonService, private router: Router) {
  }

  ngOnInit() {
  }

  join() {
    if (this.query.length) {
      this.router.navigate(['/tweet', this.query]);
    }
  }
}
