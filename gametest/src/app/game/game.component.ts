import { DataService } from './../data.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  @Output('oev') ev = new EventEmitter<string>()
  obj: any;
  singleobj: any;
  currentQuestion: number = 1;
  isClicked: boolean; false;
  answerclicked: boolean = false;
  questionShowTime: number = 0
  answerClickTime: number;
  questionTimer: any;

  constructor(private ds: DataService) { }

  ngOnInit() {
    this.ds.getQuizData().subscribe((data) => {
      console.log(data)
      this.obj = data.questions;
      this.singleobj = this.obj[0];
    })
  }
  showCommentary() {
    console.log("commentary")
    this.printQuestionObject();
  }
  printASingleQuestion() {
    console.log(this.obj[0], this.currentQuestion)
    this.singleobj = this.obj[this.currentQuestion]
    this.questionShowTime = performance.now();
    this.currentQuestion++;
    this.answerclicked = false;
  }
  printQuestionObject() {
    this.isClicked = true;
    this.questionTimer = setTimeout(() => {

      this.showCommentary()
      console.log(this.obj[0], this.currentQuestion)
      this.singleobj = this.obj[this.currentQuestion]
      this.questionShowTime = performance.now();
      this.currentQuestion++;
      this.answerclicked = false;
      if (this.currentQuestion < 12)
        this.showCommentary();
    }, 5000)

    //console.log(this.obj)
  }
  checkAnswer(event, answer) {
    this.answerclicked = true;
    this.answerClickTime = performance.now()
    console.log(this.answerClickTime, this.questionShowTime, "clicking this answer took " + (this.answerClickTime - this.questionShowTime) + " milliseconds")
    console.log(event, answer);
    if (this.singleobj.correct_answer === answer) {
      console.log("correct answer selected")
    } else {
      console.log("wrong answer");
    }
  }

}
