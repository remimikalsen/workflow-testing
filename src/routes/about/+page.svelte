<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
    let current_url = data.current_url;
</script>

<style>

</style>

<h1>About</h1>

<p>This is the about page - the the url is {current_url}</p>