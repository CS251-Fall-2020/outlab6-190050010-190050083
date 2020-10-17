import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {DataService} from '../data.service';
import {Data} from '../data';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
	hello;
	data: Data;
  profileForm =new FormGroup({
  	Name: new FormControl(''),
  	Email: new FormControl(''),
  	Feedback: new FormControl(''),
  	Comments: new FormControl('')

  });
  constructor( private dataService: DataService) {}

  getrequest(): void{
  this.dataService.getrequest().subscribe(data => this.data = data)
  }
  postrequest(): void{
  this.dataService.postrequest(this.data).subscribe(data => this.hello = 'Success', error => this.hello = 'Fail')
  }
  ngOnInit() {
  this.getrequest();
  }
  onSubmit(){
  this.postrequest();

  }
}
