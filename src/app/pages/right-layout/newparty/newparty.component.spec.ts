import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewpartyComponent } from './newparty.component';

describe('NewpartyComponent', () => {
  let component: NewpartyComponent;
  let fixture: ComponentFixture<NewpartyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewpartyComponent]
    });
    fixture = TestBed.createComponent(NewpartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
