import { writable } from "svelte/store";

export let state = writable({
    contactForm: false,
    slideElements: false
})

export function setContactFormState() {
    const showContactForm = () => {
        state.update((args) => {
            return {
                ...args,
                slideElements: true
            }
        });

        setTimeout(() => {
            state.set({
                contactForm: true,
                slideElements: false
            })
        }, 250);
    }

    const hideContactForm = () => {
        state.update((args) => {
            return {
                ...args,
                slideElements: true
            }
        });
        setTimeout(() => {
            state.set({
                contactForm: false,
                slideElements: false
            })
        }, 250);
    }

    return {
        hideContactForm,
        showContactForm,
    }
}