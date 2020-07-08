import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AllNewsPage } from './all-news.page';

describe('AllNewsPage', () => {
  let component: AllNewsPage;
  let fixture: ComponentFixture<AllNewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllNewsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AllNewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
