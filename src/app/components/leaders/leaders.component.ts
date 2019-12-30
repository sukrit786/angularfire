import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-leaders',
  templateUrl: './leaders.component.html',
  styleUrls: ['./leaders.component.scss']
})
export class LeadersComponent implements OnInit {

  // var card = document.querySelector(".card");
  // var playing = false;
  // card.addEventListener('click',function() {
  //   if(playing)
  //     return;
  //   playing = true;
  //   anime({
  //     targets: card,
  //     scale: [{value: 1}, {value: 1.4}, {value: 1, delay: 250}],
  //     rotateY: {value: '+=180', delay: 200},
  //     easing: 'easeInOutSine',
  //     duration: 400,
  //     complete: function(anim){
  //        playing = false;
  //     }
  //   });
  // });
  // }
  constructor(private elref:ElementRef) { }

  fig='';
  ngOnInit() {
    console.log(this.fig)
  }
}