import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Signin1Page } from './signin1.page';

describe('Signin1Page', () => {
  let component: Signin1Page;
  let fixture: ComponentFixture<Signin1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Signin1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Signin1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
