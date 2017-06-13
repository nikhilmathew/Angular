import { OnInit } from '@angular/core';
import { Subject } from "rxjs";
declare var window: any;
declare var SFS2X: any;

export class SfsService implements OnInit {
    roomId: string;
    sfs: any;
    RoomJoinedEvent = new Subject<any>();
    UserCountChangedEvent = new Subject<any>();
    GameStartEvent = new Subject<any>();
    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.initializeSmartFoxConnection();
    }

    initializeSmartFoxConnection() {
        let config: any = {}
        config.host = "192.168.0.11";
        config.port = 8888;
        config.useSSL = false;
        config.zone = "SportsUnity";
        config.debug = false;

        this.sfs = new SFS2X.SmartFox(config);
        this.initializeEventListeners();
        console.log(this.sfs);
        console.log(this.sfs.isConnected());
    }

    initializeEventListeners() { // try to add all event listeners here
        this.sfs.addEventListener(SFS2X.SFSEvent.CONNECTION, onConnection, window);
        this.sfs.addEventListener(SFS2X.SFSEvent.CONNECTION_LOST, onConnectionLost, window);
        this.sfs.addEventListener(SFS2X.SFSEvent.LOGIN, onLogin, this);
        this.sfs.addEventListener(SFS2X.SFSEvent.LOGIN_ERROR, onLoginError,this);
        this.sfs.addEventListener(SFS2X.SFSEvent.EXTENSION_RESPONSE, this.onExtensionResponse,this);
        this.sfs.addEventListener(SFS2X.SFSEvent.ROOM_ADD, this.onRoomCreated, this);
        this.sfs.addEventListener(SFS2X.SFSEvent.ROOM_CREATION_ERROR, onRoomCreationError, this);
        this.sfs.addEventListener(SFS2X.SFSEvent.ROOM_JOIN, this.onRoomJoined, this);
        this.sfs.addEventListener(SFS2X.SFSEvent.ROOM_JOIN_ERROR, onRoomJoinError, this);
        this.sfs.addEventListener(SFS2X.SFSEvent.USER_COUNT_CHANGE, this.onUserCountChange, this);
        this.sfs.addEventListener(SFS2X.SFSEvent.USER_ENTER_ROOM, onUserEnterRoom, this);
        this.sfs.addEventListener(SFS2X.SFSEvent.USER_EXIT_ROOM, onUserExitRoom, this);

        function onConnection(evtParams) {
            if (evtParams.success)
                console.log("Connected to SmartFoxServer 2X!");
            else
                console.log("Connection failed. Is the server running at all?");
        }
        function onConnectionLost(evtParams) {
            var reason = evtParams.reason;

            if (reason != SFS2X.Utils.ClientDisconnectionReason.MANUAL) {
                if (reason == SFS2X.Utils.ClientDisconnectionReason.IDLE)
                    console.log("A disconnection occurred due to inactivity");
                else if (reason == SFS2X.Utils.ClientDisconnectionReason.KICK)
                    console.log("You have been kicked by the moderator");
                else if (reason == SFS2X.Utils.ClientDisconnectionReason.BAN)
                    console.log("You have been banned by the moderator");
                else
                    console.log("A disconnection occurred due to unknown reason; please check the server log");
            }
            else {
                // Manual disconnection is usually ignored
            }
        }
        function onLoginError(evtParams) {
            console.log("Login failure: " + evtParams.errorMessage);
        }

        function onLogin(evtParams) {
            console.log("Login successful!");
        }


        function onRoomCreationError(evtParams) {
            console.log("Room creation failure: " + evtParams.errorMessage);
        }

        function onRoomJoinError(evtParams) {
            console.log("Room joining failed: " + evtParams.errorMessage);
        }
        function onUserEnterRoom(evtParams) {
            var room = evtParams.room;
            var user = evtParams.user;

            console.log("User " + user.name + " just joined Room " + room.name);
        }
        function onUserExitRoom(evtParams) {
            var room = evtParams.room;
            var user = evtParams.user;

            console.log("User " + user.name + " just left Room " + room.name);
        }

    }
    initiateSFX() {

        //
        let config: any = {};
        config.host = '192.168.0.11';// "stg-sf.sportsunity.co";
        config.port = 8888;
        config.useSSL = false;
        config.zone = "SportsUnity"//"BasicExamples";
        config.debug = false;
        //
        this.sfs = new SFS2X.SmartFox(config);
        //
        this.initializeEventListeners();
        //console.log(this, window)

        this.sfs.connect()

    }
    testSFXWorking() {
        console.log(this.sfs.isConnected());
    }
    sendGameRoomRequest() {
        console.log("game room request")
        var object: any = {}
        object.rg = "g2";
        function randomString(length, chars) {
            var result = '';
            for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
            return result;
        }
        object.rn = randomString(10, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');//room name sent to server

        this.sfs.send(new SFS2X.Requests.System.ExtensionRequest("g", object));

        // Send two integers to the Zone extension and get their sum in return


    }
    onRoomCreated(evtParams) {
        console.log("Room created: " + evtParams.room);// called when room is created on game req
        console.log(evtParams)
        this.RoomJoinedEvent.next(evtParams.room.name)
    }
    onRoomJoined(evtParams) {
        console.log("Room joined successfully: " + evtParams.room);//called when room joined
        console.log(evtParams)
        this.roomId = evtParams.room
        this.RoomJoinedEvent.next(evtParams.room.name)
    }
    onUserCountChange(evtParams, self = this) {
        var room = evtParams.room;
        var uCount = evtParams.uCount;
        var sCount = evtParams.sCount;
        if (uCount == 2) {
            //call ready request
            this.UserCountChangedEvent.next(evtParams)
        }

        console.log("Room: " + room.name + " now contains " + uCount + " users and " + sCount + " spectators");
    }
    onExtensionResponse(evtParams) {// send a subject back to component
        console.log(evtParams);
        this.GameStartEvent.next(evtParams)

    }
    sendReady(evtParams: any) {
        var room = evtParams.room;
        var uCount = evtParams.uCount;
        var sCount = evtParams.sCount;
        if (uCount == 2) {
            //call ready request
            let obj = {
                REMATCH: null
            }
            this.sfs.send(new SFS2X.Requests.System.ExtensionRequest("r", obj, this.roomId));
            console.log("sending the first ready to check if both users are ready, this is not to start showing questions")

        }
        console.log("Room: " + room.name + " now contains " + uCount + " users and " + sCount + " spectators");

    }
    sendReady2() {
        //call ready request
        let obj = {
            REMATCH: ''
        }
        this.sfs.send(new SFS2X.Requests.System.ExtensionRequest("r", obj, this.roomId));
        console.log("paHUCH GAYA CHUTYA ",this.roomId)


        //console.log("Room: " + room.name + " now contains " + uCount + " users and " + sCount + " spectators");

    }
    sendQA(questionno:number,option:string="no_answer",time:number=14000) {
                //call ready request
                let obj = {
                    qn:questionno ,
                    ao:option,
                    d:time
                }
                this.sfs.send(new SFS2X.Requests.System.ExtensionRequest("q",obj,this.roomId));
                console.log("qa request")
                
            
            //console.log("Room: " + room.name + " now contains " + uCount + " users and " + sCount + " spectators");
        
    }
    connectSmartFox() {
        console.log("called connect smartfox")
        if (!this.sfs.isConnected())
            this.sfs.connect();
    }

    loginSmartFox(username: string) {
        if (!this.sfs.isConnected()) {
            this.connectSmartFox();
            setTimeout(()=>{this.loginSmartFox(username)}, 2000)
        } else {
            this.sfs.send(new SFS2X.Requests.System.LoginRequest(username, "", null, "SportsUnity"));
        }
        return new Promise<void>((resolve, reject) => {
            if (this.sfs.isConnected())
                resolve();
            else
                reject()
        })
    }
}