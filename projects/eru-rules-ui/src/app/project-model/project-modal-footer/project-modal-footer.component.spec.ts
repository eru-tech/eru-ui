import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectModalFooterComponent } from './project-modal-footer.component';

describe('ProjectModalFooterComponent', () => {
  let component: ProjectModalFooterComponent;
  let fixture: ComponentFixture<ProjectModalFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectModalFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectModalFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
