import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Answer} from "../models/answer";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  public answer!: Answer;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      if (params['answer']) {
        this.answer = JSON.parse(params['answer']);
        console.log('Saved Answer in TableComponent:', this.answer);
      }
    });
  }

}
