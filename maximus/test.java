package com.sports.unity.game.model;

import com.smartfoxserver.v2.entities.data.ISFSObject;
import com.smartfoxserver.v2.entities.data.SFSObject;
import com.smartfoxserver.v2.exceptions.SFSException;
import com.sports.unity.BuildConfig;
import com.sports.unity.game.controller.SFSController;

import sfs2x.client.SmartFox;
import sfs2x.client.core.BaseEvent;
import sfs2x.client.core.IEventListener;
import sfs2x.client.core.SFSEvent;
import sfs2x.client.entities.Room;
import sfs2x.client.entities.User;
import sfs2x.client.requests.ExtensionRequest;
import sfs2x.client.requests.JoinRoomRequest;
import sfs2x.client.requests.LeaveRoomRequest;
import sfs2x.client.requests.LoginRequest;
import sfs2x.client.requests.RoomExtension;
import sfs2x.client.requests.game.CreateSFSGameRequest;
import sfs2x.client.requests.game.SFSGameSettings;

/**
 * Created by Mad on 09-Dec-16.
 */

public class GameClient implements IEventListener {

    private static GameClient GAME_CLIENT;

    private static final String SERVER_IP = BuildConfig.SFS2X_URL;
    private static final String SERVER_PORT = BuildConfig.SFS2X_PORT;

    private static final String EXTENSION_ID = "maximus";
    private static final String EXTENSIONS_CLASS = "co.sports.unity.maximus.GameLogicExtension";

    private static final String ZONE_NAME = "SportsUnity";
    private static final String ROOM_GROUP_ID = "g";
    private static final String INVITATION_ROOM_ID = "ig";

    public static GameClient getInstance() {
        if (GAME_CLIENT == null) {
            GAME_CLIENT = new GameClient();
        }
        return GAME_CLIENT;
    }

    private GameListener gameListener;

    private String userID = null;

    private GameClient() {
        initSmartFox();
    }

    @Override
    public void dispatch(BaseEvent baseEvent) throws SFSException {
        handleServerEvent(baseEvent);
    }

    public void addGameListener(GameListener gameListener) {
        this.gameListener = gameListener;
    }

    public void removeGameListener() {
        this.gameListener = null;
    }

    public void connectAndLogin(String userID) {
        this.userID = userID;
        SmartFox smartFoxClient = SFSController.getSFSClient();
        if (!smartFoxClient.isConnected()) {
            int serverPortValue = Integer.parseInt(SERVER_PORT);
            smartFoxClient.connect(SERVER_IP, serverPortValue);
        } else {
            gameListener.loggedIn();
        }
    }

    public boolean isConnected() {
        return SFSController.getSFSClient().isConnected();
    }

    public String getLastJoinedRoomName() {
        return SFSController.getSFSClient().getLastJoinedRoom().getName();
    }

    public void randomOpponent(String jid, String level) {
        GameKeyGenerator.getInstance().generateRoomKey();
        String roomName = GameKeyGenerator.getInstance().getRoomKey(jid);
        ISFSObject object = new SFSObject();
        object.putUtfString(GameConstant.PARAM_NAME_ROOM_GROUP, ROOM_GROUP_ID+level);
        object.putUtfString(GameConstant.PARAM_ROOM_NAME, roomName);
        SFSController.getSFSClient().send(new ExtensionRequest(GameConstant.GAME_REQUEST_ID, object));
    }

    public void challengeFriend(String myJid, String friendJid) {
        createGameRoom(myJid);
    }

    public boolean joinRoom(String roomName) {
        boolean success = false;
        SmartFox smartFoxClient = SFSController.getSFSClient();
        Room room = smartFoxClient.getRoomByName(roomName);
        if (room != null) {
            smartFoxClient.send(new JoinRoomRequest(room.getName()));
            success = true;
        } else {
            success = false;
        }
        return success;
    }

    public void leaveRoom() {
        SmartFox smartFoxClient = SFSController.getSFSClient();
        Room room = smartFoxClient.getLastJoinedRoom();
        if (room != null) {
            smartFoxClient.send(new LeaveRoomRequest(room));
        } else {
            //nothing
        }
    }

    public void sendReady() {
        SmartFox smartFoxClient = SFSController.getSFSClient();
        smartFoxClient.send(new ExtensionRequest(GameConstant.READY_REQUEST_ID, new SFSObject(), smartFoxClient.getLastJoinedRoom()));
    }

    public void requestRematch() {
        SmartFox smartFoxClient = SFSController.getSFSClient();
        ISFSObject isfsObject = new SFSObject();
        isfsObject.putUtfString(GameConstant.REMATCH, GameConstant.REMATCH);
        smartFoxClient.send(new ExtensionRequest(GameConstant.READY_REQUEST_ID, isfsObject, smartFoxClient.getLastJoinedRoom()));
    }

    public void sendAnswerToOpponent(int questionNo, String option, int delta) {
        SmartFox smartFoxClient = SFSController.getSFSClient();
        ISFSObject object = new SFSObject();
        object.putInt(GameConstant.PARAM_NAME_QUESTION_NUMBER, questionNo);
        object.putUtfString(GameConstant.PARAM_NAME_ANSWER, option);
        object.putInt(GameConstant.PARAM_NAME_DELTA, delta);
        smartFoxClient.send(new ExtensionRequest(GameConstant.QA_REQUEST_ID, object, smartFoxClient.getLastJoinedRoom()));
    }

    public void sendPowerToOpponent(String power) {
        SmartFox smartFoxClient = SFSController.getSFSClient();
        ISFSObject object = new SFSObject();
        object.putInt(GameConstant.PARAM_NAME_QUESTION_NUMBER, GameConstant.POWER_DELIVERY);
        object.putUtfString(GameConstant.PARAM_NAME_ANSWER, power);
        smartFoxClient.send(new ExtensionRequest(GameConstant.QA_REQUEST_ID, object, smartFoxClient.getLastJoinedRoom()));
    }

    public void onDestroy() {
        leaveRoom();
        disconnect();
    }

    private void initSmartFox() {
        // Instantiate SmartFox client

        SmartFox smartFoxClient = SFSController.getSFSClient();

        smartFoxClient.setUseBlueBox(true);
        // Add event listeners
        smartFoxClient.addEventListener(SFSEvent.CONNECTION, this);//
        smartFoxClient.addEventListener(SFSEvent.CONNECTION_LOST, this);//
        smartFoxClient.addEventListener(SFSEvent.LOGIN, this);//
        smartFoxClient.addEventListener(SFSEvent.LOGIN_ERROR, this);//
        smartFoxClient.addEventListener(SFSEvent.ROOM_JOIN, this);//
        smartFoxClient.addEventListener(SFSEvent.USER_ENTER_ROOM, this);
        smartFoxClient.addEventListener(SFSEvent.USER_EXIT_ROOM, this);
        smartFoxClient.addEventListener(SFSEvent.PUBLIC_MESSAGE, this);
        smartFoxClient.addEventListener(SFSEvent.ROOM_ADD, this);
        smartFoxClient.addEventListener(SFSEvent.ROOM_REMOVE, this);
        smartFoxClient.addEventListener(SFSEvent.ROOM_JOIN_ERROR, this);
        smartFoxClient.addEventListener(SFSEvent.EXTENSION_RESPONSE, this);
        smartFoxClient.addEventListener(SFSEvent.INVITATION, this);
        smartFoxClient.addEventListener(SFSEvent.INVITATION_REPLY, this);
    }

    private void login(String jid) {
        SFSController.getSFSClient().send(new LoginRequest(jid, "", ZONE_NAME));
    }

    private void handleServerEvent(BaseEvent baseEvent) {
        if (gameListener != null) {
            if (baseEvent.getType().equalsIgnoreCase(SFSEvent.CONNECTION)) {
                if (baseEvent.getArguments().get("success").equals(true)) {
                    gameListener.connected(true);
                    login(userID);
                } else {
                    gameListener.connected(false);
                }
            } else if (baseEvent.getType().equalsIgnoreCase(SFSEvent.LOGIN)) {
                gameListener.loggedIn();

            } else if (baseEvent.getType().equals(SFSEvent.LOGOUT)) {
                gameListener.connected(false);
                disconnect();
            } else if (baseEvent.getType().equalsIgnoreCase(SFSEvent.CONNECTION_LOST)) {
                gameListener.connected(false);
                disconnect();

            } else if (baseEvent.getType().equalsIgnoreCase(SFSEvent.ROOM_JOIN)) {
                GameKeyGenerator.getInstance().resetMatchKey();
                Room room = (Room) baseEvent.getArguments().get("room");
                gameListener.roomJoined(room);

            } else if (baseEvent.getType().equals(SFSEvent.USER_ENTER_ROOM)) {
                final User user = (User) baseEvent.getArguments().get("user");
                final Room room = (Room) baseEvent.getArguments().get("room");
                gameListener.userUpdate(true, room, user);

            } else if (baseEvent.getType().equals(SFSEvent.USER_EXIT_ROOM)) {
                final User user = (User) baseEvent.getArguments().get("user");
                final Room room = (Room) baseEvent.getArguments().get("room");
                gameListener.userUpdate(false, room, user);
            } else if (baseEvent.getType().equalsIgnoreCase(SFSEvent.EXTENSION_RESPONSE)) {

                String cmdName = baseEvent.getArguments().get(GameConstant.EVENT_CMD_NAME).toString();
                ISFSObject paramObject = (ISFSObject) baseEvent.getArguments().get(GameConstant.EVENT_PARAM);

                if (cmdName.equalsIgnoreCase(GameConstant.CMD_NAME_START)) {
                    gameListener.dispatchGameEvent(GameConstant.CMD_NAME_START, paramObject);

                } else if (cmdName.equalsIgnoreCase(GameConstant.CMD_NAME_DISPLAY_NEXT_QA)) {
                    gameListener.dispatchGameEvent(GameConstant.CMD_NAME_DISPLAY_NEXT_QA, paramObject);

                } else if (cmdName.equalsIgnoreCase(GameConstant.CMD_NAME_QA)) {
                    gameListener.dispatchGameEvent(GameConstant.CMD_NAME_QA, paramObject);

                } else if (cmdName.equalsIgnoreCase(GameConstant.CMD_NAME_STOP)) {
                    gameListener.dispatchGameEvent(GameConstant.CMD_NAME_STOP, null);

                } else if (cmdName.equalsIgnoreCase(GameConstant.CMD_NAME_STOP_ABANDONED)) {
                    gameListener.dispatchGameEvent(GameConstant.CMD_NAME_STOP_ABANDONED, paramObject);

                } else if (cmdName.equalsIgnoreCase(GameConstant.CMD_NAME_REMATCH)) {
                    gameListener.dispatchRematchRequest();
                }
            }
        } else {
            //nothing
        }
    }

    private void createGameRoom(String jid) {
        SmartFox smartFoxClient = SFSController.getSFSClient();
        SFSGameSettings gameSettings = new SFSGameSettings(jid);
        RoomExtension extension = new RoomExtension(EXTENSION_ID, EXTENSIONS_CLASS);
        gameSettings.setName(jid);
        gameSettings.setGroupId(INVITATION_ROOM_ID);
        gameSettings.setExtension(extension);
        gameSettings.setGame(true);
        gameSettings.setMinPlayersToStartGame(2);
        gameSettings.setMaxUsers(2);
        gameSettings.setMaxSpectators(0);
        gameSettings.setPublic(true);
        smartFoxClient.send(new CreateSFSGameRequest(gameSettings));
    }

    private void disconnect() {
        SmartFox smartFoxClient = SFSController.getSFSClient();
        if (smartFoxClient.isConnected()) {
            smartFoxClient.disconnect();

        }
        smartFoxClient.removeAllEventListeners();
        if (GAME_CLIENT != null) {
            GAME_CLIENT.removeGameListener();
            SFSController.clearSmartFox();
            GAME_CLIENT = null;
        }
    }

    public boolean getGameType() {
        SmartFox smartFoxClient = SFSController.getSFSClient();
        if (smartFoxClient.getLastJoinedRoom().getGroupId().equals(INVITATION_ROOM_ID)) {
            return false;
        } else {
            return true;
        }
    }


}