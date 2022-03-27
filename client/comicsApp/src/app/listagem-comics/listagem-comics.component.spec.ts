import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemComicsComponent } from './listagem-comics.component';

describe('ListagemComicsComponent', () => {
  let component: ListagemComicsComponent;
  let fixture: ComponentFixture<ListagemComicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemComicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemComicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
