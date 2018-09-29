import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsUsersComponent } from './posts-users.component';

describe('PostsUsersComponent', () => {
  let component: PostsUsersComponent;
  let fixture: ComponentFixture<PostsUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
