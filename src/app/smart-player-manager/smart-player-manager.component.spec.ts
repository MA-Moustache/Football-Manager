import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartPlayerManagerComponent } from './smart-player-manager.component';

describe('SmartPlayerManagerComponent', () => {
  let component: SmartPlayerManagerComponent;
  let fixture: ComponentFixture<SmartPlayerManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartPlayerManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartPlayerManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
