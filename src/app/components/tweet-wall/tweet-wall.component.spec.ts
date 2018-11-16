import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TweetWallComponent} from './tweet-wall.component';

describe('TweetWallComponent', () => {
  let component: TweetWallComponent;
  let fixture: ComponentFixture<TweetWallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TweetWallComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetWallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
