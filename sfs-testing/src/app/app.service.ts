import { Injectable, OnInit } from "@angular/core";
declare var $: any;
declare var SFS2X: any;
// import {SFS2X,SmartFox} from '../assets/sfs2x-api-1.7.3.js'
@Injectable()
export class AppService {
    ngOnInit() {

    }
    sfs: any;
    testSFX() {
        let config: any = {};
        config.host ='localhost';// "stg-sf.sportsunity.co";
        config.port = 8080;
        config.useSSL = false;
        config.zone = "BasicExamples ";
        config.debug = true;
        this.sfs = new SFS2X.SmartFox(config);
        console.log(this)


        console.log(this.sfs)
        console.log(this.sfs.isConnected);


        this.sfs.addEventListener(SFS2X.SFSEvent.CONNECTION, onConnection, this.sfs);
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
    tryARoomRequest() {
        var settings = new SFS2X.RoomSettings("My Chat Room");
<<<<<<< HEAD
        settings.maxUsers = 20;
        settings.groupId = "chats";
        this.sfs.send(new SFS2X.CreateRoomRequest(settings));
        this.sfs.send(new SFS2X.JoinRoomRequest("The Lobby"));

=======
        settings.maxUsers = 2;
        settings.groupId = "chats";
        this.sfs.send(new SFS2X.CreateRoomRequest(settings));
>>>>>>> 1d0a8e3de957e909767afb106c03125b20897ff8
    }
}