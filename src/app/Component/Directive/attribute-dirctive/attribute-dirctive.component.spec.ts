import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeDirctiveComponent } from './attribute-dirctive.component';

describe('AttributeDirctiveComponent', () => {
  let component: AttributeDirctiveComponent;
  let fixture: ComponentFixture<AttributeDirctiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttributeDirctiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttributeDirctiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
