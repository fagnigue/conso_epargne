import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Signin3Page } from './signin3.page';

describe('Signin3Page', () => {
  let component: Signin3Page;
  let fixture: ComponentFixture<Signin3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Signin3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Signin3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
