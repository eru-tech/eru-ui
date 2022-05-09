import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelHederComponent } from './model-heder.component';

describe('ModelHederComponent', () => {
  let component: ModelHederComponent;
  let fixture: ComponentFixture<ModelHederComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelHederComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelHederComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
