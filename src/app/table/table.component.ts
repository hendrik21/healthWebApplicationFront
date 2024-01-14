import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Answer} from "../models/answer";
import {SummaryService} from "../services/summary.service";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  public answer!: Answer;
  breakpoint: any;

  constructor(private route: ActivatedRoute, private summaryService: SummaryService) { }

  ngOnInit(): void {
    this.breakpoint = (window.innerWidth <= 500) ? 1 : 6;
    this.route.queryParams.subscribe((params) => {
      if (params['answer']) {
        this.answer = JSON.parse(params['answer']);
        console.log('Saved Answer in TableComponent:', this.answer);
      }
    });
    this.summaryService.getSurveyResults('964f6c4e-930e-407c-8d50-c1505ee65fc4','es_es').subscribe((response) => {
        // Handle the API response here
        console.log('Survey Results:', response);
      },
      (error) => {
        // Handle errors
        console.error('Error fetching survey results:', error);
      }
    );
  }

  onResize(event: any) {
    this.breakpoint = (event.target.innerWidth <= 500) ? 1 : 6;
  }
}
