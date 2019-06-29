package id.layarkaca21;

import android.content.Context;
import android.support.multidex.MultiDex;
import android.support.multidex.MultiDexApplication;
import com.facebook.react.ReactApplication;
import com.dylanvann.fastimage.FastImageViewPackage;
import com.BV.LinearGradient.LinearGradientPackage;
import com.swmansion.reanimated.ReanimatedPackage;
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
import com.cmcewen.blurview.BlurViewPackage;
import org.reactnative.camera.RNCameraPackage;
import com.airbnb.android.react.maps.MapsPackage;
import com.reactcommunity.rnlocalize.RNLocalizePackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends MultiDexApplication implements ReactApplication {

  @Override
  protected void attachBaseContext(Context newBase) {
      super.attachBaseContext(newBase);
      MultiDex.install(this);
  }

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new LinearGradientPackage(),
            new ReanimatedPackage(),
            new RNGestureHandlerPackage(),
            new BlurViewPackage(),
            new RNCameraPackage(),
            new MapsPackage(),
            new RNLocalizePackage(),
            new VectorIconsPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
