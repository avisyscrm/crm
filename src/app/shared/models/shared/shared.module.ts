import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatatableComponent } from 'src/app/modules/client/datatable/datatable/datatable.component';
import { HeaderComponent } from 'src/app/modules/client/header/header.component';
import { LeftmenuComponent } from 'src/app/modules/client/leftmenu/leftmenu.component';
import { ColumnComponent } from 'src/app/modules/client/datatable/column/column.component';
import { PaginationComponent } from 'src/app/modules/client/datatable/pagination/pagination.component';
import { DynamicFormComponent } from 'src/app/modules/client/dynamic-form/dynamic-form.component';
import { DynamicLeftmenuComponent } from 'src/app/modules/client/dynamic-leftmenu/dynamic-leftmenu.component';
import { ProfileComponent } from 'src/app/modules/client/profile/profile.component';
import { FooterComponent } from 'src/app/modules/client/footer/footer.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AgmCoreModule } from '@agm/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatSliderModule } from '@angular/material/slider';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CountToModule } from 'angular-count-to';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { AlertModule } from 'ngx-bootstrap/alert';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ToastrModule } from 'ngx-toastr';
import { FromSectionComponent } from 'src/app/modules/client/from-section/from-section.component';
import { FromTabSectionComponent } from 'src/app/modules/client/from-tab-section/from-tab-section.component';

@NgModule({
  declarations: [
    DatatableComponent,
    HeaderComponent,
    LeftmenuComponent,
    ColumnComponent,
    PaginationComponent,
    DynamicFormComponent,
    DynamicLeftmenuComponent,  
    ProfileComponent,
    FromSectionComponent,
    FromTabSectionComponent,
    FooterComponent,],
  imports: [
    CommonModule,

    FormsModule,
    CollapseModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    AccordionModule.forRoot(),
    TooltipModule.forRoot(),
    PopoverModule.forRoot(),
    AlertModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    ProgressbarModule.forRoot(),
    CarouselModule.forRoot(),
    DragDropModule,
    MatSliderModule,
    NgApexchartsModule,
    NgMultiSelectDropDownModule.forRoot(),
    CountToModule,
    RouterModule,
    ToastrModule.forRoot({
    }),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    AgmCoreModule.forRoot({
      apiKey: 'GOOGLE_API_KEY'
    }),
    FullCalendarModule,
    CKEditorModule
  ],
  exports:[
    DatatableComponent,
    HeaderComponent,
    LeftmenuComponent,
    ColumnComponent,
    ProfileComponent,
    FooterComponent,
    PaginationComponent,
    RouterModule,
    FormsModule,
    CollapseModule,
    DynamicFormComponent,
    DynamicLeftmenuComponent,
    CollapseModule,
    ReactiveFormsModule,
    FormsModule,
    AccordionModule,
    TooltipModule,
    PopoverModule,
    AlertModule,
    BsDropdownModule,
    ModalModule,
    ProgressbarModule,
    CarouselModule,
    DragDropModule,
    MatSliderModule,
    NgApexchartsModule,
    NgMultiSelectDropDownModule,
    CountToModule,
    ToastrModule,
    CalendarModule,
    AgmCoreModule,
    FullCalendarModule,
    CKEditorModule,
    FromSectionComponent,
    FromTabSectionComponent,
    ]
})
export class SharedModule { }
