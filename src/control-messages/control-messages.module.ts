import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidatorService } from './validator.service';
import { ControlMessagesComponent } from './control-messages.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        ControlMessagesComponent
    ],
    providers: [
        ValidatorService
    ],
    exports: [
        ControlMessagesComponent
    ]
})
export class ControlMessagesModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: ControlMessagesModule
        }
    }
}