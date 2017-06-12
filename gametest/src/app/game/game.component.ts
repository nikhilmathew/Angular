import { Subscription } from 'rxjs/Subscription';
import { DataService } from 'app/data.service';
import { Component, OnInit } from '@angular/core';
import { SfsService } from "app/sfs.service";
import { TimerObservable } from "rxjs/observable/TimerObservable";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  roomID:string=''
  userCountChangeSubscription: any;
  username: string = this.route.snapshot.params['username']
  showCommentary: any = ["show-c"]
  game_type: string = "b"
  round_type: string //batting or bowling
  private match_time: number = 10
  timer: any;
  obj: any;

  scoring_rules: any = {
    six: 0,
    four: 0,
    two: 0

  }
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
  halfpointreached: boolean = false;
  usergavecorrectanswer = false;
  paramsSubscription: Subscription;
  roomJoinedSubscription: Subscription;

  constructor(private route: ActivatedRoute, private ds: DataService, private sfsService: SfsService) { }

  ngOnInit() {

    this.timer = TimerObservable.create(1, 1000)
    this.sfsService.connectSmartFox()
    this.roomJoinedSubscription = this.sfsService.RoomJoinedEvent.subscribe((roomName) => {
      console.log("caught room joined event and now loading questions")
      console.log(roomName)
      if(this.roomID!=roomName){
      this.fetchQuestions(roomName)
      this.roomID=roomName  
    }
    })
    this.userCountChangeSubscription = this.sfsService.UserCountChangedEvent.subscribe((evtParams) => {
      console.log("User count change event caught in component")
      console.log(evtParams)
      if(evtParams.uCount ==2){
       // 2 players have joined send match start call
      }

    })
  }
  initiateGameFlow() {
    // this.showAQuestion();///////////////////////////////////////////////////////////////
    console.log(this.username)
    //this.sfsService.connectSmartFox();
    this.sfsService.loginSmartFox(this.username).then(() => {
      this.sfsService.sendGameRoomRequest()
    })

    //this.showAQuestion()
    // need to call room req here    
  }

  fetchQuestions(key) {
    this.ds.getQuizData(key).subscribe((data) => {
      console.log(data)
      this.obj = data.questions;
      this.bot_responses = data.bot_responses
      data.game_rules.forEach(rule => {
        console.log(rule)
        if (rule.points == 6)
          this.scoring_rules.six = rule.time_allowed
        else if (rule.points == 4)
          this.scoring_rules.four = rule.time_allowed
        else if (rule.points == 2)
          this.scoring_rules.two = rule.time_allowed
      });
      console.log(this.scoring_rules)
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
        }, 1000)
      } else {
        this.time = t;
        console.log(this.time, t)
      }
    })
  }

  showAQuestion() {

    //this.sfsService.loginSmartFox();
    if (this.subscription)
      this.subscription.unsubscribe()
    this.startTimer()
    this.questionStartTime = performance.now();
    this.botanswered = false;
    this.answerclicked = false;
    this.usergavecorrectanswer = false;

    if (this.currentquestion < this.obj.length / 2) {// diverge from here for batting and bowling
      if (this.game_type == "b") {
        this.current_bot_response = this.bot_responses[this.currentquestion]
        this.bot_action()
      } else {
        // sfs player here or maybe independant
      }
      this.singleobj = this.obj[this.currentquestion++];
      console.log(this.currentquestion)
      this.halfpointreached = true
    } else if (this.currentquestion == 6 && this.halfpointreached) {
      this.subscription.unsubscribe()
      this.halfpointreached = false;
      console.log("first half over")
      setTimeout(() => {
        console.log("break over begin second round of quiz")
        this.showAQuestion();
      }, 5000)

    } else if (this.currentquestion < this.obj.length) {
      if (this.game_type == "b") {
        this.current_bot_response = this.bot_responses[this.currentquestion]
        this.bot_action()
        console.log("bot action part 2")
      } else {
        // sfs player here or maybe independant
      }
      this.singleobj = this.obj[this.currentquestion++];
      console.log(this.currentquestion)
    } else {
      //if()
      console.log(this.obj.length, "no more questions")
      this.subscription.unsubscribe()
    }
  }

  bot_action() { // write bot answering logic here only timing logic written as of now
    setTimeout(() => {
      console.log(this.current_bot_response)
      this.botanswered = true;
      console.log(this.currentquestion + " bot gives " + this.current_bot_response.answer + " answer")
      if (this.botanswered && this.answerclicked) {
        this.scoreCalculate(this.currentQuestionClickTime - this.questionStartTime, this.current_bot_response.time)
        setTimeout(() => {
          this.showAQuestion()
        }, 1000)
      }
    }, this.current_bot_response.time)
  }

  selectAnswer(answer) {
    this.answerclicked = true;
    this.currentQuestionClickTime = performance.now()
    console.log(answer)
    if (answer == this.singleobj.correct_answer) {
      console.log(this.currentquestion + " user clicked correct answer")
      this.usergavecorrectanswer = true;
    }
    if (this.botanswered && this.answerclicked) {
      //this.subscription.unsubscribe()
      this.scoreCalculate(this.currentQuestionClickTime - this.questionStartTime, this.current_bot_response.time);
      setTimeout(() => {
        this.showAQuestion()
      }, 1000);
    }
  }

  scoreCalculate(timePlayer, timeOpponent) {
    console.log("player time :" + timePlayer, "opponent time :" + timeOpponent, this.scoring_rules)
    if (timePlayer < timeOpponent && this.usergavecorrectanswer) {
      console.log("player answered first by " + (timeOpponent - timePlayer) + " ms")
      console.log(timePlayer)
      console.log(this.currentquestion + " user gave correct answer")
      if (timePlayer < this.scoring_rules.six)
        console.log("player hit a six")
      else if (timePlayer < this.scoring_rules.four)
        console.log("player hit a four")
      else if (timePlayer < this.scoring_rules.two)
        console.log("player hit a two")
      else {
        console.log("1 run only")
      }
    } else if (!this.usergavecorrectanswer && this.current_bot_response.answer) {
      console.log(this.currentquestion + " opponent answered correctly and first by " + (timePlayer - timeOpponent) + " ms")
    } else {
      console.log(this.currentquestion + " no one gave correct answer")
    }
  }
}
