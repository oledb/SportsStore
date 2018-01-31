import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { AdminComponent } from './admin.component';
import { AuthGuard } from './auth.guard';


@NgModule({
    imports: [CommonModule, FormsModule, RouterModule.forChild([
        {path: "auth", component: AuthComponent },
        {path: "main", component: AdminComponent, 
            canActivate: [AuthGuard] },
        {path: "**", redirectTo: "auth"}
    ]) ],
    providers: [AuthGuard],
    declarations: [AuthComponent, AdminComponent]
})
export class AdminModule { }