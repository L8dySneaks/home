import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { PlantsFeaturesModule } from '@home/plants/features';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, PlantsFeaturesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
