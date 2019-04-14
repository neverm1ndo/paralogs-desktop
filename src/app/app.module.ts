import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppRoutingModule } from './/app-routing.module';
import { AppComponent } from './app.component';
import { PlayerlogComponent } from './playerlog/playerlog.component';
import { HttpClientModule } from '@angular/common/http';
import { SortPipe } from './sort.pipe';
import { LoglineComponent } from './logline/logline.component';
import { GeoseriesComponent } from './geoseries/geoseries.component';
import { WeaponsPipe } from './weapons.pipe';
import { DeathReasonsPipe } from './death-reasons.pipe';
import { SleepPipe } from './sleep.pipe';
import { HeadsearchComponent } from './headsearch/headsearch.component';
import { BanReasonsPipe } from './ban-reasons.pipe';
import { FiltercomposerComponent } from './filtercomposer/filtercomposer.component';
import { HdPipe } from './hd.pipe';
import { LobbyComponent } from './lobby/lobby.component';
import { HdsearchComponent } from './hdsearch/hdsearch.component';
import { PreprocPipe } from './preproc.pipe';
import { AdmsPipe } from './adms.pipe';
import { SpecialComponent } from './special/special.component';
import { FileSizePipe } from './file-size.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PlayerlogComponent,
    SortPipe,
    LoglineComponent,
    GeoseriesComponent,
    WeaponsPipe,
    DeathReasonsPipe,
    SleepPipe,
    HeadsearchComponent,
    BanReasonsPipe,
    FiltercomposerComponent,
    HdPipe,
    LobbyComponent,
    HdsearchComponent,
    PreprocPipe,
    AdmsPipe,
    SpecialComponent,
    FileSizePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
