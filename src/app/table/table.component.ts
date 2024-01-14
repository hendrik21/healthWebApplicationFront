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
  private language!: string;
  public results: any;
  public answer!: Answer;
  public breakpoint: any;
  public questionTitle1!: string;
  public questionTitle2!: string;
  public questionTitle3!: string;
  public questionTitle4!: string;
  public questionTitle5!: string;
  public questionTitle6!: string;
  public summaryTitle!: string;
  public stressUnitOfMeasureTitle!: string;
  public stressScoreTitle!: string;
  public depressionDescriptionTitle!: string;
  public depressionUnitOfMeasureTitle!: string;
  public anxietyDescriptionTitle!: string;
  public descriptionTitle!: string;
  public stressDescriptionTitle!: string;
  public anxietyScoreTitle!: string;
  public depressionScoreTitle!: string;
  public depressionLabelTitle!: string;
  public stressLabelTitle!: string;
  public takenOnDateTimeTitle!: string;
  public anxietyLabelTitle!: string;
  public anxietyUnitOfMeasureTitle!: string;
  public answerTitle!: string;
  public resultsTitle!: string;
  public questionTitle!: string;

  constructor(private route: ActivatedRoute, private summaryService: SummaryService) { }

  ngOnInit(): void {
    this.breakpoint = (window.innerWidth <= 500) ? 1 : 4;
    this.route.queryParams.subscribe((params) => {
      if (params['answer']) {
        this.answer = JSON.parse(params['answer']);
        this.language = params['language'];
        console.log('Saved Answer in TableComponent:', this.answer);
        console.log('language: ', this.language);
      }
    });
    let language = this.language
    switch (this.language) {
      case 'en':
        language = this.language + '_us';
        this.questionTitle = "Question";
        this.answerTitle = 'Answers';
        this.resultsTitle = 'Results';
        this.questionTitle1 = 'I found it hard to wind down';
        this.questionTitle2 = 'I was aware of dryness of my mouth';
        this.questionTitle3 = 'I couldn\'t seem to experience any positive feeling at all';
        this.questionTitle4 = 'I experienced breathing difficulty (e.g. excessively rapid breathing, breathlessness in the absence of physical exertion)';
        this.questionTitle5 = 'I found it difficult to work up the initiative to do things';
        this.questionTitle6 = 'I tended to over-react to situations';
        this.summaryTitle = 'Summary';
        this.stressUnitOfMeasureTitle = "Stress Unit of Measure";
        this.stressScoreTitle = "Stress Score";
        this.depressionDescriptionTitle = "Depression Description";
        this.depressionUnitOfMeasureTitle = "Depression Unit of Measure";
        this.anxietyDescriptionTitle = "Anxiety Description";
        this.descriptionTitle = "Description";
        this.stressDescriptionTitle = "stressDescription";
        this.anxietyScoreTitle = "Anxiety Score";
        this.depressionScoreTitle = "Depression Score";
        this.depressionLabelTitle = "Depression Label";
        this.stressLabelTitle = "Stress Label";
        this.takenOnDateTimeTitle = "Taken on Date Time";
        this.anxietyLabelTitle = "Anxiety Label Title";
        this.anxietyUnitOfMeasureTitle = "Anxiety Unit of Measure"
        break;
      case 'es':
        language = this.language + '_es';
        this.questionTitle = "Pregunta";
        this.answerTitle = "Respuestas";
        this.resultsTitle = 'Resultados';
        this.questionTitle1 = 'Me ha costado mucho descargar la tensión';
        this.questionTitle2 = 'Me di cuenta que tenía la boca seca';
        this.questionTitle3 = 'No podía sentir ningún sentimiento positivo';
        this.questionTitle4 = 'Se me hizo difícil respirar';
        this.questionTitle5 = 'Se me hizo difícil tomar la iniciativa para hacer cosas';
        this.questionTitle6 = 'Reaccioné exageradamente en ciertas situaciones';
        this.summaryTitle = 'Resumen';
        this.stressUnitOfMeasureTitle = 'Unidad de medida del estrés';
        this.stressScoreTitle = 'Puntuación de estrés';
        this.depressionDescriptionTitle = 'Descripción de la depresión';
        this.depressionUnitOfMeasureTitle = 'Unidad de medida de la depresión';
        this.anxietyDescriptionTitle = 'Descripción de la ansiedad';
        this.descriptionTitle = 'Descripción';
        this.stressDescriptionTitle = 'Descripción del estrés';
        this.anxietyScoreTitle = 'Puntuación de ansiedad';
        this.depressionScoreTitle = 'Puntuación de depresión';
        this.depressionLabelTitle = 'Etiqueta de depresión';
        this.stressLabelTitle = 'Etiqueta de estrés';
        this.takenOnDateTimeTitle = 'Fecha y hora de realización';
        this.anxietyLabelTitle = 'Etiqueta de ansiedad';
        this.anxietyUnitOfMeasureTitle = 'Unidad de medida de la ansiedad';
        break;
    }
    this.summaryService.getSurveyResults('964f6c4e-930e-407c-8d50-c1505ee65fc4', language).subscribe((response) => {
        // Handle the API response here
        console.log('Survey Results:', response);
        this.results = response;
      },
      (error) => {
        // Handle errors
        console.error('Error fetching survey results:', error);
      }
    );
  }

  onResize(event: any) {
    this.breakpoint = (event.target.innerWidth <= 500) ? 1 : 4;
  }
}
