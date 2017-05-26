import { Injectable, OnInit, Output } from "@angular/core";
declare var window: any; // for event listeners
declare var SFS2X: any;// sfs2x object from api.js
// import {SFS2X,SmartFox} from '../assets/sfs2x-api-1.7.3.js'
@Injectable()
export class AppService {


    ngOnInit() {

    }
    sfs: any;
    testSFX() {
        let config: any = {};
        config.host = 'stg-sf.sportsunity.co';// "stg-sf.sportsunity.co";
        config.port = 8888;
        config.useSSL = false;
        config.zone = "SportsUnity"//"BasicExamples";
        config.debug = true;
        this.sfs = new SFS2X.SmartFox(config);
        console.log(this)
        console.log(window)

        console.log(this.sfs)
        console.log(this.sfs.isConnected());


        this.sfs.addEventListener(SFS2X.SFSEvent.CONNECTION, onConnection, window);
        this.sfs.addEventListener(SFS2X.SFSEvent.CONNECTION_LOST, onConnectionLost, this);
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
        this.sfs.connect()

    }
    testIfRunning() {

        console.log(this.sfs.isConnected())
    }
    tryARoomRequest(username: string) {
        this.sfs.addEventListener(SFS2X.SFSEvent.LOGIN, onLogin, this);
        this.sfs.addEventListener(SFS2X.SFSEvent.LOGIN_ERROR, onLoginError, this);

        // Login
        this.sfs.send(new SFS2X.Requests.System.LoginRequest(username, "", null, "SportsUnity"));


        function onLogin(evtParams) {
            console.log("Login successful!");
        }

        function onLoginError(evtParams) {
            console.log("Login failure: " + evtParams.errorMessage);
        }
    }
    relogin() {
        if (this.sfs.isConnected() === false) {
            this.sfs.connect()
        }
    }
    joinRoom() {
        this.sfs.addEventListener(SFS2X.SFSEvent.ROOM_JOIN, onRoomJoined, this);
        this.sfs.addEventListener(SFS2X.SFSEvent.ROOM_JOIN_ERROR, onRoomJoinError, this);

        // Join a Room called "Lobby"
        this.sfs.send(new SFS2X.Requests.System.JoinRoomRequest("The Lobby"));


        function onRoomJoined(evtParams) {
            console.log("Room joined successfully: " + evtParams.room);
        }

        function onRoomJoinError(evtParams) {
            console.log("Room joining failed: " + evtParams.errorMessage);
            console.log(evtParams)
        }
    }
    extreq() {
        this.sfs.addEventListener(SFS2X.SFSEvent.EXTENSION_RESPONSE, onExtensionResponse, this);

        // Send two integers to the Zone extension and get their sum in return
        // var params = {};
        // params.n1 = 26;
        // params.n2 = 16;

        this.sfs.send(new SFS2X.Requests.System.ExtensionRequest("r", ));


        function onExtensionResponse(evtParams) {
            console.log(evtParams)
            // if (evtParams.cmd == "r") {
            //     var responseParams = evtParams.params;

            //     // We expect a number called "sum"
            //     //console.log("The sum is: " + responseParams.sum);
            // }
        }
    }
}