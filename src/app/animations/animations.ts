import {
    trigger,
    state,
    style,
    animate,
    transition
} from '@angular/animations';

export const headerTransition = trigger('headerTransition', [
    transition('void => *', [style({ 'opacity': '1%' }), animate(200)])
])

export const mainTransition = trigger('mainTransition', [
    transition('void => *', [style({ 'transform': 'translateY(+5rem)', 'opacity': '1%' }), animate(500)])
])

export const novinkyTransition = trigger('novinkyTransition', [
    transition('* => void', [animate('1s', style({ transform: 'translateX(-100%)' }))]),
    transition("void => *", [style({
        transform: 'translateX(+100%)'
    }),
    animate('1s')])
])

export const subpage = trigger('subpage', [
    transition('void => *', [style({ 'opacity': '1%' }), animate(200)])
])

export const introFadeout = trigger('introFadeout', [
    // transition('* => void', [style({ 'opacity': '1%' }), animate(200)]),
    transition('* => void', [animate('0.2s', style({ 'opacity': '1%' }))])
])


