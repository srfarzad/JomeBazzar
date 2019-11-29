package com.navin.accountmanager;

import android.accounts.Account;
import android.accounts.AccountManager;
import android.content.Context;

/**
 * Created by F.SarSeifi on 9/2/2017.
 */

public class AccountManagement {

    PeerConfiguration peerConfiguration;
    Context context;

    private AccountManagement() {
    }

    public AccountManagement(Context context) {
        this.context = context;
        peerConfiguration = new PeerConfiguration(context);
    }


    public boolean getHasAccount() {

        boolean result;

        AccountManager mAccountManager = AccountManager.get(AppConfiguration.getContext());
        Account[] accounts = mAccountManager.getAccounts();
        if (accounts.length > 0) {
            result = true;
        } else {
            peerConfiguration.setTokenId("");
            peerConfiguration.setAuthToken("");
            result = false;
        }
        return result;
    }


}
