package com.navin.accountmanager;

import android.app.Activity;
import android.app.Application;
import android.content.Context;
import android.graphics.Typeface;
import android.os.Build;
import android.os.StrictMode;


import java.io.Serializable;

/**
 * Created by F.Seyfi on 6/9/2016.
 */
public class AppConfiguration extends Application implements Serializable {


    public static final String PATH_TYPEFACE_FOLDER = "fonts/";
    private static AppConfiguration mInstance;

    private static Context context;
    private static Activity activity;
    private static AppConfiguration instance = null;
    public static final String TAG = "DroidVolley";

    public void onCreate() {
        super.onCreate();
        instance = this;
        AppConfiguration.context = getApplicationContext();

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.N) {
            StrictMode.VmPolicy.Builder builder = new StrictMode.VmPolicy.Builder();
            StrictMode.setVmPolicy(builder.build());
        }


    }


    public static Context getContext() {
        return AppConfiguration.context;
    }

    public static Activity getActivity() {
        return AppConfiguration.activity;
    }

    public void setContext(Context context) {
        this.context = context;
    }

    public void setActivity(Activity activity) {
        this.activity = activity;
    }


    private static void checkInstance() {
        if (instance == null)
            throw new IllegalStateException("App Not Created Yet!");
    }

    public static AppConfiguration getInstance() {
        checkInstance();
        return instance;
    }



}
