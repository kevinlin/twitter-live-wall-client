import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {TweetService} from '../../services/tweet.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.sass']
})
export class ChatComponent implements OnInit {

  constructor(private router: Router, public tweetService: TweetService) {
  }

  leaveChat(query) {
    this.tweetService.leave(query);
    if (query === this.tweetService.activeTweet.query) {
      this.router.navigate(['/tweet']);
    }
  }

  ngOnInit() {
  }

}
