import type { LangKey } from '@/types/product';

export function normalizeLang(lang?: string): LangKey {
  const lc = (lang || 'fr').toLowerCase();
  if (lc.startsWith('fr')) return 'fr';
  if (lc.startsWith('en')) return 'en';
  if (lc.startsWith('sq')) return 'sq';
  return 'fr';
}

function localeFor(lang: LangKey): string {
  switch (lang) {
    case 'fr': return 'fr-FR';
    case 'en': return 'en-GB'; // format € en anglais
    case 'sq': return 'sq-AL';
  }
}

export function formatPriceEUR(amount: number, lang: LangKey): string {
  return new Intl.NumberFormat(localeFor(lang), {
    style: 'currency',
    currency: 'EUR',
    currencyDisplay: 'symbol',
    maximumFractionDigits: 0,
  }).format(amount);
}
