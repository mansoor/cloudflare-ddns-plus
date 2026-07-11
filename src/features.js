// Runtime feature flags read once from the environment.

function truthy(v) {
  return /^(1|true|yes|on)$/i.test(String(v || '').trim());
}

// Opt-in support for other (non-Cloudflare) DDNS providers (DuckDNS, DynDNS2,
// FreeDNS). Off by default — this stays a Cloudflare-first tool.
// ENABLE_NON_CLOUDFLARE_DDNS is kept as a deprecated alias for back-compat.
export const DDNS_ENABLED =
  truthy(process.env.ENABLE_OTHER_DDNS) || truthy(process.env.ENABLE_NON_CLOUDFLARE_DDNS);

export const features = {
  ddns: DDNS_ENABLED,
};
