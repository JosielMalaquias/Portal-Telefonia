import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdimistracaoComponent } from './adimistracao.component';

describe('AdimistracaoComponent', () => {
  let component: AdimistracaoComponent;
  let fixture: ComponentFixture<AdimistracaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdimistracaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdimistracaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
