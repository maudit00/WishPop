import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProdottiComponent } from './card-prodotti.component';

describe('CardProdottiComponent', () => {
  let component: CardProdottiComponent;
  let fixture: ComponentFixture<CardProdottiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardProdottiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardProdottiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
