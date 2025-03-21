<script lang="ts">
	import Notifications from '$lib/client/comp/Notifications.svelte';
	import '../app.css';
	let { children, data } = $props();
</script>

<Notifications />

<div class="flex w-[100%] flex-row bg-[var(--background-raised)] p-4 text-2xl text-center justify-between">
	{#each data.elements as item}
		<a href={item.href}>
			{#if item.svg_src != null}
				<img src={item.svg_src} alt={item.alt} />
			{/if}
			{item.text}
		</a>
	{/each}
</div>

{@render children()}
