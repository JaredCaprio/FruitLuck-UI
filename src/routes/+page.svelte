<script>
    import { goto, beforeNavigate, afterNavigate } from "$app/navigation";  

    const handleClick =  () => {
        console.log("Placing your order!");
        goto("/products")
    }

    beforeNavigate((navigation) => {
        console.log({before: navigation})
    });
    afterNavigate((navigation) => {
        console.log({after: navigation})
    })
 </script>

<h1>Welcome Home Americans!</h1>
<p>Cock and balls, now!</p>

<a href="/blog">blog</a>
<a href="/products">Products</a>

<button on:click={handleClick}>Place Order</button>