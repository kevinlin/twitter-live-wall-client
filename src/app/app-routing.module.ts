import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ChatComponent} from './components/chat/chat.component';

import {TweetWallComponent} from './components/tweet-wall/tweet-wall.component';

const routes: Routes = [
  { path: '', component: ChatComponent, pathMatch: 'full' },
  { path: 'tweet', component: ChatComponent, children: [{ path: ':query', component: TweetWallComponent }] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
