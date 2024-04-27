import { Module } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Module({
  providers: [{
    provide: 'FIREBASE',
    useFactory: () => {
      const serviceAccount = require('path/to/serviceAccountKey.json');

      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
      });

      return admin.firestore();
    }
  }],
  exports: ['FIREBASE']
})
export class FirebaseModule {}
