import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MatRadioModule } from '@angular/material/radio';
import { BoxElevationComponent } from './shared/components/box-elevation/box-elevation.component';
import { BoxWidthHeightComponent } from './shared/components/box-width-height/box-width-height.component';
import { BoxPaddingMarginComponent } from './shared/components/box-padding-margin/box-padding-margin.component';
import { BoxFlexComponent } from './shared/components/box-flex/box-flex.component';
import { BoxPaletteComponent } from './shared/components/box-palette/box-palette.component';

@NgModule({
  declarations: [AppComponent, BoxElevationComponent, BoxWidthHeightComponent, BoxPaddingMarginComponent, BoxFlexComponent, BoxPaletteComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    // MATERIAL
    MatInputModule,
    MatToolbarModule,
    MatRadioModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
