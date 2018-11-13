import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartInfraManagerComponent } from './smart-infra-manager.component';

describe('SmartInfraManagerComponent', () => {
  let component: SmartInfraManagerComponent;
  let fixture: ComponentFixture<SmartInfraManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartInfraManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartInfraManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
