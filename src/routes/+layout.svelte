<script lang="ts">
	import { onMount } from 'svelte';

	import { loadTranslations } from '$lib/translations';

	function locale(): string {
		if (localStorage.getItem('locale')) {
			return localStorage.getItem('locale') as string;
		}

		const browserLocale = navigator.language || 'en';
		localStorage.setItem('locale', browserLocale.split('-')[0]);

		return browserLocale;
	}

	onMount(async () => {
		await loadTranslations(locale());
	});
</script>

<slot />
