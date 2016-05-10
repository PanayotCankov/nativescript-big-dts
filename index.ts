/// <reference path="./ios/objc!UIKit.d.ts" />

declare var isAndroid: boolean;
declare var isIOS: boolean;

class Button {
    ios: any;
    //android: android.widget.Button;
    constructor() {
        if (isAndroid) {
            //this.android = new android.widget.Button(null);
        } else if (isIOS) {
            this.ios = UIButton.alloc();// .init();
        }
    }
}
