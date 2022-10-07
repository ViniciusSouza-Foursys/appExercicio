import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosDetailComponent } from './produtos-detail.component';

describe('ProdutosDetailComponent', () => {
  let component: ProdutosDetailComponent;
  let fixture: ComponentFixture<ProdutosDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutosDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdutosDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
