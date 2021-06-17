import { TestBed } from '@angular/core/testing';
import { Subject } from 'rxjs';

import { AlertSettings } from './alert-settings';
import { Alert } from './alert.model';
import { AlertService } from './alert.service';

export class FakeSubject {
    next(value: any) { }
    asObservable() { }
}
describe('AlertService', () => {
    let service: AlertService;

    TestBed.configureTestingModule({
        providers: [{ provide: Subject, useClass: FakeSubject }],
    });

    beforeEach(() => {
        service = TestBed.inject(AlertService);
    });

    it('success alert ', () => {
        const spy = spyOn(service, 'alert');
        const message = 'Titre valide';
        service.success(message);
        expect(spy).toHaveBeenCalledWith(new Alert({ alertType: AlertSettings.SUCCESS, message }));
    });

    it('warn alert ', () => {
        const spy = spyOn(service, 'alert');
        const message = 'Titre non valide';
        service.warn(message);
        expect(spy).toHaveBeenCalledWith(new Alert({ alertType: AlertSettings.WARNING, message }));
    });

    it('info alert ', () => {
        const spy = spyOn(service, 'alert');
        const message = 'Titre inconnu. Les données saisies ne permettent pas d’identifier la pièce d’identité. Veuillez vérifier votre saisie.';
        service.info(message);
        expect(spy).toHaveBeenCalledWith(new Alert({ alertType: AlertSettings.INFO, message }));
    });

    it('error alert ', () => {
        const spy = spyOn(service, 'alert');
        const message = 'Erreur technique. La vérification a échoué. Une erreur technique est survenue. Veuillez ressayer plus tard ou contactez le support technique';
        service.error(message);
        expect(spy).toHaveBeenCalledWith(new Alert({ alertType: AlertSettings.ERROR, message }));
    });

    it('alert ', () => {
        // tslint:disable-next-line: no-string-literal
        // subject est private donc on contourne comme ça
        const subject = service['subject'];
        const spy = spyOn(subject, 'next');
        const alert = new Alert({ message: 'Message success', alertType: AlertSettings.SUCCESS });
        service.alert(alert);
        expect(spy).toHaveBeenCalledWith(alert);
    });

    it('clear ', () => {
        // tslint:disable-next-line: no-string-literal
        // subject est private donc on contourne comme ça
        const subject = service['subject'];
        const spy = spyOn(subject, 'next');

        service.clear();
        expect(spy).toHaveBeenCalledWith(new Alert({ id: 'default-alert' }));
    });
});
