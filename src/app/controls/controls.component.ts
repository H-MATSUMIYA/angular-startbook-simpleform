import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, UntypedFormBuilder, UntypedFormArray } from '@angular/forms';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {

  hotcoldsel = ["Hot", "Cold"];
  addssel = ["Milk", "Sugar"];
  nutsel = ["ピーナッツ", "アーモンド", "くるみ"];

  coffeeForm:UntypedFormGroup = this.fb.group({
    name: "ブレンド",
    taste: "バランスのよい口当たり",
    hotcold: this.hotcoldsel[0],
    adds: this.fb.array([]),
    nut: this.nutsel[0],
  });

  constructor(private fb: UntypedFormBuilder) { }

  ngOnInit(): void {
  }

  onCheckChanged(item:string, e:Event){
    const checkbox = e.target as HTMLInputElement;

    let formArray = <UntypedFormArray>this.coffeeForm.controls["adds"];
    if(checkbox.checked){
      formArray.push(new UntypedFormControl(item));
    }else{
      let index = formArray.controls.findIndex(elm => elm.value == item);
      formArray.removeAt(index);
    }
  }
}
