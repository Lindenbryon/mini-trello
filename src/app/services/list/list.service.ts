import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private afs: AngularFirestore) { }

  createTrelloList(listName: string, boardId: string, dateAdded: any) {
    return new Promise((resolve, reject) => {
        this.afs.collection('board_items').add({
              list_name: listName,
              board_id: boardId,
              date_added: dateAdded
        }).then(() => {
          resolve();
        }).catch(() => {
          reject();
        });
    });
  }
  getTrelloLists(id: string) {
    return this.afs.collection('board_items', ref => ref.where("board_id", "==", id).orderBy('date_added')).snapshotChanges();
  }
  deleteListItem(id: string) {
    return new Promise((resolve, reject) => {
      this.afs.collection('board_items').doc(id).delete().then(() => {
        resolve();
      }).catch((error) => {
        reject(error);
      });
    });
  }
  addItemToList(id, name) {
    return new Promise((resolve, reject) => {
        this.afs.collection('board_item_children').add({
          board_id: id,
          task_name: name
        }).then(() => {
          resolve();
        }).catch((error) => {
          reject(error);
        });
    });
  }

  getListItems(id: string) {
    return this.afs.collection('board_item_children', ref => ref.where('board_id', '==', id)).snapshotChanges();
  }
  deleteListItemChild(id: string) {
      return new Promise((resolve, reject) => {
        this.afs.collection('board_item_children').doc(id).delete().then(() => {
          resolve();
        }).catch((error) => {
          reject(error);
        });
      });
  }
}
