import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CatAutosPage } from './cat-autos.page';

describe('CatAutosPage', () => {
  let component: CatAutosPage;
  let fixture: ComponentFixture<CatAutosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatAutosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CatAutosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
