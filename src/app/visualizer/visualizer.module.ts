import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FumoVisualizerComponent } from './fumo-visualizer/fumo-visualizer.component';



@NgModule({
  declarations: [
    FumoVisualizerComponent
  ],

  exports:[
    FumoVisualizerComponent
  ],

  imports: [
    CommonModule
  ]
})
export class VisualizerModule { }
