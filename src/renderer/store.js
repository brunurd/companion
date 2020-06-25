import { writable } from 'svelte/store';

export const url = writable(localStorage.getItem('url') ||
  'https://m.youtube.com');
export const webview = writable({});
