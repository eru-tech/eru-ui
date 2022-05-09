import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectModelListingComponent } from './project-model-listing.component';

describe('ProjectModelListingComponent', () => {
  let component: ProjectModelListingComponent;
  let fixture: ComponentFixture<ProjectModelListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectModelListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectModelListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
