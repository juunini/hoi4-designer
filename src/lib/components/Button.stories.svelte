<script context="module">
	import { Story, Template } from '@storybook/addon-svelte-csf';
	import Button from './Button.svelte';

	export const meta = {
		title: 'components/Button',
		component: Button,
		tags: ['autodocs']
	};
</script>

<Template let:args>
	<Button {...args}>{args.children}</Button>
</Template>

<Story
	name="Default"
	args={{
		children: 'Reset'
	}}
/>
