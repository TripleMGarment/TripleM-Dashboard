import {inject, Injectable} from '@angular/core';
import {Firestore} from '@angular/fire/firestore';
import {addDoc, collection, getDocs, query, where} from 'firebase/firestore';
import {getDownloadURL, ref, Storage, uploadBytesResumable} from "@angular/fire/storage";
import {ToastrService} from "../toastr/toastr.service";
import {ToastrConstants} from "../../constants/toastr-constants";

@Injectable({
  providedIn: 'root'
})
export class FirebaseCrudService {
  firestore: Firestore = inject(Firestore);
  private readonly storage: Storage = inject(Storage);
  constructor(private toastrService: ToastrService) { }

  createDocument(collectionName: string, data: {}) {
    const acollection = collection(this.firestore,collectionName);
    try {
      addDoc(acollection, data)
    } catch (error) {
      this.toastrService.showDangerToast(ToastrConstants.toastrFailureMessage.firebaseError);
    }
  }

  async getDocuments(collectionName: string) {
    return await getDocs(collection(this.firestore, collectionName));
  }

  async getDocumentById(collectionName: string, key: string, value: string) {
    var document: any = [];
    const q = query(collection(this.firestore, collectionName), where(key, "==", value));
    (await getDocs(q)).forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      document.push(doc.data());
    });
    return document;
  }

  async pushFileToStorage(image: File, fileName: string) {
    console.log(image);
    const storageRef = ref(this.storage, fileName);
    try {
      // Upload the file
      await uploadBytesResumable(storageRef, image);
      this.toastrService.showSuccessToast(ToastrConstants.toastrSuccessMessage.fileUpload);
      // Get the download URL after a successful upload
      return await this.getDownloadableURL(fileName);
    } catch (error) {
      this.toastrService.showDangerToast(ToastrConstants.toastrFailureMessage.fileUpload);
      return;
    }
  }

  async getDownloadableURL(fileName: any) {
    const storageRef = ref(this.storage, fileName);
    return getDownloadURL(storageRef);
  }
}
