import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
const THEME_KEY = 'selected-app-theme';

@Injectable({
    providedIn: 'root',
})
export class ThemeService {
    darkMode = false;
    constructor(private platform: Platform, private _storage: Storage) {
        // this.platform.ready().then(() => {
        //     const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
        //     prefersDark.addListener((e) => {
        //         this.setAppTheme(e.matches);
        //     });
        // });
        // this._storage.get(THEME_KEY).then((theme) => {
        //     this.setAppTheme(theme);
        // });
    }
    // toggleTheme() {
    //     this.darkMode = !this.darkMode;
    //     this.setAppTheme(this.darkMode);
    // }

    // setAppTheme(dark) {
    //     this.darkMode = dark;
    //     if (this.darkMode) {
    //         document.body.classList.add('dark');
    //     } else {
    //         document.body.classList.remove('dark');
    //     }
    //     this._storage.set(THEME_KEY, this.darkMode);
    // }
}
