import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../../models/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() card: Card;
  constructor() {}

  ngOnInit() {}
}
