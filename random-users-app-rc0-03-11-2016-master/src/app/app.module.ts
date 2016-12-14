import { UsersProvider } from './../providers/users-provider';
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ShowDetail } from '../pages/show-detail/show-detail';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ShowDetail
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ShowDetail
  ],
  providers: [UsersProvider]
})
export class AppModule {}
