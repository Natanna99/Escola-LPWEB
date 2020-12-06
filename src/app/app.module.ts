import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ListaDisciplinaComponent } from './lista-disciplina/lista-disciplina.component';
import { DisciplinaService } from './disciplina.service';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    ListaDisciplinaComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    FormsModule
  ],
  providers: [
    DisciplinaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }