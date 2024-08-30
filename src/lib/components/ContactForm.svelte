<script lang="ts">
    import {onMount} from "svelte"
    import {state, setContactFormState} from "$lib/stores/form.store"
    import {l} from "$lib/stores/language.store"

    let load = false; 
    onMount(() => {
        setTimeout(() => {
            load = true;
        }, 50);
    })

</script>

<div class="relative mt-20 md:mt-0 p-4 w-full h-fit min-h-full flex flex-col items-center justify-center {load ? "loaded" : "notload translate-x-[100%]"} transition-all duration-300 ease-linear ">
    <button class="bb size-8 absolute top-[-3rem] md:top-4 left-4 p-2" on:click={setContactFormState().hideContactForm}><i class="fa-solid fa-arrow-left"></i></button>
    <h1 class="text-5xl font-bold mb-4">Contact Me</h1>
    <form action="https://api.web3forms.com/submit" method="POST" class="{$state.slideElements ? "translate-x-[100%] blur-sm" : ""} 
    w-full h-fit min-h-[450px] md:w-4/5 lg:w-3/5 p-4
    transition-all ease-out duration-200 
    *:w-full border-2 border-black rounded-lg flex flex-col items-center justify-start shadow-lg gap-3">
        <input type="hidden" name="access_key" value="75526bf7-12d0-4911-b91b-f98a1d296eb8">
        <div class="size-full grid grid-cols-1 min-[540px]:grid-cols-2 md:grid-cols-1 gap-3">
            <div>
                <label for="name">{$l === "EN" ? "Name" : "Nombre"}</label>
                <input type="text" name="name" placeholder="John Kiedis" maxlength="100" required minlength="3">
            </div>

            <div>
                <label for="email">{$l === "EN" ? "Email" : "Correo Electrónico"}</label>
                <input type="email" name="email" placeholder="example123@gmail.com" maxlength="100" required minlength="10">
            </div>
        </div>

        <div class="h-2/4">
            <label for="message">{$l === "EN" ? "Message" : "Mensaje"}</label>
            <input type="text" name="message" placeholder="{$l === "EN" ? "Please write your message..." : "Porfavor introduzca su mensaje..."}" maxlength="300"
            class="text-area" required minlength="12">
        </div>

        <button type="submit">{$l === "EN" ? "Send Message" : "Enviar Mensaje"}</button>
    </form>
</div>

<style lang="postcss">
    .notload {
        @apply blur-sm opacity-50;
    }

    .loaded {
        @apply blur-none relative ease-in-out opacity-100;
    }
    form label {
        @apply font-bold;
    } 

    .text-area { 
        max-height: 200px;
        max-width: 100%;
        min-height: 144px;
        min-width: 100%;
    }

    input {
        @apply w-full px-4 py-2 border-2 border-black rounded-lg bg-white text-black transition-all duration-300 ease-in-out ring-0
        focus:ring-0 focus:ring-offset-0 focus:outline-none;
        box-shadow: 5px 5px 0 0 black;
    }

    input:focus {
        border-color: black;
        box-shadow: 7px 7px 0 0 rgb(59, 59, 59);       
    }
    input:hover {
        border-color: black;
        box-shadow: 7px 7px 0 0 rgb(59, 59, 59);
    }

    button {
        @apply bg-black w-fit h-fit text-white font-bold rounded-lg
        hover:bg-slate-700 active:bg-slate-600 duration-300 transition-all ease-in-out;
    }

    form button {
        @apply px-8 py-3;
    } 
</style>