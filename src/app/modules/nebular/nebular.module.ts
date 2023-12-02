import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NbButtonModule, NbCardModule, NbIconModule, NbMenuModule, NbSidebarModule, NbUserModule} from "@nebular/theme";
import {NbEvaIconsModule} from "@nebular/eva-icons";

const modules = [
  NbSidebarModule,
  NbButtonModule,
  NbUserModule,
  NbMenuModule,
  NbCardModule,
  NbIconModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbEvaIconsModule
  ],
  exports: [...modules],
})
export class NebularModule { }
