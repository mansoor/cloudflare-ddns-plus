// Runtime feature flags read once from the environment.

function truthy(v) {
  return /^(1|true|yes|on)$/i.test(String(v || '').trim());
}

// Opt-in support for non-Cloudflare DDNS providers (DuckDNS, DynDNS2). Off by
// default — this stays a Cloudflare-first tool.
export const DDNS_ENABLED = truthy(process.env.ENABLE_NON_CLOUDFLARE_DDNS);

export const features = {
  ddns: DDNS_ENABLED,
};
