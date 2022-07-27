import { Component, OnInit, VERSION } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from './services/api.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  searchText = '';
  form: FormGroup;
  cards$ = this.service.getAPIResponse();

  constructor(
    private readonly service: ApiService,
  ) {}

  searchData(event: KeyboardEvent): void {
    if (event.key === 'Backspace') {
      this.searchText = this.searchText.substring(
        0,
        this.searchText.length - 1
      );
    } else {
      this.searchText = this.searchText + event.key;
    }
    console.log(this.searchText)
    // this.cards$ = this.service.filterData(cards$);
  }
}
