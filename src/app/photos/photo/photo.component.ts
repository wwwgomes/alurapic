import { Component, Input } from '@angular/core';

@Component({
  selector: 'ap-photo',
  templateUrl: './photo.component.html',
})
export class PhotoComponet {
  @Input() description = '';

  @Input() url = '';
}
