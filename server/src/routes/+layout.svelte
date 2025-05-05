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

<style>
	a {
  position: relative;
  text-decoration: none;
  color: var(--text-primary); 
}

a::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: var(--text-primary);
  transform: scaleX(0);
  transform-origin: bottom left;
  transition: transform 0.3s ease-out;
}

a:hover::after {
  transform: scaleX(1);
}
</style>