import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanysListComponent } from './companys-list.component';

describe('CompanysListComponent', () => {
  let component: CompanysListComponent;
  let fixture: ComponentFixture<CompanysListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompanysListComponent]
    });
    fixture = TestBed.createComponent(CompanysListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
