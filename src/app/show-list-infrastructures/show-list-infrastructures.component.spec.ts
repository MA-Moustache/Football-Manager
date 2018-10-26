import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowListInfrastructuresComponent } from './show-list-infrastructures.component';

describe('ShowListInfrastructuresComponent', () => {
  let component: ShowListInfrastructuresComponent;
  let fixture: ComponentFixture<ShowListInfrastructuresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowListInfrastructuresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowListInfrastructuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
