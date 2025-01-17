import { inject, Injectable } from "@angular/core";
import { Destination, Flight, Status } from "../types";
import {
  addDoc,
  collection,
  collectionData,
  DocumentData,
  Firestore,
} from "@angular/fire/firestore";
import { map, Observable, switchMap } from "rxjs";
import { doc, setDoc } from "@firebase/firestore";

@Injectable({
  providedIn: "root",
})
export class FlightsService {
  firestore: Firestore = inject(Firestore);
  private flightsData: Observable<Flight[]> = collectionData(
    collection(this.firestore, "flights")
  ).pipe(map((data) => data.map((doc: DocumentData) => doc as Flight)));

  public async addFlight(flight: Flight) {
    try {
      const flightRef = doc(collection(this.firestore, "flights"));
      flight.flight_id = flightRef.id;
      await setDoc(flightRef, flight);
    } catch (e: any) {
      alert(e.message);
    }
  }
  public async editFlight(flight: Flight) {
    try {
      const flightRef = doc(collection(this.firestore, "flights"), flight.flight_id);
      await setDoc(flightRef, flight);
    } catch (e: any) {
      alert(e.message);
    }
  }
  public get flights() {
    return this.flightsData;
  }
}
