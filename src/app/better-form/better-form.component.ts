import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-better-form',
  templateUrl: './better-form.component.html',
  styleUrls: ['./better-form.component.css']
})
export class BetterFormComponent implements OnInit {

  result: string = "足し算しましょう";

  calcForm:FormGroup = new FormGroup({
    fieldOne:new FormControl("", [Validators.required, Validators.maxLength(5)]),
    fieldTwo:new FormControl("", [Validators.required, Validators.maxLength(5)]),
  });

  constructor() {}

  ngOnInit(): void {}

  get fieldOne(){return this.calcForm.get("fieldOne");}
  get fieldTwo(){return this.calcForm.get("fieldTwo");}

  addAndShow() : void {
    let forResult:string = "正しい値を入力してください"
    let int1:number = Number(this.calcForm.get("fieldOne")?.value);
    let int2:number = Number(this.calcForm.get("fieldTwo")?.value);

    if(!Number.isNaN(int1) && !Number.isNaN(int2))
    {
      forResult = String(int1 + int2);
    }
    this.result = forResult;
  }
}
