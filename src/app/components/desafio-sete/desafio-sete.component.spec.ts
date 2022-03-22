import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesafioSeteComponent } from './desafio-sete.component';

describe('DesafioSeteComponent', () => {
  let component: DesafioSeteComponent;
  let fixture: ComponentFixture<DesafioSeteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesafioSeteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesafioSeteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
