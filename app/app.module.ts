import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { GroupByPipe } from './group-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    GroupByPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
