import { writable } from 'svelte/store';

export const url = writable('https://m.youtube.com');
export const webview = writable({});