import test from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";

test("SupportIQ exposes the production health contracts", () => {
  const healthRoute = "src/app/api/healthz/route.ts";
  const readyRoute = "src/app/api/readyz/route.ts";

  assert.equal(existsSync(healthRoute), true);
  assert.equal(existsSync(readyRoute), true);
  assert.match(readFileSync(healthRoute, "utf8"), /status:\s*"ok"/);
  assert.match(readFileSync(readyRoute, "utf8"), /status:\s*"ready"/);
});
