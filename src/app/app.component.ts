import { Component } from '@angular/core';
import { TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hosta';

  constructor(private translate: TranslateService){
    translate.setDefaultLang('en');
  }

  switchLanguage(language: string){
    this.translate.use(language);
  }

   mobileToggle() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  languages = ['en', 'hr' ];
}


