import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">&copy; 2018, <b><a href="http://www.conttudoweb.com.br" target="_blank">www.conttudoweb.com.br</a></b></span>
    <div class="socials">
      <!--<a href="#" target="_blank" class="ion ion-social-github"></a>-->
      <a href="https://fb.me/conttudoweb" target="_blank" class="ion ion-social-facebook"></a>
      <a href="https://twitter.com/conttudoweb" target="_blank" class="ion ion-social-twitter"></a>
      <!--<a href="#" target="_blank" class="ion ion-social-linkedin"></a>-->
    </div>
  `,
})
export class FooterComponent {
}
