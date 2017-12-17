import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppFormComponent } from './form';
import { AppDialogComponent } from './dialog';
import { DemoComponent } from './demo.component';
import { DraalServicesModule } from '../../services';
import { DraalDataTableModule, DraalAlertModule, DraalFormsModule,
    DraalWidgetsCoreModule, SpinnerComponent } from '../../widgets';


const ROUTES: Routes = [{
    path: '', component: DemoComponent
}];


@NgModule({
    imports: [
        NgbModule,

        DraalFormsModule,
        DraalDataTableModule,
        DraalAlertModule,
        DraalServicesModule,
        DraalWidgetsCoreModule,
        RouterModule.forChild(ROUTES)
    ],
    declarations: [
        AppFormComponent,
        AppDialogComponent,
        DemoComponent
    ],
    entryComponents: [
        DemoComponent,
        SpinnerComponent
    ]
})
export class DraalAppPagesDemoModule {}
