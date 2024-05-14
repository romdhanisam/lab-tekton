import { ComponentFixture, TestBed } from '@angular/core/testing';
import { expect } from '@jest/globals';

import Component from "./component";

xdescribe('MainComponent', () => {
  let component: Component;
  let fixture: ComponentFixture<Component>;
  jest.mock('gsap');
  // jest.mock('gsap', () => ({
  //     getPropertyValue: () => '00000000-0000-0000-0000-000000000000',
  //      set: () => '00000000-0000-0000-0000-000000000000'
  // }
  // ));
  beforeEach(() => {
    fixture = TestBed.createComponent(Component);
    component = fixture.componentInstance;
    fixture.autoDetectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
