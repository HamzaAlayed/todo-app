import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { MaterialModule } from '@angular/material';
// other imports
@NgModule({
    imports: [MaterialModule.forRoot()],

    imports:      [ BrowserModule ],
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }