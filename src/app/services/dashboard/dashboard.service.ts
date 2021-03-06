import { Injectable, Component, OnInit, Input } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private afs: AngularFirestore) {

  }
  addBoard(name: string){
    return new Promise((resolve, reject) => {
      this.afs.collection('boards').add({
            name: name
      }).then(() =>{
        resolve();
      }).catch((error) => {
        reject(error);
      });

    });

  }
  getBoards(){
      return this.afs.collection('boards').snapshotChanges();
  }
  deleteBoard(id: string){
    return new Promise((resolve, reject) => {
        this.afs.collection('boards').doc(id).delete().then(() => {
          resolve();
        }).catch((error) => {
          reject(error);
        });
    });
  }
}
