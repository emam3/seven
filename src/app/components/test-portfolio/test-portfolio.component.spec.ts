import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPortfolioComponent } from './test-portfolio.component';

describe('TestPortfolioComponent', () => {
  let component: TestPortfolioComponent;
  let fixture: ComponentFixture<TestPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestPortfolioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
