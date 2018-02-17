import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ProductModule } from './Components/product.module'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [ // объявляет компоненты, каналы, директивы, необходимые данному модулю
    AppComponent
  ],
  imports: [ // импортирует модули, необходимые данному модулю
    BrowserModule,
    FormsModule,
    HttpModule,
    ProductModule
  ],
  providers: [], // DI
  exports: [], // Компоненты, доступные для импорта в других модулях
  bootstrap: [AppComponent] // корневой компонент приложения
})
export class AppModule { }
