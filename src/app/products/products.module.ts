import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { FilterNamePipe } from '../shared/fillter.pipe';
import { StarComponent } from '../shared/star.component';
import { ProdectDetailComponent } from './prodect-detail.component';
import { ProdectListComponent } from './prodect-list.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProdectListComponent,
    ProdectDetailComponent,
    // StarComponent,
    // ConvertToSpacesPipe,
    // FilterNamePipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,

    RouterModule.forChild([
      { path: 'Prodects', component: ProdectListComponent },
      {
        path: 'Prodects/:id',
        canActivate: [ProductDetailGuard],
        component: ProdectDetailComponent,
      },
    ]),
    SharedModule,
  ],
})
export class ProductsModule {}
