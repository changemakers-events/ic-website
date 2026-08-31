-- Public position pages show a secondary "Join Mailing List" button next to
-- Apply (it points at the Inspire Columbia interest form on Google Forms).
-- This per-job flag lets staff hide that button for a specific posting from
-- the job editor. Defaults true so every existing job keeps showing it,
-- matching the hardcoded, always-on behavior this replaces.
alter table public.jobs
  add column show_mailing_list_button boolean not null default true;
