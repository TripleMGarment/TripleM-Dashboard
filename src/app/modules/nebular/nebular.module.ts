import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NbSidebarModule} from "@nebular/theme";

const modules = [
  NbSidebarModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NbSidebarModule.forRoot(),
  ],
  exports: [...modules],
})
export class NebularModule { }
