<script>
// @ts-nocheck

    import {page} from '$app/stores';

    const greetings = {
        es: "Hola!",
        fr: "bonjour!",
        ch: "你好!",
        en: "Hello!",
        jp: "こにちわ！"
    }

const { lang = "en" } = $page.params
const greeting = greetings[lang];
</script>

<h1>{greeting}</h1>