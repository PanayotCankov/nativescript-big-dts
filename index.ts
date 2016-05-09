declare var isAndroid: boolean;
declare var isIOS: boolean;

class Button {
    ios: UIButton;
    android: android.widget.Button;
    constructor() {
        if (isAndroid) {
            this.android = new android.widget.Button(null);
        } else if (isIOS) {
            this.ios = new UIButton();
        }
    }
}
