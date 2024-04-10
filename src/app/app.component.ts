import { Component } from '@angular/core';

declare const $Lightning: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-iglesias-test';
  constructor(){
    setTimeout(() => {
      this.renderApp();
    }, 2000)
  }
  
  renderApp(){
    console.log("entrando a renderAPP")
    const appName = 'c:OptOutFormWrapper';
        const componentName = 'c:optoutForm';
        const lightningEndpoint = 'https://trailhead1-ac-dev-ed.develop.my.site.com';
        const targetElement = document.getElementById("prueba");
        const componentAttributes = {

        };
        console.log("entrando a renderAPP targetElement", targetElement)
        $Lightning.use(
                appName,
                function (){
                $Lightning.createComponent(
                        componentName,
                        componentAttributes,
                        targetElement,
                        function (cmp){
                            console.log('Componente creado');
                        }
                );
                },
                lightningEndpoint
        );
  }
}
