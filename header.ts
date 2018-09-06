import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-static-header',
  templateUrl: './static-header.component.html',
  styleUrls: ['./static-header.component.scss']
})
export class StaticHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}


import { Component, OnInit } from '@angular/core';
import { Department } from '../model/department.model';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.css']
})
export class ModelsComponent implements OnInit {
 model: any = {};

 
 departments: Department[] =  [
    {id:1, name:"Help Desk"},
    {id:2, name:"Admin"},
    {id:3, name:"HR"},
    {id:4, name:"IT"}
  ];

  constructor() { }

  ngOnInit() {
}
onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
  }
}
