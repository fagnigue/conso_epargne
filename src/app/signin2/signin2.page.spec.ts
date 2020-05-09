import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Signin2Page } from './signin2.page';

describe('Signin2Page', () => {
  let component: Signin2Page;
  let fixture: ComponentFixture<Signin2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Signin2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Signin2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
