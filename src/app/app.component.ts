import { Component, VERSION } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from './services/api.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  cards$ = this.service.getAPIResponse();

  constructor(private readonly service: ApiService) {}
}
