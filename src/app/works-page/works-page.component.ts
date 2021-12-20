import {Component, ViewEncapsulation, OnInit, ElementRef, ViewChild} from '@angular/core';

// import Swiper core and required modules
import SwiperCore, {Pagination, Navigation} from "swiper";
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'app-works-page',
  template: `
    <swiper
      [pagination]="{type: 'progressbar'}"
      [navigation]="true"
      (swiper)="onSwiper($event)"
      (slideChange)="onSlideChange()"
      class="mySwiper">
      <ng-template swiperSlide>
        <img src="../../assets/arcelikBackground.png" alt="arcelik"/>
        <h2 (click)="openScrollableContent(longContent)" #arcelikHeader id="arcelikHeader">Arçelik B2C Hybris
          Project</h2>
      </ng-template>
      <ng-template swiperSlide>
        <img src="../../assets/underWorkBackground.jpg" alt="onwork"/>
        <h2 (click)="onClickCarsi()" #carsiHeader id="carsiHeader">Çarşıbaşı Kozmetik ve Tekstil | SAP Hybris B2C
          Project
          <i>OnWork</i>
        </h2>
      </ng-template>
      <ng-template swiperSlide>
        <img src="../../assets/underWorkBackground.jpg" alt="onwork"/>
        <h2 (click)="onClickPenti()" #pentiHeadeer id="pentiHeader">Penti E-Commerce Cloud B2C Projesi
          <i>OnWork</i>
        </h2>
      </ng-template>
    </swiper>
    <ng-template #longContent let-modal>
      <div class="modal-body">
        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
          quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-light" (click)="modal.close('Close click')">Close</button>
      </div>
    </ng-template>`,
  styleUrls: ['./works-page.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class WorksPageComponent implements OnInit {
  @ViewChild('arcelikHeader') arcelikHeader: ElementRef | undefined
  @ViewChild('carsiHeader') carsiHeader: ElementRef | undefined
  @ViewChild('pentiHeader') pentiHeader: ElementRef | undefined


  constructor(private modalService: NgbModal) {
  }

  ngOnInit(): void {

  }

  onSlideChange() {
    console.log('slide change');
  }

  onSwiper(swiper: any) {
  }

  onClickArcelik() {
    const arcelik = document.getElementById('arcelikHeader');
    if (arcelik?.classList.contains('upped')) {
      // @ts-ignore
      arcelik.style.marginTop = "0";
      arcelik.classList.remove('upped')
    } else {
      arcelik?.classList.add('upped');
      // @ts-ignore
      arcelik?.style.marginTop = "-75vh";
    }
  }

  onClickCarsi() {
    // @ts-ignore
    document.getElementById('carsiHeader')?.style.marginTop = "-75vh";
  }

  onClickPenti() {
    // @ts-ignore
    document.getElementById('pentiHeader').style.marginTop = "-75vh";
  }

  openScrollableContent(longContent: any) {
    this.modalService.open(longContent, {scrollable: true});
    this.onClickArcelik();
  }
}
