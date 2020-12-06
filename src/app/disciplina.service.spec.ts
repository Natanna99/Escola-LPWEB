import { TestBed } from '@angular/core/testing';

import { DisciplinaService } from './disciplina.service';

describe('DisciplinaService', () => {
  let service: DisciplinaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisciplinaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
