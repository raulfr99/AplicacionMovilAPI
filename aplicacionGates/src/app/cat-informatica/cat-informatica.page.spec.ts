import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CatInformaticaPage } from './cat-informatica.page';

describe('CatInformaticaPage', () => {
  let component: CatInformaticaPage;
  let fixture: ComponentFixture<CatInformaticaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatInformaticaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CatInformaticaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
