import { OnInit } from '@angular/core';
declare var window: any;
declare var SFS2X: any;

export class SfsService implements OnInit {
    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.initializeSmartFoxConnection();
    }
    sfs: any;
    initializeSmartFoxConnection() {
        let config: any = {}
        config.host = "192.168.0.11";
        config.port = 8888;
        config.useSSL = false;
        config.zone = "SportsUnity";
        config.debug = true;

        this.sfs = new SFS2X.SmartFox(config);
        this.initializeEventListeners();
        console.log(this.sfs);
        console.log(this.sfs.isConnected());
    }
    initializeEventListeners() {
        this.sfs.addEventListener(SFS2X.SFSEvent.CONNECTION, onConnection, this);
        this.sfs.addEventListener(SFS2X.SFSEvent.LOGIN, onLogin, this);
        this.sfs.addEventListener(SFS2X.SFSEvent.LOGIN_ERROR, onLoginError, this);
        function onConnection(evtParams) {
            if (evtParams.success)
                console.log("Connected to SmartFoxServer 2X!");
            else
                console.log("Connection failed. Is the server running at all?");
        }
        function onLogin(evtParams) {
            console.log("Login successful!");
        }

        function onLoginError(evtParams) {
            console.log("Login failure: " + evtParams.errorMessage);
        }
        function onExtensionResponse(evtParams) {
            console.log(evtParams);
        }
    }
    connectSmartFox() {
        if (!this.sfs.isConnected())
            this.sfs.connect();
    }
    loginSmartFox() {
        if (!this.sfs.isConnected()) {
            this.sfs.connect();
            setTimeout(this.loginSmartFox(),2000)
        } else {
            this.sfs.send(new SFS2X.Requests.System.LoginRequest("nikhil", "", null, "SportsUnity"));
        }

    }
}