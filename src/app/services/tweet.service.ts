import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {UUID} from 'angular2-uuid';
import {BehaviorSubject, Observable} from 'rxjs';
import * as io from 'socket.io-client';

import {environment} from '../../environments/environment';
import {Tweet} from '../models/tweet';
import {CommonService} from './common.service';

@Injectable({ providedIn: 'root' })
export class TweetService {
  socket: any;

  totalClients = 0;
  totalRooms = 0;

  socketConnected$ = new BehaviorSubject<boolean>(false);
  activeTweets = [];
  activeTweet: Tweet;
  featuredTweets = [
    'nodejs',
    'angular',
    'nba',
    'trump',
    'zuhlke'
  ];

  constructor(private commonService: CommonService, private http: HttpClient) {
    this.socket = io(environment.socket.baseUrl, environment.socket.opts);
    this.socket.on('connect', () => this.socketConnected$.next(true));
    this.socket.on('disconnect', () => this.socketConnected$.next(false));

    this.getServerStats().subscribe(res => {
      this.totalClients = res.clientsCount;
      this.totalRooms = res.roomsCount;
    });

    this.listen('statsUpdate').subscribe(res => {
      this.totalRooms = res.roomsCount;
      this.totalClients = res.clientsCount;
    });

    this.socketConnected$.asObservable().subscribe(connected => {
      console.log('Socket connected..: ', connected);
    });

  }

  join(query: string): Tweet {
    if (!this.commonService.username) {
      this.commonService.setUsername(UUID.UUID());
    }

    let tweet = this.getTweet(query);

    console.log('joining tweet stream >>', query);

    if (!tweet) {
      tweet = new Tweet(query);
      this.activeTweets.unshift(tweet);
    }

    this.activeTweet = tweet;

    return tweet;
  }

  leave(query: string) {
    this.getTweet(query).leave();
    this.activeTweets = this.activeTweets.filter(c => c.query !== query);
  }

  getServerStats(): Observable<any> {
    return this.http.get(`${environment.api.baseUrl}/stats`);
  }

  getTweet(query): Tweet {
    return this.activeTweets.filter(c => c.query === query)[0];
  }

  listen(event: string): Observable<any> {
    return new Observable(observer => {
      this.socket.on(event, data => {
        observer.next(data);
      });

      // observable is disposed
      return () => {
        this.socket.off(event);
      };
    });
  }

}
