import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {CommonService} from '../../services/common.service';
import {TweetService} from '../../services/tweet.service';

@Component({
  selector: 'app-channel',
  templateUrl: './tweet-wall.component.html',
  styleUrls: ['./tweet-wall.component.sass'],
  moduleId: module.id,
})
export class TweetWallComponent implements OnInit {

  currentMsg = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    public tweetService: TweetService,
    public commonService: CommonService
  ) {
  }

  send() {
    if (this.currentMsg.length) {
      this.tweetService.activeTweet.send(this.currentMsg, this.commonService.username);
      this.currentMsg = '';
    }
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {

      console.log(params);
      this.tweetService.join(params['query']);

      console.log('Active now is ....', this.tweetService.activeTweet.msgList);
      console.log('Active now are ....', this.tweetService.activeTweets);
    });
  }

}
