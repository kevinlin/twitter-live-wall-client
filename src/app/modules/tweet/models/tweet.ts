import * as rp from 'request-promise';
import {BehaviorSubject, Observable, Subscription} from 'rxjs';

import {environment} from '../../../../environments/environment';

export class Tweet {

  socket: any;
  socketConnected$ = new BehaviorSubject<boolean>(false);

  query: string;
  tweetStream: Observable<any>;
  statsStream: Observable<any>;
  tweetSub: Subscription;
  statsSub: Subscription;
  msgList: any[] = [];
  totalClients = 0;

  constructor(query: string) {

    this.socket = io(environment.socket.baseUrl, environment.socket.opts);
    this.socket.on('connect', () => this.socketConnected$.next(true));
    this.socket.on('disconnect', () => this.socketConnected$.next(false));

    this.query = query;
    this.socket.emit('join', { query });
    this.tweetStream = this.listen('new_tweet');
    this.statsStream = this.listen('qryUpdate');

    this.tweetSub = this.tweetStream.subscribe(res => {
      this.msgList.push(res);
    });
    this.statsSub = this.statsStream.subscribe(res => {
      if (res.query === this.query) {
        this.totalClients = res.clientsCount;
      }
    });

    this.getqueryStats()
      .then(res => this.totalClients = res.clientsCount);
  }

  send(msg: string, usr: string) {
    if (msg.length) {
      this.socket.emit('send', { msg, usr, query: this.query });
      this.msgList.push({ msg, usr, query: this.query });
    }
  }

  listen(event: string): Observable<any> {
    return new Observable(observer => {
      this.socket.on(event, data => {
        if (data.query === this.query) {
          observer.next(data);
        }
      });
      return () => {
        this.socket.off(event);
      };
    });
  }

  leave() {
    this.socket.emit('leave', { query: this.query });
  }

  getqueryStats(): Promise<any> {

    return rp({
      uri: `${environment.api.baseUrl}/room/${this.query}/stats`,
      json: true
    });
  }

}
