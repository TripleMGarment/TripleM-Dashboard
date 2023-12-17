import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NbAccordionModule,
  NbButtonModule,
  NbCardModule, NbDatepickerModule, NbDialogModule, NbFormFieldModule,
  NbIconModule,
  NbInputModule,
  NbMenuModule, NbSelectModule,
  NbSidebarModule, NbSpinnerModule,
  NbUserModule
} from "@nebular/theme";
import {NbEvaIconsModule} from "@nebular/eva-icons";

const modules = [
  NbSidebarModule,
  NbButtonModule,
  NbUserModule,
  NbMenuModule,
  NbCardModule,
  NbIconModule,
  NbInputModule,
  NbFormFieldModule,
  NbSpinnerModule,
  NbDialogModule,
  NbAccordionModule,
  NbDatepickerModule,
  NbSelectModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbEvaIconsModule,
    NbDialogModule.forRoot(),
    NbDatepickerModule.forRoot(),
  ],
  exports: [...modules],
})
export class NebularModule { }
