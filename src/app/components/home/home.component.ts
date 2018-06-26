import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
 
   <h1>ngStyle</h1>
  <app-ng-style></app-ng-style>
  <hr>
    <h1>ngCss</h1>


  <app-css></app-css>

  <p>Hola mundo desde app.component</p>

  <hr>

  <h1>ngClass</h1>

   <app-clases></app-clases>

  <hr>
   <h1>Directivas personalizadas</h1>

   <p appResaltado>Hola mundo</p>

    <!--<p [appResaltado]="'blue'">
      Hola mundo
    </p>-->
    <hr>
  <h1>ngSwitch</h1>

  <app-ng-switch></app-ng-switch>
  `,
  styles: []
})
export class HomeComponent implements OnInit, OnChanges , DoCheck, AfterContentInit, AfterContentChecked , AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() { 
     console.log("constructor");

  }

  ngOnInit() {
        console.log("ngOnInit");

  }
  ngOnChanges(){
    console.log("ngOnChanges");
  }
  ngDoCheck(){
    console.log("ngDoCheck");
  }
  ngAfterContentInit(){
    console.log("ngAfterContentInit");
  }
  ngAfterContentChecked(){
    console.log("ngAfterContentChecked");
  }
  ngAfterViewInit(){
    console.log("ngAfterViewInit");
  }
  ngAfterViewChecked(){
    console.log("ngAfterViewChecked");
  }
  ngOnDestroy() {
    console.log("ngOnDestroy");
  }

}
