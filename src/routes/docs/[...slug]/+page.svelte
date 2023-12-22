<script>

    import { page } from '$app/stores';
    const slugArray = $page.params.slug.split('/');



</script>

<h1>Docs Home Page</h1>

{#if slugArray.length === 1}
<h1>Viewing Docs for feature {slugArray[0]}</h1>
{:else if slugArray.length === 2}
<h1>Viewing Docks is for people that like {slugArray[0]} and docking with other gay femboys</h1>

{/if}