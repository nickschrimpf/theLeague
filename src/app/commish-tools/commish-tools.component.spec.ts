import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommishToolsComponent } from './commish-tools.component';

describe('CommishToolsComponent', () => {
  let component: CommishToolsComponent;
  let fixture: ComponentFixture<CommishToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommishToolsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommishToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
