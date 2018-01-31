import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { AdminComponent } from './admin.component';


@NgModule({
    imports: [CommonModule, FormsModule, RouterModule.forChild([
        {path: "auth", component: AuthComponent },
        {path: "main", component: AdminComponent },
        {path: "**", redirectTo: "auth"}
    ]) ],
    declarations: [AuthComponent, AdminComponent]
})
export class AdminModule { }