import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokiTableComponent } from './poki-table.component';

describe('PokiTableComponent', () => {
  let component: PokiTableComponent;
  let fixture: ComponentFixture<PokiTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokiTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokiTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
