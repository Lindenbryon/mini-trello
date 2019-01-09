import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private afs: AngularFirestore) { }

  createTrelloList(listName: string ){
    return new Promise((resolve, reject) => {
        this.afs.collection('board_items').add({
              list_name: listName
        }).then(() => {
          resolve();
        }).catch(() => {
          reject();
        });
    });
  }
  getTrelloLists() {
    return this.afs.collection('list_item').snapshotChanges();
  }
}
