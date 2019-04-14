import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {appRoutingProviders, routing} from './app.routing';

import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {HomeComponent} from './components/home/home.component';
import {ErrorComponent} from './components/error/error.component';
import {FormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import {UserEditComponent} from './components/user-edit/user-edit.component';
import {FroalaEditorModule, FroalaViewModule} from 'angular-froala-wysiwyg';
import {AngularFileUploaderModule} from 'angular-file-uploader';
import { CategoryNewComponent } from './components/category-new/category-new.component';
import { PostNewComponent } from './components/post-new/post-new.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { PostEditComponent } from './components/post-edit/post-edit.component';
import { CategoryDetailComponent } from './components/category-detail/category-detail.component';
import {IdentityGuard} from './services/identity.guard';
import {UserService} from './services/user.service';
import { ProfileComponent } from './components/profile/profile.component';
import { PostBladeComponent } from './components/post-blade/post-blade.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ErrorComponent,
    UserEditComponent,
    CategoryNewComponent,
    PostNewComponent,
    PostDetailComponent,
    PostEditComponent,
    CategoryDetailComponent,
    ProfileComponent,
    PostBladeComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    AngularFileUploaderModule
  ],
  providers: [
    appRoutingProviders,
    IdentityGuard,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
