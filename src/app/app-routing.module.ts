import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ChannelComponent} from './components/channel/channel.component';
import {ChatComponent} from './components/chat/chat.component';
import {HomeComponent} from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'tweet', component: ChatComponent, children: [{ path: ':query', component: ChannelComponent }] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
