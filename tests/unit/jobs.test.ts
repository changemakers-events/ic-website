import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { formatDate } from "@/lib/jobs";

// posting_date/closing_date/published_at are timestamptz instants. The admin
// form stores the Eastern wall-clock time the staffer picked as UTC (e.g.
// "Sep 17, 11:59 PM EDT" -> 2026-09-18T03:59:00Z). formatDate must render
// that back in America/New_York -- Inspire Columbia is in Columbia, SC -- so
// the public deadline shows the day the staffer meant regardless of the
// server's own clock. Vercel functions run in UTC, which is where the
// "shows a day late" bug originally surfaced, so every test here forces the
// process into UTC to reproduce that environment.
describe("formatDate", () => {
  const realTz = process.env.TZ;

  beforeAll(() => {
    process.env.TZ = "UTC";
  });

  afterAll(() => {
    process.env.TZ = realTz;
  });

  it("renders a just-before-midnight Eastern deadline on the day it was set, not the next day", () => {
    // "Sep 17, 11:59 PM EDT" as stored by the admin form.
    expect(formatDate("2026-09-18T03:59:00.000Z")).toBe("September 17, 2026");
  });

  it("renders a 9 PM Eastern deadline (the case the reporter also hit) on the correct day", () => {
    expect(formatDate("2026-09-18T01:00:00.000Z")).toBe("September 17, 2026");
  });

  it("still renders a mid-morning Eastern time on the same day (the case that masked the bug)", () => {
    expect(formatDate("2026-09-17T13:00:00.000Z")).toBe("September 17, 2026");
  });

  it("is pinned to Eastern regardless of the ambient process timezone", () => {
    const iso = "2026-09-18T03:59:00.000Z";
    for (const tz of ["UTC", "America/New_York", "America/Los_Angeles", "Asia/Tokyo"]) {
      process.env.TZ = tz;
      expect(formatDate(iso)).toBe("September 17, 2026");
    }
    process.env.TZ = "UTC";
  });

  it("returns an empty string for a null or empty value", () => {
    expect(formatDate(null)).toBe("");
    expect(formatDate("")).toBe("");
  });
});
