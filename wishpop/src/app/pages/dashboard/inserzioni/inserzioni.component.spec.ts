import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserzioniComponent } from './inserzioni.component';

describe('InserzioniComponent', () => {
  let component: InserzioniComponent;
  let fixture: ComponentFixture<InserzioniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InserzioniComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InserzioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
