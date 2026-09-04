import Image from "next/image";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";

const moments = [
  { src: "/pictures/tedx-organizers-on-stage.jpg", alt: "Three TEDxCongaree Vista organizers standing on stage in front of the event's title screen" },
  { src: "/pictures/tedx-speaker-solo-stage.jpg", alt: "A speaker addressing the audience from the TEDxCongaree Vista stage" },
  { src: "/pictures/tedx-team-on-stage-speaking.jpg", alt: "Inspire Columbia team members on stage, one speaking into a microphone" },
  { src: "/pictures/community-program-group-cityhall.jpg", alt: "Students posing together on the steps of Columbia City Hall during an Inspire Columbia summer program" },
  { src: "/pictures/community-program-workshop-session.jpg", alt: "A program leader speaking to a small group of students during a workshop session" },
  { src: "/pictures/community-program-cityhall-welcome.jpg", alt: "A speaker welcoming students inside a Columbia City Hall meeting room" },
  { src: "/pictures/community-program-usc-group-photo.jpg", alt: "Students posing for a group photo inside a University of South Carolina meeting room" },
  { src: "/pictures/community-program-presentation.jpg", alt: "Inspire Columbia leaders presenting to a room of students" },
  { src: "/pictures/community-program-certificates.jpg", alt: "Students holding up certificates of completion" },
];

export default function Home() {
  return (
    <>
      <SiteHeader currentPath="/" />
      <main className="text-[var(--ink)]">
        <section className="relative flex min-h-[88vh] w-full items-center overflow-hidden">
          <Image
            src="/pictures/tedx-team-lineup-stage.jpg"
            alt="The full Inspire Columbia team standing together on stage at TEDxCongaree Vista"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,14,26,0.85)] via-[rgba(10,14,26,0.45)] to-[rgba(10,14,26,0.35)]" />

          <div className="relative z-10 mx-auto w-full max-w-[1100px] px-6 py-24 md:px-8">
            <h1 className="m-0 max-w-[20ch] [font-family:var(--font-serif)] text-[clamp(2.4rem,6vw,5rem)] font-bold leading-[1.05] text-white">
              Events and opportunities that inspire positive change.
            </h1>
            <p className="mt-6 mb-8 max-w-[60ch] text-[clamp(1.05rem,2.2vw,1.35rem)] text-white/85">
              Inspire Columbia (formerly known as ChangeMakers Events) is a 501(c)(3) nonprofit that connects students, families, and
              local leaders through meaningful programs in Columbia, South Carolina.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#events"
                className="inline-block rounded-full bg-[var(--brand)] px-7 py-3.5 font-bold text-white no-underline transition-colors duration-150 hover:bg-[var(--brand-hover)]"
              >
                Explore Events
              </a>
              <a
                href="/leadership"
                className="inline-block rounded-full border border-white/40 bg-white/10 px-7 py-3.5 font-bold text-white no-underline backdrop-blur-sm transition-colors duration-150 hover:bg-white/20"
              >
                Meet the Team
              </a>
            </div>
          </div>

        </section>

        <section className="bg-[var(--surface-blue)] py-13 md:py-16" id="events">
          <div className="mx-auto w-full max-w-[1100px] px-6 md:px-8">
            <h2 className="mb-4 mt-0 [font-family:var(--font-serif)] text-[clamp(1.55rem,3vw,2.3rem)] font-semibold">
              Events We Support
            </h2>
            <p className="mb-5 text-[1.15rem]">
              We are youth-powered and forward focused, bringing together the next generation of students and community leaders
              who work tirelessly to highlight the changemakers of Columbia that are building the future today. Our team dedicates time, energy,
              and creativity to build platforms that bring people together through the power of change.
            </p>
            <p className="mb-8 text-[1.15rem]">
              We partner with volunteers, educators, and local organizations to produce events that
              are accessible, informative, and action-oriented for attendees of all ages.
              Funds raised through sponsorships and ticket sales stay right here in the local community, helping cover essential
              costs like printing, signage, promotion, audio/visual needs, food, and venue expenses for our educational events.
            </p>
            <div className="mt-6 border-t border-[var(--line)] pt-6">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="flex h-full flex-col gap-3 rounded-[10px] border border-[var(--line)] bg-[var(--card-public)] p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="m-0 text-[1.05rem] font-bold text-[var(--ink)] [font-family:var(--font-serif)]">
                        TEDxCongaree Vista
                      </p>
                      <p className="m-0 mt-1 text-[0.9rem] text-[var(--ink-muted)]">March 14th, 2026</p>
                    </div>
                    <Image
                      src="/tedxcv.png"
                      alt="TEDxCongaree Vista logo"
                      width={1400}
                      height={504}
                      className="h-15 w-auto shrink-0 object-contain object-right"
                    />
                  </div>
                  <p className="m-0 text-[0.98rem]">
                    TEDxCongaree Vista is an independently organized TEDx event, and was the
                    first standard TEDx event in Columbia in over 10 years.
                  </p>
                  <a
                    className="mt-auto inline-block self-start rounded-full border-2 border-[var(--brand)] bg-[var(--card-public)] px-5 py-2.5 font-bold text-[var(--brand)] no-underline transition-colors duration-150 hover:bg-[var(--brand)] hover:text-white"
                    href="https://tedxcongareevista.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Event Website
                  </a>
                </div>
                <div className="flex h-full flex-col gap-3 rounded-[10px] border border-[var(--line)] bg-[var(--card-public)] p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="m-0 text-[1.05rem] font-bold text-[var(--ink)] [font-family:var(--font-serif)]">
                        ScrewUp Nights
                      </p>
                      <p className="m-0 mt-1 text-[0.9rem] text-[var(--ink-muted)]">September 2nd, 2026</p>
                    </div>
                    <Image
                      src="/screwupnights-logo.png"
                      alt="ScrewUp Nights logo"
                      width={757}
                      height={592}
                      className="h-20 w-auto shrink-0 object-contain object-right"
                    />
                  </div>
                  <p className="m-0 text-[0.98rem]">
                    ScrewUp Nights is a new Inspire Columbia project celebrating the stories
                    behind setbacks, bringing the community together to share and learn from
                    the moments that didn&apos;t go as planned.
                  </p>
                  <a
                    className="mt-auto inline-block self-start rounded-full border-2 border-[var(--brand)] bg-[var(--card-public)] px-5 py-2.5 font-bold text-[var(--brand)] no-underline transition-colors duration-150 hover:bg-[var(--brand)] hover:text-white"
                    href="https://www.screwupnights.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Event Website
                  </a>
                </div>
              </div>

              <h3 className="mb-4 mt-10 [font-family:var(--font-serif)] text-[1.3rem] font-semibold">
                Partnered Events
              </h3>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="flex h-full flex-col gap-3 rounded-[10px] border border-[var(--line)] bg-[var(--card-public)] p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="m-0 text-[1.05rem] font-bold text-[var(--ink)] [font-family:var(--font-serif)]">
                        Cola Cafe Fest
                      </p>
                      <p className="m-0 mt-1 text-[0.9rem] text-[var(--ink-muted)]">September 27th, 2026</p>
                    </div>
                    <Image
                      src="/event_logos/cola_cafe_fest_26.png"
                      alt="Cola Cafe Fest logo"
                      width={170}
                      height={169}
                      className="h-25 w-auto shrink-0 rounded-full object-cover"
                    />
                  </div>
                  <p className="m-0 text-[0.98rem]">
                    Cola Cafe Fest is a celebration of Columbia&apos;s local coffee culture,
                    bringing together cafes, roasters, and coffee lovers from across the community.
                  </p>
                  <a
                    className="mt-auto inline-block self-start rounded-full border-2 border-[var(--brand)] bg-[var(--card-public)] px-5 py-2.5 font-bold text-[var(--brand)] no-underline transition-colors duration-150 hover:bg-[var(--brand)] hover:text-white"
                    href="https://colacafefest.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Event Website
                  </a>
                </div>
                <div className="flex h-full flex-col gap-3 rounded-[10px] border border-[var(--line)] bg-[var(--card-public)] p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="m-0 text-[1.05rem] font-bold text-[var(--ink)] [font-family:var(--font-serif)]">
                        Columbia Italian Festival
                      </p>
                      <p className="m-0 mt-1 text-[0.9rem] text-[var(--ink-muted)]">October 10th, 2026</p>
                    </div>
                    <Image
                      src="/event_logos/italian_festival_26.jpeg"
                      alt="Columbia Italian Festival logo"
                      width={504}
                      height={502}
                      className="h-25 w-auto shrink-0 rounded-full object-cover"
                    />
                  </div>
                  <p className="m-0 text-[0.98rem]">
                    The Columbia Italian Festival celebrates Italian heritage, food, and culture
                    with live entertainment, vendors, and family-friendly activities in the heart
                    of Columbia.
                  </p>
                  <a
                    className="mt-auto inline-block self-start rounded-full border-2 border-[var(--brand)] bg-[var(--card-public)] px-5 py-2.5 font-bold text-[var(--brand)] no-underline transition-colors duration-150 hover:bg-[var(--brand)] hover:text-white"
                    href="https://italianfestivalcolumbia.weebly.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Event Website
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>



        <section className="bg-[var(--ink)] py-14 md:py-16">
          <div className="mx-auto w-full max-w-[1100px] px-6 md:px-8">
            <h2 className="mb-2 mt-0 [font-family:var(--font-serif)] text-[clamp(1.55rem,3vw,2.3rem)] font-semibold text-white">
              Moments From Our Programs
            </h2>
            <p className="mb-8 max-w-[60ch] text-[1.05rem] text-white/70">
              Scenes from student leadership programming across Columbia that we&apos;ve supported.
            </p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-3">
              {moments.map((photo) => (
                <div
                  key={photo.src}
                  className="group aspect-square overflow-hidden rounded-[10px]"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={800}
                    height={800}
                    className="block h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="bg-[var(--surface-blue-strong)] py-13 md:py-16">
          <div className="mx-auto w-full max-w-[1100px] px-6 md:px-8">
            <h2 className="mb-4 mt-0 [font-family:var(--font-serif)] text-[clamp(1.55rem,3vw,2.3rem)] font-semibold">
              Get Involved
            </h2>
            <p className="mb-8 max-w-[65ch] text-[1.15rem]">
              We&apos;re preparing our next recruitment cycle for associates who want to build valuable leadership skills,
              support community outreach, and contribute to our mission-driven programming. See our open roles to learn
              more and apply.
            </p>
            <Link
              href="/positions"
              className="inline-block rounded-full bg-[var(--brand)] px-7 py-3.5 font-bold text-white no-underline transition-colors duration-150 hover:bg-[var(--brand-hover)]"
            >
              View Open Roles
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
