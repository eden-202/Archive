import { inject, Injectable } from "@angular/core";
import { Destination, Flight, Status } from "../types";
import { map, Observable } from "rxjs";
import { addDoc, collection, doc, getDocs, DocumentData, setDoc } from "@firebase/firestore";
import { collectionData, Firestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: "root",
})
export class DestinationsService {
  firestore = inject(Firestore);
  destinationsData: Observable<Destination[]> = collectionData(
    collection(this.firestore, "destinations"),
    {
      idField: "id",
    }
  ).pipe(map((data) => data.map((doc: DocumentData) => doc as Destination)));


  public async addDestination(destination: Destination) {
    try {
      const destinationRef = doc(collection(this.firestore, "destinations"));
      destination.destination_id = destinationRef.id;
      await setDoc(destinationRef, destination);
    } catch (e: any) {
      alert(e.message);
    }
  }
  public async editDestination(destination: Destination) {
    try {
      const destinationRef = doc(
        collection(this.firestore, "destinations"),
        destination.destination_id
      );
      await setDoc(destinationRef, destination);
    } catch (e: any) {
      alert(e.message);
    }
  }
}
