import { Injectable, Inject } from '@nestjs/common';
import * as admin from 'firebase-admin'; 
import { Firestore } from '@google-cloud/firestore';

@Injectable()
export class AccountsService {
  constructor(@Inject('FIREBASE') private firestore: Firestore) {}

  async addBalance(userId: string, amount: number) {
    const userRef = this.firestore.collection('users').doc(userId);
    await userRef.update({ balance: admin.firestore.FieldValue.increment(amount) });
  }
}
