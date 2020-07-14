import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PhotoComponet } from './photo.component';

@NgModule({
  declarations: [PhotoComponet],
  imports: [CommonModule, HttpClientModule],
  exports: [PhotoComponet],
})
export class PhotoModule {}
