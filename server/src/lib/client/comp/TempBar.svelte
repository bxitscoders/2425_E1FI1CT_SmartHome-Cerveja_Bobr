<script lang="ts">
	import { onMount } from "svelte";
	import { v4 } from "uuid";
    let {
		current_temp,
		max_temp,
		min_temp
	}: { current_temp: number; max_temp?: number; min_temp?: number } = $props();

	max_temp = max_temp ?? 100;
	min_temp = min_temp ?? -10;

    let self : HTMLElement;

    console.log(current_temp)

    let tempElement : HTMLElement;

    onMount(() => {
        if (tempElement && self) {
            const rect = tempElement.getBoundingClientRect();
            self.style.top = `${rect.top}px`;
        }
    })
</script>

<!--100% is 135deg -->
<div class="relative flex aspect-[2] items-center justify-center overflow-hidden rounded-t-full bg-blue-400">
    <div bind:this={self} class="absolute top-0 aspect-square w-full bg-gradient-to-tr from-transparent from-50% to-white to-50% transition-transform duration-500"></div>
    <div class="absolute top-1/4 flex aspect-square w-3/4 justify-center rounded-full bg-[var(--background-raised)] hover:bg-[var(--background-raised-hover])"></div>
    <div bind:this={tempElement} class="absolute bottom-0 w-full truncate text-center text-[20px] leading-none">{current_temp}°C</div>
</div>