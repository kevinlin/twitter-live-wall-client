import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {StringifyPipe} from './pipes/stringify.pipe';
import {TweetService} from './services/tweet.service';
import {TweetRoutingModule} from './tweet-routing.module';
import {ChannelComponent} from './views/channel/channel.component';
import {ChatComponent} from './views/chat/chat.component';

@NgModule({
  declarations: [
    StringifyPipe,
    ChatComponent,
    ChannelComponent,
  ],
  imports: [
    FormsModule,
    TweetRoutingModule,
    CommonModule,
  ],
  providers: [TweetService],
})

export class TweetModule {

}
