import Link from 'next/link';
import {
  directionsUrl,
  emailHref,
  emailAddress,
  footerNavLinks,
  footerOrderLinks,
  happyHourPageHref,
  hours,
  mapsPlaceUrl,
  phoneDisplay,
  phoneHref
} from '@/lib/production-site-data';

export function SiteFooter() {
  return (
    <footer className="px-4 pb-10 pt-4 md:px-8 md:pb-12">
      <div className="mx-auto max-w-[1380px] rounded-[1.9rem] border border-white/10 bg-white/[0.03] px-5 py-8 shadow-panel backdrop-blur-sm md:px-8 md:py-10">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="mt-4 max-w-3xl text-4xl uppercase leading-[0.92] text-cream md:text-6xl">
              SUNNYSLOPE HAS A NEW RITUAL.
              <span className="block text-cyan">YOURS STARTS TONIGHT.</span>
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="section-shell p-5">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-cyan/[0.82]">
                ADDRESS
              </p>
              <Link href={mapsPlaceUrl} target="_blank" className="mt-3 block text-lg leading-7 text-cream transition duration-300 hover:text-cyan">
                9832 N 7th St, Phoenix, AZ 85020
              </Link>
            </div>
            <div className="section-shell p-5">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-cyan/[0.82]">
                PHONE
              </p>
              <Link href={phoneHref} className="mt-3 block text-lg leading-7 text-cream transition duration-300 hover:text-cyan">
                {phoneDisplay}
              </Link>
            </div>
            <div className="section-shell p-5 sm:col-span-2">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-cyan/[0.82]">
                EMAIL
              </p>
              <Link href={emailHref} className="mt-3 block text-lg leading-7 text-cream transition duration-300 hover:text-cyan">
                {emailAddress}
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-[1fr_1fr_1fr]">
          <div className="section-shell p-5">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-cyan/[0.82]">
              HOURS
            </p>
            <div className="mt-4 grid gap-2 text-sm leading-6 text-cream/[0.78] md:text-base">
              {hours.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>

          <div className="section-shell p-5">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-cyan/[0.82]">
              HAPPY HOUR
            </p>
            <p className="mt-4 text-lg leading-7 text-cream">Daily until 7pm</p>
            <Link href={happyHourPageHref} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-cyan transition duration-300 hover:translate-x-1">
              SEE DETAILS
            </Link>
          </div>

          <div className="section-shell p-5">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-cyan/[0.82]">
              ORDER
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-base leading-7 text-cream/[0.82]">
              {footerOrderLinks.map((link, index) => (
                <span key={link.label} className="inline-flex items-center gap-3">
                  <Link href={link.href} target="_blank" className="transition duration-300 hover:text-cyan">
                    {link.label}
                  </Link>
                  {index < footerOrderLinks.length - 1 ? <span className="text-cream/[0.42]">·</span> : null}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm uppercase tracking-[0.16em] text-cream/[0.72]">
            {footerNavLinks.map((link, index) => (
              <span key={link.label} className="inline-flex items-center gap-3">
                <Link
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  className="transition duration-300 hover:text-cyan"
                >
                  {link.label}
                </Link>
                {index < footerNavLinks.length - 1 ? <span className="text-cream/[0.42]">·</span> : null}
              </span>
            ))}
          </div>
        </div>

        <p className="mt-8 text-sm leading-6 text-cream/[0.6]">
          Veteran-owned. Happy hour daily until 7pm. Kitchen open all day. Three patios. No bad seats.
        </p>
      </div>
    </footer>
  );
}
