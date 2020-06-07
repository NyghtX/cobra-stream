import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RootOverlayComponent } from './root-overlay.component';

describe('RootOverlayComponent', () => {
  let component: RootOverlayComponent;
  let fixture: ComponentFixture<RootOverlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RootOverlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RootOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
