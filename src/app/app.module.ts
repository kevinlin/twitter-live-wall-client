import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {ChatComponent} from './components/chat/chat.component';
import {QueryComponent} from './components/query/query.component';
import {ToolbarComponent} from './components/toolbar/toolbar.component';
import {TweetWallComponent} from './components/tweet-wall/tweet-wall.component';
import {StringifyPipe} from './pipes/stringify.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TweetWallComponent,
    ChatComponent,
    QueryComponent,
    ToolbarComponent,
    StringifyPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
