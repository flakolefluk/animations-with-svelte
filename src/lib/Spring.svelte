<script>
	import { spring } from 'svelte/motion';

	const number = spring(0,{
	stiffness: 0.1,
	damping: 0.08
});

function changeValueTo(newValue) {
	number.set(newValue)
}

function resetValue() {
	number.set(0, {hard:true})
}
    
</script>

<div>
	<span>{$number.toFixed(1)}</span>
	<button on:click={() => changeValueTo(10)}>To 10</button>
	<button on:click={() => changeValueTo(100)}>To 100</button>
	<button on:click={() => changeValueTo(1000)}>To 1000</button>
	<button	 on:click={() => resetValue()}>Reset</button>
</div>

<style>
	div {
		display: flex;
		flex-direction:column;
		max-width:300px;
	}
</style>