import { Component, OnInit, } from '@angular/core';
import { DataService } from "app/data.service";
import { Subscription } from "rxjs/Subscription";
import { TimerObservable } from "rxjs/observable/TimerObservable";

@Component({
  selector: 'app-game2',
  templateUrl: './game2.component.html',
  styleUrls: ['./game2.component.css']
})
export class Game2Component implements OnInit {
  timer: any;
  obj: any;
  time: number;
  private subscription: Subscription;
  answerclicked: boolean = false;
  currentquestion: number = 0;
  maxquestion: number = 12;
  currentQuestionClickTime: any;
  questionStartTime: number;
  singleobj: any = {
    question_text: "question",
    option_a: "option A",
    option_b: "option B",
    option_c: "Option C",
    option_d: "option D"
  }


  constructor(private ds: DataService) { }

  ngOnInit() {
    this.ds.getQuizData().subscribe((data) => {
      console.log(data)
      this.obj = data.questions;
      this.timer = TimerObservable.create(1, 1000)
    })
  }
  startTimer() {

    this.subscription = this.timer.subscribe(t => {
      if (t > 10) {
        this.subscription.unsubscribe()
        console.log("time's Up .. next question coming up")
        this.scoreCalculate("infinity")
        setTimeout(() => {
          this.showAQuestion()
        }, 3000)
      } else {
        this.time = t;
        console.log(this.time, t)
      }
    })
  }

  showAQuestion() {
    if (this.subscription)
      this.subscription.unsubscribe()
    this.startTimer()
    this.questionStartTime = performance.now();
    this.answerclicked = false;
    if (this.currentquestion < this.obj.length) {
      this.singleobj = this.obj[this.currentquestion++];
      console.log(this.currentquestion)
    } else {
      console.log(this.obj.length, "no more questions")
      this.subscription.unsubscribe()
    }

  }
  selectAnswer(answer) {
    this.answerclicked = true;
    this.currentQuestionClickTime = performance.now()
    console.log(answer)
    this.subscription.unsubscribe()
    this.scoreCalculate(this.currentQuestionClickTime - this.questionStartTime);
    setTimeout(() => {

      this.showAQuestion()
    }, 3000);
  }
  scoreCalculate(time) {
    console.log("took " + time + " ms to click an answer")
  }
}
