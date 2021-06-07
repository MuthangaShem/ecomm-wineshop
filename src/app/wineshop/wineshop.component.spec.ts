/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WineshopComponent } from './wineshop.component';

describe('WineshopComponent', () => {
  let component: WineshopComponent;
  let fixture: ComponentFixture<WineshopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WineshopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WineshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
