/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FfkNavComponent } from './ffk-nav.component';

describe('FfkNavComponent', () => {
  let component: FfkNavComponent;
  let fixture: ComponentFixture<FfkNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FfkNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FfkNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
