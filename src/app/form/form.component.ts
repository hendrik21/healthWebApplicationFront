import {AfterViewInit, Component, OnInit} from '@angular/core';
import {form} from '../../form'
import {Model} from "survey-core";
import "survey-core/survey.i18n";
import {SummaryService} from "../services/summary.service";
import {TableComponent} from "../table/table.component";
import {Router} from "@angular/router";
import {SurveyService} from "../services/survey.service";
import {Answer} from "../models/answer";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, AfterViewInit {

  model!: Model;

  constructor(private summaryService: SummaryService,
              private surveyService: SurveyService,
              private router: Router) {}

  ngOnInit() {
    const surveyModel = new Model(form)
    this.model = surveyModel;
  }

  async ngAfterViewInit() {
    this.model.onValueChanged.add(async (sender, options) => {
      if (options.name === 'language') {
        this.model.locale = this.model.getQuestionByName('language').value;
      }
    })
    this.model.onComplete.add(() => {
      const answer: Answer = {
        'name': this.model.getQuestionByName('name').value,
        'question1': this.model.getQuestionByName('question1').value,
        'question2': this.model.getQuestionByName('question2').value,
        'question3': this.model.getQuestionByName('question3').value,
        'question4': this.model.getQuestionByName('question4').value,
        'question5': this.model.getQuestionByName('question5').value,
        'question6': this.model.getQuestionByName('question6').value
      }
      this.surveyService.saveAnswer(answer).subscribe((response) => {
          // Handle the API response here
          console.log('Survey Results:', response);
          this.router.navigate(['/results'], {queryParams: { answer: JSON.stringify(answer)}});
        },
        (error) => {
          // Handle errors
          console.error('Error fetching survey results:', error);
        })
      /*this.summaryService.getSurveyResults("964f6c4e-930e-407c-8d50-c1505ee65fc4","es_es").subscribe(
        (response) => {
          // Handle the API response here
          console.log('Survey Results:', response);
        },
        (error) => {
          // Handle errors
          console.error('Error fetching survey results:', error);
        }
      );*/
    })
  }

}
