import { inject, Injectable } from "@angular/core";
import { Booking } from "../types";
import { map, Observable } from "rxjs";
import { addDoc, collection, doc, DocumentData, setDoc } from "@firebase/firestore";
import { collectionData, Firestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: "root",
})
export class BookingsService {
  firestore = inject(Firestore);
  bookings: Observable<Booking[]> = collectionData(collection(this.firestore, "bookings")).pipe(
    map((data) => data.map((doc: DocumentData) => doc as Booking))
  );

  constructor() {}

  public async addBooking(booking: Booking) {
    try {
      const bookingRef = doc(collection(this.firestore, "bookings"));
      booking.booking_id = bookingRef.id;
      await setDoc(bookingRef, booking);
    } catch (e: any) {
      alert(e.message);
    }
  }
}
