import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FirebaseModule } from './firebase/firebase.module';
import { AccountsModule } from './accounts/accounts.module';

@Module({
  imports: [FirebaseModule, AccountsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
