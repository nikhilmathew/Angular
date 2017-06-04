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
  game_type: string = "b"
  round_type: string //batting or bowling
  private match_time: number = 5
  timer: any;
  obj: any;
  scoring_rules: any;
  time: number;
  private subscription: Subscription;

  answerclicked: boolean = false;//for each user ans
  botanswered: boolean = false;

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
  bot_responses: any;
  current_bot_response: any;


  constructor(private ds: DataService) { }

  ngOnInit() {
    this.ds.getQuizData().subscribe((data) => {
      console.log(data)
      this.obj = data.questions;
      this.bot_responses = data.bot_responses
      this.scoring_rules = data.game_rules
      this.timer = TimerObservable.create(1, 1000)
    })
  }
  startTimer() {

    this.subscription = this.timer.subscribe(t => {
      if (t > this.match_time) {
        this.subscription.unsubscribe()
        console.log("time's Up .. next question coming up")
        this.scoreCalculate(15000, this.current_bot_response.time)
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
    this.botanswered = false;
    this.answerclicked = false;
    if (this.currentquestion < this.obj.length) {// diverge from here for batting and bowling
      if (this.game_type == "b") {
        this.current_bot_response = this.bot_responses[this.currentquestion]
        this.bot_action()
      }
      this.singleobj = this.obj[this.currentquestion++];
      console.log(this.currentquestion)
    } else {
      console.log(this.obj.length, "no more questions")
      this.subscription.unsubscribe()
    }

  }
  bot_action() { // write bot answering logic here only timing logic written as of now
    setTimeout(() => {
      console.log(this.current_bot_response)
      this.botanswered = true;
      console.log("bot gives " + this.current_bot_response.answer + " answer")
      if (this.botanswered && this.answerclicked) {
        this.scoreCalculate(this.currentQuestionClickTime - this.questionStartTime, this.current_bot_response.time)
        setTimeout(() => {
          this.showAQuestion()
        }, 3000);
      }
    }, this.current_bot_response.time)

  }
  selectAnswer(answer) {
    this.answerclicked = true;
    this.currentQuestionClickTime = performance.now()
    console.log(answer)

    if (this.botanswered && this.answerclicked) {
      //this.subscription.unsubscribe()
      this.scoreCalculate(this.currentQuestionClickTime - this.questionStartTime, this.current_bot_response.time);
      setTimeout(() => {
        this.showAQuestion()
      }, 3000);
    }

  }
  scoreCalculate(timePlayer, timeOpponent) {
    //this.scoring_rules
    console.log("player time :" + timePlayer, "opponent time :" + timeOpponent)
    if (timePlayer < timeOpponent) {
      console.log("player answered first by " + (timeOpponent - timePlayer) + " ms")
      
    } else {
      console.log("opponent answered first by " + (timePlayer - timeOpponent) + " ms")
    }
  }

}
