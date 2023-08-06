import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdectListComponent } from './prodect-list.component';

describe('ProdectListComponent', () => {
  let component: ProdectListComponent;
  let fixture: ComponentFixture<ProdectListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdectListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
