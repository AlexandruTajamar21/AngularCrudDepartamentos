import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncrementarSalarioComponent } from './incrementar-salario.component';

describe('IncrementarSalarioComponent', () => {
  let component: IncrementarSalarioComponent;
  let fixture: ComponentFixture<IncrementarSalarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncrementarSalarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncrementarSalarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
