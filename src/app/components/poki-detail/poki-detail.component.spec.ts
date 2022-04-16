import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokiDetailComponent } from './poki-detail.component';

describe('PokiDetailComponent', () => {
  let component: PokiDetailComponent;
  let fixture: ComponentFixture<PokiDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokiDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokiDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
