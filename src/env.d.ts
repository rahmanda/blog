/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface Window {
  _goodshare?: {
    reNewAllInstance: () => void;
    setShareCallback: (fn: () => void) => void;
  };
  dataLayer: any[];
}
