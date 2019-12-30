import { Component, OnInit, ViewChild } from '@angular/core';
import {OwlCarousel} from 'ngx-owl-carousel';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  @ViewChild('owlElement',{static:true}) owlElement: OwlCarousel
  constructor() { }

  Images = ['/assets/img/clients/clienticon-1.png',  '/assets/img/clients/clienticon-3.png','/assets/img/clients/clienticon-4.png', '/assets/img/clients/clienticon-5.png', '/assets/img/clients/clienticon-6.png'];  
  
  SlideOptions = { items: 1, dots: true, nav: true };  
  CarouselOptions = { 
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsive:{
      445:{
          items:1,
          nav:false,
          autoWidth:true
      },
      600:{
          items:4,
          nav:false
      },
      1000:{
          items:5,
          nav:false
      },
      2559:{
        items:8,
        nav:false
      }
  }
  };  

  ngOnInit() {
    this.owlElement.next([200])
  }

}
