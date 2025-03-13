
import { Routes } from "@angular/router";
import { JobPositionComponent } from "./feature/job-position/job-position.component";
import { WorkManagementComponent } from "./feature/work-management/work-management.component";

export const workManagementRoutes: Routes = [
    {
        path: '',
        component: WorkManagementComponent
    },
    {
        path: 'position',
        component: JobPositionComponent
    }
];