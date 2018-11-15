import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {ToolbarComponent} from './components/toolbar/toolbar.component';

import {AppRoutingModule} from './modules/app-routing.module';
import {TweetModule} from './modules/tweet/tweet.module';
import {CommonService} from './services/common.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    TweetModule,
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
