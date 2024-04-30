<script context="module">
	import { Story, Template } from '@storybook/addon-svelte-csf';
	import ResearchButton from './ResearchButton.svelte';

	export const meta = {
		title: 'components/buttons/ResearchButton',
		component: ResearchButton,
		tags: ['autodocs']
	};
</script>

<Template let:args>
	<ResearchButton {...args} />
</Template>

<Story
	name="Default"
	args={{
		title: '1934년형 경전차',
		src: '/assets/tanks/Generic_light_tank_chassis_1.png'
	}}
/>
