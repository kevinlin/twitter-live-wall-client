import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ChannelComponent} from './views/channel/channel.component';
import {ChatComponent} from './views/chat/chat.component';

const routes: Routes = [{
  path: '', component: ChatComponent,
  children: [
    { path: ':query', component: ChannelComponent }
  ]
}];


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class TweetRoutingModule {
}
