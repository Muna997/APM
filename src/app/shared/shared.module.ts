import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterNamePipe } from './fillter.pipe';
import { StarComponent } from './star.component';
import { FormsModule } from '@angular/forms';
import { ConvertToSpacesPipe } from './convert-to-spaces.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [StarComponent, FilterNamePipe, ConvertToSpacesPipe],
  imports: [CommonModule, FontAwesomeModule],
  exports: [
    CommonModule,
    FormsModule,
    ConvertToSpacesPipe,
    StarComponent,
    FilterNamePipe,
  ],
})
export class SharedModule {}
