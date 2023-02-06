import { Component } from '@angular/core';
import { FumosService } from '../services/fumos.service';

@Component({
  selector: 'app-fumo-visualizer',
  templateUrl: './fumo-visualizer.component.html',
})
export class FumoVisualizerComponent {

  constructor(private FumosService:FumosService){}

  search(){
    this.FumosService.getApi()
  }

  get results(){
    return this.FumosService.results
  }

}
