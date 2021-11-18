import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeempleadosComponent } from './homeempleados.component';

describe('HomeempleadosComponent', () => {
  let component: HomeempleadosComponent;
  let fixture: ComponentFixture<HomeempleadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeempleadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeempleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
