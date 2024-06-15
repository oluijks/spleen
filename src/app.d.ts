// @see https://kit.svelte.dev/docs/types#app

import PocketBase from 'pocketbase';

declare global {
  namespace App {
    interface Locals {
      pb: PocketBase;
    }
    // interface PageData {}
    // interface Error {}
    // interface Platform {}
  }
}

declare module '*.gif' {
  const value: string;
  export = value;
}

declare module '*.jpg' {
  const value: string;
  export = value;
}

declare module '*.jpeg' {
  const value: string;
  export = value;
}

declare module '*.jpeg?enhanced' {
  const value: string;
  export = value;
}

declare module '*.png' {
  const value: string;
  export = value;
}

declare module '*.svg' {
  const value: string;
  export = value;
}

declare module '*.webp' {
  const value: string;
  export = value;
}

export {};
