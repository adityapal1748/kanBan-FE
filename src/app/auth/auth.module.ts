import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { MaterialModule } from "../material.module";

@NgModule({
    declarations: [
        LoginComponent,
        SignupComponent
    ],
    imports: [
        MaterialModule
    ],
    providers: [],
    exports:[LoginComponent,SignupComponent]
})
export class AuthModule {}