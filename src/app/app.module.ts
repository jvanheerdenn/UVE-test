import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormBuilder, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  providers: [FormBuilder],
  declarations: [AppComponent, HelloComponent, CardComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
