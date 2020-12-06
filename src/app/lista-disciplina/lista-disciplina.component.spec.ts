import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDisciplinaComponent } from './lista-disciplina.component';

describe('ListaDisciplinaComponent', () => {
  let component: ListaDisciplinaComponent;
  let fixture: ComponentFixture<ListaDisciplinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDisciplinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDisciplinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
