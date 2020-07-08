import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IndividualArticlePage } from './individual-article.page';

describe('IndividualArticlePage', () => {
  let component: IndividualArticlePage;
  let fixture: ComponentFixture<IndividualArticlePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividualArticlePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IndividualArticlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
