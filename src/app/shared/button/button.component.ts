import {
  Component,
  ViewEncapsulation,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'tt-button',
  templateUrl: 'button.component.html',
  styleUrls: ['button.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ButtonComponent {
  @Input() type: string;
  @Input() className: string;
  @Input() disabled: boolean;

  @Output() public onclickHandler: EventEmitter<Event> = new EventEmitter();

  private clickHandler($event: Event) {
    this.onclickHandler.emit($event);
  }
}
