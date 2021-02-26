import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomewrkComponent } from './homewrk.component';

describe('HomewrkComponent', () => {
  let component: HomewrkComponent;
  let fixture: ComponentFixture<HomewrkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomewrkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomewrkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
