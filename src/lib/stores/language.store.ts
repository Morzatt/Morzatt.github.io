import { writable } from "svelte/store";

export type Languages = "EN" | "ES"
export const l = writable<Languages>("EN")

// Sets the default language of the webpage, and provides a method to change the language across the webpage
function LanguageWriter() {
    let currlan: Languages;

    l.subscribe((lan) => {
        currlan = lan
    })

    const switchLang = (lan = currlan): void => {
        switch (true) {
            case lan === "EN":
                l.set("ES")
                return
            case lan == "ES": 
                l.set("EN")
        }
    }

    const {subscribe} = l

    return {
        subscribe,
        switchLang
    }
}

export default LanguageWriter