<script context="module">
	import { Story, Template } from '@storybook/addon-svelte-csf';
	import InterWarTankDevelopment from './InterWarTankDevelopment.svelte';

	export const meta = {
		title: 'components/ResearchButton/tanks/InterWarTankDevelopment',
		component: InterWarTankDevelopment,
		tags: ['autodocs']
	};
</script>

<Template let:args>
	<InterWarTankDevelopment {...args} />
</Template>

<Story name="Default" />
