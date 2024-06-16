import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { MaterialModule } from "../material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        LoginComponent,
        SignupComponent
    ],
    imports: [
        MaterialModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    exports:[LoginComponent,SignupComponent]
})
export class AuthModule {}