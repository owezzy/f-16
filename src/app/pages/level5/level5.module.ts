import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BreadcrumbsModule } from '../../../@fury/shared/breadcrumbs/breadcrumbs.module';
import { FuryCardModule } from '../../../@fury/shared/card/card.module';
import { Level5RoutingModule } from './level5-routing.module';
import { Level5Component } from './level5.component';
import { FurySharedModule } from '../../../@fury/fury-shared.module';

@NgModule({
  imports: [
    CommonModule,
    Level5RoutingModule,
    FuryCardModule,
    FurySharedModule,
    BreadcrumbsModule
  ],
  declarations: [Level5Component]
})
export class Level5Module {
}
