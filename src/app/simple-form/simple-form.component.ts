import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {
  
  result : string = "足し算しましょう";
  text1 : string = "";
  text2 : string = "";

  constructor() { }

  ngOnInit(): void {}

  addAndShow() : void{
    let forResult:string = "正しい値を入力してください"
    let int1:number = Number(this.text1);
    let int2:number = Number(this.text2);

    if(!Number.isNaN(int1) && !Number.isNaN(int2))
    {
      forResult = String(int1 + int2);
    }

    this.result = forResult;
  }

}
