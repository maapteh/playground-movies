import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-loading-indicator',
  templateUrl: './loading-indicator.component.html',
  styleUrls: ['./loading-indicator.component.scss'],
  // https://blog.thoughtram.io/angular/2015/06/29/shadow-dom-strategies-in-angular2.html
  encapsulation: ViewEncapsulation.None
})

export class LoadingIndicatorComponent {
  @Input() isLoading: boolean;
}
