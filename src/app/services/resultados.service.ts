import { Injectable } from '@angular/core';
import { Resultado } from '@app/models/resultados.model';

import { Observable, Subject } from 'rxjs';
import { getDatabase, ref, set } from 'firebase/database'
import { Firestore, getFirestore, collection, addDoc, getDocs, deleteDoc, doc, updateDoc, DocumentData, CollectionReference, onSnapshot, QuerySnapshot } from 'firebase/firestore'

@Injectable({
  providedIn: 'root'
})
export class ResultadosService {
  db: Firestore;
  resultados: CollectionReference<DocumentData>
  private updatedSnapshot = new Subject<QuerySnapshot<DocumentData>>();
  obsr_UpdatedSnapshot = this.updatedSnapshot.asObservable();

  constructor() {
    this.db = getFirestore();
    this.resultados = collection(this.db, 'resultados');

    // Get Realtime Data
    onSnapshot(this.resultados, (snapshot) => {
      this.updatedSnapshot.next(snapshot);
    }, (err) => {
      console.log(err);
    })
   }


   async getResultados() {
    const snapshot = await getDocs(this.resultados);
    return snapshot;
   }

   async addResultado(name: string, age: string) {
    await addDoc(this.resultados, {
      name,
      age
    })
    return;
  }


}
