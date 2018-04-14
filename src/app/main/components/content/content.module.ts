import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContentComponent} from './content.component';
import { ContentCanvasComponent } from './content-canvas/content-canvas.component';
import { ContentCanvasElementComponent } from './content-canvas-element/content-canvas-element.component';
import {SharedModule} from '../../../common/shared.module';
import { CanvasWorkPanelComponent } from './canvas-work-panel/canvas-work-panel.component';
import { NgxSliderMobyModule } from 'ngx-slider-moby/slider';
@NgModule({
  imports: [
    CommonModule,SharedModule.forRoot(),NgxSliderMobyModule
  ],
  declarations: [ContentComponent, ContentCanvasComponent, ContentCanvasElementComponent, CanvasWorkPanelComponent],
  exports:[ContentComponent]
})
export class ContentModule { }
