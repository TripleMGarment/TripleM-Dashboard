import {inject, Injectable} from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import {addDoc, collection, getDocs} from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseCrudService {
  firestore: Firestore = inject(Firestore);
  constructor() { }

  createDocument(collectionName: string, data: {}) {
    const acollection = collection(this.firestore,collectionName);
    addDoc(acollection, data)
  }

  async getDocuments(collectionName: string) {
    return await getDocs(collection(this.firestore, collectionName));
  }
}
