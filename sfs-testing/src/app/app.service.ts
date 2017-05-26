import { Injectable, OnInit } from "@angular/core";
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
        config.host = 'localhost';// "stg-sf.sportsunity.co";
        config.port = 8080;
        config.useSSL = false;
        config.zone = "BasicExamples";
        config.debug = true;
        this.sfs = new SFS2X.SmartFox(config);
        console.log(this)
        console.log(window)

        console.log(this.sfs)
        console.log(this.sfs.isConnected);


        this.sfs.addEventListener(SFS2X.SFSEvent.CONNECTION, onConnection, window);
        function onConnection(evtParams) {
            if (evtParams.success)
                console.log("Connected to SmartFoxServer 2X!");
            else
                console.log("Connection failed. Is the server running at all?");
        }
        this.sfs.connect()

    }
    testIfRunning() {

        console.log(this.sfs.isConnected)
    }
    tryARoomRequest(username: string) {
        var settings = new SFS2X.RoomSettings("My Chat Room");
        settings.maxUsers = 20;
        settings.groupId = "";
        //this.sfs.send(new SFS2X.CreateRoomRequest(settings));

        this.sfs.addEventListener(SFS2X.SFSEvent.LOGIN, onLogin, window);
        this.sfs.addEventListener(SFS2X.SFSEvent.LOGIN_ERROR, onLoginError, window);

        // Login

        this.sfs.send(new SFS2X.LoginRequest(username, "", null, "BasicExamples"));
        this.sfs.send(new SFS2X.JoinRoomRequest("The Lobby"));

        function onLogin(evtParams) {
            console.log("Login successful!");
        }

        function onLoginError(evtParams) {
            {
                console.log("Login failure: " + evtParams.errorMessage);

            }
        }
    }
    relogin() {
        if (this.sfs.isConnected === false) {
            this.sfs.connect()
        }
    }
}