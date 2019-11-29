package com.navin.accountmanager;

import android.accounts.Account;
import android.accounts.AccountManager;
import android.content.Context;

/**
 * Created by F.SarSeifi on 4/4/2018.
 */

public class NavinAccountManager {

    Context context;

    public NavinAccountManager(Context context) {
        this.context = context;
    }


    public boolean getHasAccount(){
        AccountManagement accountManagement=new AccountManagement(context);
        return accountManagement.getHasAccount();
    }

    public String getPassword() {
        AccountManager accountManager = AccountManager.get(context);
        final Account account = new Account(Constants.NAVIN_SSO_NAME, Constants.NAVIN_ACCOUNT_PACKAGENAME);
        return accountManager.getPassword(account);
    }

    public String getAuthToken() {
        AccountManager accountManager = AccountManager.get(context);
        final Account account = new Account(Constants.NAVIN_SSO_NAME, Constants.NAVIN_ACCOUNT_PACKAGENAME);
        return accountManager.peekAuthToken(account, account.type);
    }


}
