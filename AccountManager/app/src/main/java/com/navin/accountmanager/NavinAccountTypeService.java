package com.navin.accountmanager;



import android.app.Service;
import android.content.Intent;
import android.os.IBinder;

import java.net.Authenticator;
import java.net.PasswordAuthentication;

public class NavinAccountTypeService extends Service {

    @Override
    public void onCreate() {
        // Create a new authenticator object
        Authenticator mAuthenticator;
        mAuthenticator = new Authenticator() {
            @Override
            protected PasswordAuthentication getPasswordAuthentication() {
                return super.getPasswordAuthentication();
            }
        };
    }
    @Override
    public IBinder onBind(Intent intent) {
        NavinAccountAuthenticator authenticator = new NavinAccountAuthenticator(this);
        return authenticator.getIBinder();
    }
}