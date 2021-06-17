import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoaderService {
    private readonly LOADING = new BehaviorSubject<boolean>(false);
    private readonly MESSAGE = new BehaviorSubject<string>('');

    readonly loading = this.LOADING.asObservable();

    readonly message = this.MESSAGE.asObservable();

    getLoadingStatus() {
        return this.LOADING.getValue();
    }

    setLoadingStatus(val: boolean) {
        this.LOADING.next(val);
    }

    setLoaderMessage(msg: string) {
        this.MESSAGE.next(msg);
    }

    getLoaderMessage() {
        return this.MESSAGE.getValue();
    }

}