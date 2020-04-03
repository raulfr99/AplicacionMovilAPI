import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CatTareasPage } from './cat-tareas.page';

describe('CatTareasPage', () => {
  let component: CatTareasPage;
  let fixture: ComponentFixture<CatTareasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatTareasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CatTareasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
