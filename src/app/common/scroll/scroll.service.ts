import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class ScrollService {
    private scrollState = new BehaviorSubject<boolean>(false);
    scroll$ = this.scrollState.asObservable();

    setScrolled(value: boolean) {
        this.scrollState.next(value);
    }
}
