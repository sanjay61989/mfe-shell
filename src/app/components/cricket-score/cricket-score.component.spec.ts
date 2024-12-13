import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CricketScoreComponent } from './cricket-score.component';

describe('CricketScoreComponent', () => {
  let component: CricketScoreComponent;
  let fixture: ComponentFixture<CricketScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CricketScoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CricketScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
