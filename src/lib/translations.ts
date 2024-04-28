import i18n, { type Config } from 'sveltekit-i18n';

const config: Config = {
	loaders: [
		{
			locale: 'ko',
			key: 'tanks',
			loader: async () => (await import('./i18n/tanks/ko.json')).default
		},
		{
			locale: 'en',
			key: 'tanks',
			loader: async () => (await import('./i18n/tanks/en.json')).default
		}
	]
};

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);
