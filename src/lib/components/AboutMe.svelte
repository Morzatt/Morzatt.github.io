<script lang="ts">
    // Images Import
    import whatsappIcon from "$lib/images/whatsappIcon.webp"
    import emailIcon from "$lib/images/emailIcon.webp"
    import sendIcon from "$lib/images/sendIcon.svg"

    // Imports
    import { onMount } from "svelte";
    import {l} from "$lib/stores/language.store"
    import ContactForm from "./ContactForm.svelte";

    let load = false
    onMount(() => {
        setTimeout(() => {
            load = true       
        }, 1);
    })
    let contactForm = false
    let slideElements = false
    function showContactForm() {
        slideElements = true;
        setTimeout(() => {
            slideElements = false
            contactForm = true        
        }, 250); 
    }

    type Contacts = {
        name: string,
        icon: string,
        link: string,
        direction: string,
    }

    const contacts: Contacts[] = [
        {
            name: "WhatsApp",
            icon: whatsappIcon,
            link: "https://web.whatsapp.com/",
            direction: "@crtgdev"
        },
        {
            name: "Email",
            icon: emailIcon, 
            link: "/#contact",
            direction: "tineocarlos2606@gmail.com"
        }
    ]

    const introduction = {
        en: `I'm a Software Developer with a strong passion for building good, reliable and strong pieces of software. Always interested in getting involved with brand-new technologies and opportunities that allow me to grow as a professional.`,
        es: `Soy un Desarrollador de Software con una fuerte pasión por construir piezas de software de calidad, fuertes y fiables. Siempre interesado en involucrarme con nuevas tecnologías y oportunidades que me permitan desarrollarme y crecer como profesional.`
    }
</script>

<div class="size-full flex flex-col items-center md:flex-row md:justify-around overflow-hidden">
    <!-- LEFT SIDE / TOP SIDE-->
    <div class="flex h-full w-full md:w-2/5 justify-center items-center md:items-start ">
        <div class="size-full md:p-4 p-2 flex flex-col md:border-r-2 border-black {load ? "loaded" : "notload translate-y-[200%]"} transition-all duration-700 ease-linear">
            <div class="size-full mt-4 p-4 md:py-20 lg:py-4 rounded-xl border-2 border-black  spacer slop2 text-white
            {load ? "translate-x-0" : "translate-x-[200%]"}  transition-all duration-1000 ease-in-out">
                <p>{$l === "EN" ? "Hello!" : "¡Hey, hola!"}</p>
                <br>
                <p>{$l === "EN" ? `${introduction.en}` : `${introduction.es}`}</p>
            </div>
        </div>
    </div>
    <!-- RIGHT SIDE / BOTTOM SIDE --> 
    <div class="flex flex-col md:justify-center md:items-start h-full w-full md:w-3/5 {slideElements ? "translate-x-[100%] blur-sm" : ""} transition-all duration-200 ease-out">
        {#if !contactForm}
            <!-- INTRODUCTION -->
            <div class="h-fit w-full md:h-3/5 p-2 md:border-b-2 border-black  {load ? "loaded" : "notload translate-y-[200%]"} transition-all duration-700 ease-linear">
                <h1 class="text-3xl font-bold text-center md:text-left">{$l === "EN" ? "Introduction" : "Presentación"}</h1>
                <div class="w-full h-fit md:h-4/6 mt-4 rounded-xl rounded-tl-none border-2 border-black bg-white md:p-6 p-4 spacer slop">
                    <p>{$l === "EN" ? `${introduction.en}` : `${introduction.es}`}</p>
                </div>
            </div>
            <!-- GET IN TOUCH -->
            <div class="w-full md:h-2/5 p-2 flex flex-col {load ? "loaded" : "notload translate-y-[-200%]"} transition-all duration-700 ease-linear ">
                <h1 class="text-3xl font-bold text-center md:text-left">{$l === "EN" ? "Get In Touch" : "Póngase en Contacto"}</h1>

                <div class="w-full md:w-fit lg:h-2/4 mt-3 grid  grid-cols-1 min-[620px]:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 px-4 md:px-0 gap-4">
                    {#each contacts as contact}
                        <div class="bg-black rounded-xl rounded-tr-none border-2 border-black">
                            <div class="rounded-xl bg-white rounded-tr-none translate-x-2 border-2 border-black h-full p-2 flex items-center justify-around
                            {load ? "" : "translate-y-[-200%]"} {contact.name === "Email" ? "duration-700" : "duration-500"} transition-all ease-linear">
                                <span class="w-1/4 h-full  flex items-center justify-center">
                                    <img src="{contact.icon}" alt="" class="size-10 md:size-12">
                                </span>

                                <div class="flex items-center justify-around w-3/4 h-fit border-2 border-dashed border-black rounded-xl p-2 gap-1">
                                    <span class="w-3/4 h-full">
                                        <h1 class="sm:text-lg font-bold">{contact.name}</h1>
                                        <p class="text-sm break-words">{contact.direction}</p>
                                    </span>

                                    <span class="w-1/4 h-full flex items-center justify-center">
                                        {#if contact.name === "Email"}
                                            <button class="size-fit bg-black rounded-full p-1 hover:bg-slate-700 active:bg-slate-600 transition-all duration-200 ease-linear"
                                            on:click={showContactForm}>
                                                <img src="{sendIcon}" alt="" class="size-8">
                                            </button>
                                        {:else} 
                                            <a class="size-fit bg-black rounded-full p-1 hover:bg-slate-700 active:bg-slate-600 transition-all duration-200 ease-linear" 
                                            href="{contact.link}" target="_blank">
                                                <img src="{sendIcon}" alt="" class="size-8">
                                            </a>
                                        {/if}
                                    </span>
                                </div>
                            </div>
                        </div>
                    {/each}
                </div>
            </div>           
        {:else}
            <ContactForm/>
        {/if}
    </div>
</div>

<style lang="postcss">
    .notload {
        @apply blur-sm opacity-50;
    }

    .loaded {
        @apply blur-none relative ease-in-out opacity-100;
    }
    .slop2 {
        background-image: url("../images/blob-scene-haikei.svg");
    } 
    .slop {
        background-image: url("../images/layered-waves-haikei.svg");
    } 
    .spacer {
        @apply bg-no-repeat bg-center bg-cover;
    }
</style>