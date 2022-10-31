import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiperWorksComponent } from './swiper-works.component';

describe('SwiperWorksComponent', () => {
  let component: SwiperWorksComponent;
  let fixture: ComponentFixture<SwiperWorksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwiperWorksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwiperWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
