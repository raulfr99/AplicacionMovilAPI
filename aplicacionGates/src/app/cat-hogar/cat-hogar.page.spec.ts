import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CatHogarPage } from './cat-hogar.page';

describe('CatHogarPage', () => {
  let component: CatHogarPage;
  let fixture: ComponentFixture<CatHogarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatHogarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CatHogarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
