import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopNavComponent } from './components/shared/top-nav/top-nav.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { MainSectionComponent } from './components/shared/main-section/main-section.component';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WeatherMapApiService } from './services/weather-map-api.service';
import { HttpClientModule } from '@angular/common/http';
import { UTCToDatePipe } from './pipes/utcto-date.pipe';
import { ConvertTempPipe } from './pipes/convert-temp.pipe';
import { MeterToKMPipe } from './pipes/meter-to-km.pipe';
import { SecondsToDayPipe } from './pipes/seconds-to-day.pipe';
import { WeatherInfoCardSingleComponent } from './components/shared/main-section/weather-info-card-single/weather-info-card-single.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    FooterComponent,
    MainSectionComponent,
    UTCToDatePipe,
    ConvertTempPipe,
    MeterToKMPipe,
    SecondsToDayPipe,
    WeatherInfoCardSingleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    WeatherMapApiService,
    ConvertTempPipe
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
