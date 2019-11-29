package com.navin.accountmanager;


import android.app.Activity;
import android.content.Context;
import android.content.SharedPreferences;
import android.content.SharedPreferences.Editor;

import java.io.Serializable;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class PeerConfiguration implements Serializable {


    private Context m_Context;
    private Activity m_activity;
    public static final String STATE_PeerId = "PeerId";
    public static final String STATE_PEER_Name = "PeerName";
    public static final String STATE_Content = "content";
    public static final String STATE_REGISTER = "register";

    public static final String STATE_SENDER_NAME = "senderName";

    public static final String MyPREFERENCES = "MyPrefs_PeerId";

    public static final String STATE_ACCOUNT_MANAGER = "STATE_ACCOUNT_MANAGER";
    public static final String AUTHENTOKEN = "AUTHENTOKEN";
    public static final String TOEKN_ID = "TOEKN_ID";
    public static final String DEVICE_ID = "DEVICE_ID";

    static ExecutorService singleThreadExecutor = Executors.newSingleThreadExecutor();

    public SharedPreferences m_SharedPreferences;

    public PeerConfiguration(Context context) {
        // TODO Auto-generated constructor stub
        this.m_Context = context;
        m_SharedPreferences = m_Context.getSharedPreferences(MyPREFERENCES, Context.MODE_PRIVATE);
    }

    public PeerConfiguration(Context context, Activity activity) {
        // TODO Auto-generated constructor stub
        this.m_Context = context;
        this.m_activity = activity;
        m_SharedPreferences = m_Context.getSharedPreferences(MyPREFERENCES, Context.MODE_PRIVATE);
    }

    public PeerConfiguration() {
        // TODO Auto-generated constructor stub
    }

    public void setPeerID(String peerId) {

        Editor editor = this.m_SharedPreferences.edit();
        editor.putString(STATE_PeerId, peerId);
        editor.commit();
    }


    public String getPeerID() {
        return m_SharedPreferences.getString(STATE_PeerId, "");
    }

    public void setPeerName(String peerName) {

        Editor editor = this.m_SharedPreferences.edit();
        editor.putString(STATE_PEER_Name, peerName);
        editor.commit();
    }

    public String getPeerName() {
        return m_SharedPreferences.getString(STATE_PEER_Name, "");
    }

    public String getContent() {
        return m_SharedPreferences.getString(STATE_Content, "");
    }

    public void setContent(String Content) {

        Editor editor = this.m_SharedPreferences.edit();
        editor.putString(STATE_Content, Content);
        editor.commit();
    }

    public String getSenderName() {
        return m_SharedPreferences.getString(STATE_SENDER_NAME, "");
    }

    public void setSenderName(String Content) {

        Editor editor = this.m_SharedPreferences.edit();
        editor.putString(STATE_SENDER_NAME, Content);
        editor.commit();
    }


    public String getStateRegister() {
        return m_SharedPreferences.getString(STATE_REGISTER, null);
    }

    public void setStateRegister(String peerName) {

        Editor editor = this.m_SharedPreferences.edit();
        editor.putString(STATE_REGISTER, peerName);
        editor.commit();
    }


    public void setAuthToken(String peerName) {
        Editor editor = this.m_SharedPreferences.edit();
        editor.putString(AUTHENTOKEN, peerName);
        editor.commit();
    }

    public String getAuthToken() {
        return m_SharedPreferences.getString(AUTHENTOKEN, null);
    }


    public void setTokenId(String tokenId) {
        Editor editor = this.m_SharedPreferences.edit();
        editor.putString(TOEKN_ID, tokenId);
        editor.commit();
    }

    public String getTokenId() {
        return m_SharedPreferences.getString(TOEKN_ID, "");
    }


    public void setDeviceId(String deviceId) {
        Editor editor = this.m_SharedPreferences.edit();
        editor.putString(DEVICE_ID, deviceId);
        editor.commit();
    }

    public String getDeviceId() {
        return m_SharedPreferences.getString(DEVICE_ID, "");
    }


}
