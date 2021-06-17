import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { AlertSettings } from './alert-settings';
import { AlertComponent } from './alert.component';
import { Alert } from './alert.model';
import { AlertService } from './alert.service';

describe('alert component', () => {
    let component: AlertComponent;
    let fixture: ComponentFixture<AlertComponent>;
    const mockAlertService = jasmine.createSpyObj(['onAlert']);

    // window.getComputedStyle(Element).getPropertyValue('background-color')
    // Retourne du rgb donc il faut la convertir en Hexa
    const rgb2hex = (rgb) => {
        rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
        function hex(x) {
            return ("0" + parseInt(x).toString(16)).slice(-2);
        }
        return ("#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3])).toLowerCase();
    }
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [AlertComponent],
            providers: [
                AlertService,
                { provide: AlertService, useValue: mockAlertService },
            ],
            imports: [RouterTestingModule]
        });
        fixture = TestBed.createComponent(AlertComponent);
        component = fixture.componentInstance;
    }));

    it('doit afficher une alert', () => {
        mockAlertService.onAlert.and.returnValue(of(new Alert({ alertType: AlertSettings.SUCCESS, message: 'message' })));
        fixture.detectChanges();

        const alerts = fixture.debugElement.query(By.css('.alerts'));
        expect(alerts.children.length).toBe(1);
    });

    it('l alerte doit être verte', () => {
        mockAlertService.onAlert.and.returnValue(of(new Alert({ alertType: AlertSettings.SUCCESS, message: 'message' })));
        fixture.detectChanges();

        const alerts = fixture.debugElement.query(By.css('.alerts'));
        expect(
            rgb2hex(window.getComputedStyle(alerts.children[0].nativeElement).getPropertyValue('background-color')))
            .toBe('#06570a'.toLowerCase())
    });

    it('l alerte doit être rouge', () => {
        mockAlertService.onAlert.and.returnValue(of(new Alert({ alertType: AlertSettings.ERROR, message: 'message' })));
        fixture.detectChanges();

        const alerts = fixture.debugElement.query(By.css('.alerts'));
        expect(
            rgb2hex(window.getComputedStyle(alerts.children[0].nativeElement).getPropertyValue('background-color')))
            .toBe('#F64E60'.toLowerCase())
    });

    it('l alerte doit être jaune', () => {
        mockAlertService.onAlert.and.returnValue(of(new Alert({ alertType: AlertSettings.WARNING, message: 'message' })));
        fixture.detectChanges();

        const alerts = fixture.debugElement.query(By.css('.alerts'));
        expect(
            rgb2hex(window.getComputedStyle(alerts.children[0].nativeElement).getPropertyValue('background-color')))
            .toBe('#FFA800'.toLowerCase())
    });

    it('l alerte doit être violet', () => {
        mockAlertService.onAlert.and.returnValue(of(new Alert({ alertType: AlertSettings.INFO, message: 'message' })));
        fixture.detectChanges();

        const alerts = fixture.debugElement.query(By.css('.alerts'));
        expect(
            rgb2hex(window.getComputedStyle(alerts.children[0].nativeElement).getPropertyValue('background-color')))
            .toBe('#8950FC'.toLowerCase())
    });
});
