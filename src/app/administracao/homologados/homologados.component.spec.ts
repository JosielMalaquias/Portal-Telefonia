import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomologadosComponent } from './homologados.component';

describe('HomologadosComponent', () => {
  let component: HomologadosComponent;
  let fixture: ComponentFixture<HomologadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomologadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomologadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
