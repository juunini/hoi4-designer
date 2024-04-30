import type { Preview } from '@storybook/svelte';

import { loadTranslations } from '../src/lib/translations';
import DocumentationTemplate from './DocumentationTemplate.mdx';

function locale(): string {
	if (localStorage.getItem('locale')) {
		return localStorage.getItem('locale') as string;
	}

	const browserLocale = navigator.language || 'en';
	localStorage.setItem('locale', browserLocale.split('-')[0]);

	return browserLocale;
}

await loadTranslations(locale());

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		},
		docs: {
			page: DocumentationTemplate
		}
	}
};

export default preview;
