<script context="module">
	import { Story } from '@storybook/addon-svelte-csf';

	import InterWarTankDevelopment from './InterWarTankDevelopment.svelte';
	import Light1934 from './Light1934.svelte';
	import Light1936 from './Light1936.svelte';
	import Light1941 from './Light1941.svelte';
	import Medium1938 from './Medium1938.svelte';
	import Medium1940 from './Medium1940.svelte';
	import Medium1943 from './Medium1943.svelte';
	import Heavy1934 from './Heavy1934.svelte';
	import Heavy1940 from './Heavy1940.svelte';
	import Heavy1943 from './Heavy1943.svelte';
	import SuperHeavy from './SuperHeavy.svelte';
	import Modern from './Modern.svelte';
	import Amphibious from './Amphibious.svelte';

	export const meta = {
		title: 'components/ResearchButton/Tanks',
		tags: ['autodocs']
	};
</script>

<Story name="Default">
	<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
		<InterWarTankDevelopment />
		<Light1934 />
		<Light1936 />
		<Light1941 />
		<Medium1938 />
		<Medium1940 />
		<Medium1943 />
		<Heavy1934 />
		<Heavy1940 />
		<Heavy1943 />
		<SuperHeavy />
		<Modern />
		<Amphibious />
	</div>
</Story>

<Story name="inter-war">
	<InterWarTankDevelopment />
</Story>

<Story name="light 1934">
	<Light1934 />
</Story>

<Story name="light 1936">
	<Light1936 />
</Story>

<Story name="light 1941">
	<Light1941 />
</Story>

<Story name="medium 1938">
	<Medium1938 />
</Story>

<Story name="medium 1940">
	<Medium1940 />
</Story>

<Story name="medium 1943">
	<Medium1943 />
</Story>

<Story name="heavy 1934">
	<Heavy1934 />
</Story>

<Story name="heavy 1940">
	<Heavy1940 />
</Story>

<Story name="heavy 1943">
	<Heavy1943 />
</Story>

<Story name="super-heavy">
	<SuperHeavy />
</Story>

<Story name="modern">
	<Modern />
</Story>

<Story name="amphibious">
	<Amphibious />
</Story>
