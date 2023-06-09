import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccuessComponent } from './succuess.component';

describe('SuccuessComponent', () => {
  let component: SuccuessComponent;
  let fixture: ComponentFixture<SuccuessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccuessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccuessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
