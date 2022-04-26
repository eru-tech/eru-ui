import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoDailogComponent } from './info-dailog.component';

describe('InfoDailogComponent', () => {
  let component: InfoDailogComponent;
  let fixture: ComponentFixture<InfoDailogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoDailogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoDailogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
