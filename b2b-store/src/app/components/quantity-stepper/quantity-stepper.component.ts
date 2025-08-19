import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-quantity-stepper',
  templateUrl: './quantity-stepper.component.html',
  styleUrls: ['./quantity-stepper.component.scss'],
})
export class QuantityStepperComponent  {
  @Input() value: number = 0;
  @Input() step: number = 1;
  @Input() min: number = 0;
  @Input() max: number = 9999;
  @Output() valueChange = new EventEmitter<number>();

  decrease(): void {
    const next = Math.max(this.min, this.value - this.step);
    this.value = next;
    this.valueChange.emit(this.value);
  }

  increase(): void {
    const next = Math.min(this.max, this.value + this.step);
    this.value = next;
    this.valueChange.emit(this.value);
  }
}
