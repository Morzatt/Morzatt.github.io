<script lang="ts">
    // Images Import
    import whatsappIcon from "$lib/images/whatsappIcon.webp"
    import emailIcon from "$lib/images/emailIcon.webp"
    import sendIcon from "$lib/images/sendIcon.svg"
    import avatar from "$lib/images/avatar.svg"
    import avatargif from "$lib/images/avatargif.gif"

    // Imports
    import { onMount } from "svelte";
    import {l} from "$lib/stores/language.store"
    import ContactForm from "./ContactForm.svelte";
    import {state, setContactFormState} from "$lib/stores/form.store"

    let load = false
    onMount(() => {
        setTimeout(() => {
            load = true       
        }, 1);
    })

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

    const alternativeIntroduction = {
        en: "Throughout every project, I prioritize open communication and proactive problem-solving to guarantee exceptional client satisfaction and forge strong, lasting partnerships, ultimately delivering solutions that are not just functional, but truly transformative.",
        es: "En cada proyecto, priorizo la comunicación abierta y la resolución proactiva de problemas para garantizar una satisfacción excepcional del cliente y forjar asociaciones sólidas y duraderas, entregando en última instancia soluciones que no solo son funcionales, sino verdaderamente transformadoras."
    }
</script>

<div class="size-full flex flex-col items-center md:flex-row md:justify-around overflow-hidden" id="about-me">
    <!-- LEFT SIDE / TOP SIDE-->
    <div class="flex h-full w-full md:w-2/5 justify-center items-center md:items-start ">
        <div class="size-full md:p-4 flex flex-col md:border-r-2 border-black {load ? "loaded" : "notload translate-y-[200%]"} transition-all duration-700 ease-linear">
            <div class="size-full mt-4 p-4 rounded-xl border-2 border-black  spacer slop2 text-white
            {load ? "translate-x-0" : "translate-x-[200%]"} transition-all duration-1000 ease-in-out overflow-hidden
            flex flex-col items-start justify-between">
                <div>
                    <p>{$l === "EN" ? "Hello!" : "¡Hey, hola!"}</p>
                    <br>
                    <p>{$l === "EN" ? `${alternativeIntroduction.en}` : `${alternativeIntroduction.es}`}</p>
                    <br>
                </div>

                <div class="w-full min-h-[15rem] relative">
                    <img src="{avatargif}" alt="" class="size-[14rem] md:scale-x-[1.10] lg:scale-x-100 absolute right-[-5%] bottom-[-10%]">
                </div>
            </div>
        </div>
    </div>
    <!-- RIGHT SIDE / BOTTOM SIDE --> 
    <div class="flex flex-col md:justify-center md:items-start h-full w-full md:w-3/5 {$state.slideElements ? "translate-x-[100%] blur-sm" : ""} transition-all duration-200 ease-out">
        {#if !$state.contactForm}
            <!-- INTRODUCTION -->
            <div class="md:p-2 h-fit w-full md:h-3/5 lg:p-2 mt-8 md:mt-0 md:border-b-2 border-black  {load ? "loaded" : "notload translate-y-[200%]"} transition-all duration-700 ease-linear">
                <h1 class="text-3xl font-bold text-center md:text-left">{$l === "EN" ? "Introduction" : "Presentación"}</h1>
                <div class="w-full h-fit md:h-4/6 mt-4 rounded-xl rounded-tl-none border-2 border-black bg-white p-4 pb-[8rem] md:p-6 spacer slop min-h-[14rem]">
                    <p>{$l === "EN" ? `${introduction.en}` : `${introduction.es}`}</p>
                </div>
            </div>
            <!-- GET IN TOUCH -->
            <div class="w-full md:h-2/5 md:p-2 mt-8 flex flex-col {load ? "loaded" : "notload translate-y-[-200%]"} transition-all duration-700 ease-linear ">
                <h1 class="text-3xl font-bold text-center md:text-left">{$l === "EN" ? "Get In Touch" : "Póngase en Contacto"}</h1>

                <div class="w-full md:w-fit lg:h-2/4 mt-3 grid  grid-cols-1 min-[620px]:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 px-4 md:px-0 gap-4">
                    {#each contacts as contact}
                        <div class="bg-black rounded-xl rounded-tr-none border-2 border-black">
                            <div class="rounded-xl bg-white rounded-tr-none translate-x-2 border-2 border-black h-full p-2 flex items-center justify-around
                            {load ? "" : "translate-y-[-200%]"} {contact.name === "Email" ? "duration-700" : "duration-500"} transition-all ease-linear">
                                <span class="w-1/4 h-full  flex items-center justify-center">
                                    <img src="{contact.icon}" alt="" class="size-10 md:size-12 drop-shadow-[2px_2px]">
                                </span>

                                <div class="flex items-center justify-around w-3/4 h-fit border-2 border-dashed border-black rounded-xl p-2 gap-1">
                                    <span class="w-3/4 h-full">
                                        <h1 class="sm:text-lg font-bold">{contact.name}</h1>
                                        <p class="text-sm break-words">{contact.direction}</p>
                                    </span>

                                    <span class="w-1/4 h-full flex items-center justify-center">
                                        {#if contact.name === "Email"}
                                            <button class="size-fit bg-black rounded-full p-1 hover:bg-slate-700 active:bg-slate-600 transition-all duration-200 ease-linear"
                                            on:click={setContactFormState().showContactForm}>
                                                <img src="{sendIcon}" alt="" class="size-8 drop-shadow-xl">
                                            </button>
                                        {:else} 
                                            <a class="size-fit bg-black rounded-full p-1 hover:bg-slate-700 active:bg-slate-600 transition-all duration-200 ease-linear " 
                                            href="{contact.link}" target="_blank">
                                                <img src="{sendIcon}" alt="" class="size-8 drop-shadow-xl">
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