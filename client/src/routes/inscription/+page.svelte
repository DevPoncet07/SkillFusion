<script>
    import Register from '$lib/assets/components/Auth/componantRegister.svelte';
    import { browser } from "$app/environment";

    function nav_back() {
    if (browser) window.history.back();
}
</script>

<svelte:head>
    <title>Inscription</title>
</svelte:head>
<button onclick={nav_back}>{'<-retour'} </button>

<Register />
