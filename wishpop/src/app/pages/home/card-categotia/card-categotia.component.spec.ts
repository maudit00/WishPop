import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCategotiaComponent } from './card-categotia.component';

describe('CardCategotiaComponent', () => {
  let component: CardCategotiaComponent;
  let fixture: ComponentFixture<CardCategotiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardCategotiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardCategotiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
