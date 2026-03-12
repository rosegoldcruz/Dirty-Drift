'use client';

import type { ChangeEvent } from 'react';
import { useMemo, useState } from 'react';
import { reservationsEmail, reservationsEmailHref, siteUrl } from '@/lib/production-site-data';

const FORM_ENDPOINT = 'https://formsubmit.co/el/tujano';
const THANK_YOU_PATH = '/private-bookings/thank-you';

type FormState = {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  eventType: string;
  notes: string;
};

const initialState: FormState = {
  name: '',
  email: '',
  phone: '',
  date: '',
  time: '',
  guests: '',
  eventType: '',
  notes: ''
};

export function BookingForm() {
  const [formState, setFormState] = useState<FormState>(initialState);

  const subject = useMemo(() => {
    const name = formState.name.trim() || 'Guest';
    return `[PRIVATE EVENT] [DRIFTWOODS] ${name}`;
  }, [formState.name]);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormState((current) => ({ ...current, [name]: value }));
  };

  return (
    <form
      action={FORM_ENDPOINT}
      method="POST"
      className="section-shell p-5 md:p-6"
    >
      <input type="hidden" name="_subject" value={subject} />
      <input type="hidden" name="_next" value={`${siteUrl}${THANK_YOU_PATH}`} />
      <input type="hidden" name="_template" value="table" />
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" />
      <input type="hidden" name="_replyto" value={formState.email} />
      <input type="hidden" name="tag" value="PRIVATE_EVENT" />
      <input type="hidden" name="brand" value="DRIFTWOODS" />

      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="eyebrow">Reservation intake</p>
          <h3 className="mt-4 text-3xl uppercase leading-[0.94] text-cream md:text-4xl">
            PLAN YOUR EVENT.
            <span className="block text-cyan">RESERVE YOUR GAME DAY.</span>
          </h3>
          <p className="mt-4 max-w-md text-base leading-7 text-cream/[0.72]">
            This page is built to be the central booking hub. Fill this out and send it straight to {reservationsEmail}.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="grid gap-2 text-sm uppercase tracking-[0.14em] text-cream/[0.72]">
            Name
            <input
              id="booking-name"
              name="name"
              value={formState.name}
              onChange={handleChange}
              required
              className="rounded-[1rem] border border-white/[0.12] bg-white/[0.04] px-4 py-3 text-base normal-case tracking-normal text-cream outline-none transition duration-300 focus:border-cyan/[0.45]"
            />
          </label>
          <label className="grid gap-2 text-sm uppercase tracking-[0.14em] text-cream/[0.72]">
            Email
            <input
              id="booking-email"
              name="email"
              type="email"
              value={formState.email}
              onChange={handleChange}
              required
              className="rounded-[1rem] border border-white/[0.12] bg-white/[0.04] px-4 py-3 text-base normal-case tracking-normal text-cream outline-none transition duration-300 focus:border-cyan/[0.45]"
            />
          </label>
          <label className="grid gap-2 text-sm uppercase tracking-[0.14em] text-cream/[0.72]">
            Phone
            <input
              id="booking-phone"
              name="phone"
              value={formState.phone}
              onChange={handleChange}
              required
              className="rounded-[1rem] border border-white/[0.12] bg-white/[0.04] px-4 py-3 text-base normal-case tracking-normal text-cream outline-none transition duration-300 focus:border-cyan/[0.45]"
            />
          </label>
          <label className="grid gap-2 text-sm uppercase tracking-[0.14em] text-cream/[0.72]">
            Event Type
            <select
              id="booking-event-type"
              name="eventType"
              value={formState.eventType}
              onChange={handleChange}
              required
              className="rounded-[1rem] border border-white/[0.12] bg-[#0b1520] px-4 py-3 text-base normal-case tracking-normal text-cream outline-none transition duration-300 focus:border-cyan/[0.45]"
            >
              <option value="">Choose one</option>
              <option value="Game Day Reservation">Game Day Reservation</option>
              <option value="Birthday">Birthday</option>
              <option value="Work Event">Work Event</option>
              <option value="Watch Party">Watch Party</option>
              <option value="Private Event">Private Event</option>
            </select>
          </label>
          <label className="grid gap-2 text-sm uppercase tracking-[0.14em] text-cream/[0.72]">
            Preferred Date
            <input
              id="booking-date"
              name="date"
              type="date"
              value={formState.date}
              onChange={handleChange}
              required
              className="rounded-[1rem] border border-white/[0.12] bg-white/[0.04] px-4 py-3 text-base normal-case tracking-normal text-cream outline-none transition duration-300 focus:border-cyan/[0.45]"
            />
          </label>
          <label className="grid gap-2 text-sm uppercase tracking-[0.14em] text-cream/[0.72]">
            Preferred Time
            <input
              id="booking-time"
              name="time"
              type="time"
              value={formState.time}
              onChange={handleChange}
              required
              className="rounded-[1rem] border border-white/[0.12] bg-white/[0.04] px-4 py-3 text-base normal-case tracking-normal text-cream outline-none transition duration-300 focus:border-cyan/[0.45]"
            />
          </label>
          <label className="grid gap-2 text-sm uppercase tracking-[0.14em] text-cream/[0.72] sm:col-span-2">
            Guest Count
            <input
              id="booking-guests"
              name="guests"
              value={formState.guests}
              onChange={handleChange}
              required
              className="rounded-[1rem] border border-white/[0.12] bg-white/[0.04] px-4 py-3 text-base normal-case tracking-normal text-cream outline-none transition duration-300 focus:border-cyan/[0.45]"
            />
          </label>
          <label className="grid gap-2 text-sm uppercase tracking-[0.14em] text-cream/[0.72] sm:col-span-2">
            Notes
            <textarea
              id="booking-notes"
              name="notes"
              value={formState.notes}
              onChange={handleChange}
              rows={5}
              className="rounded-[1rem] border border-white/[0.12] bg-white/[0.04] px-4 py-3 text-base normal-case tracking-normal text-cream outline-none transition duration-300 focus:border-cyan/[0.45]"
            />
          </label>
          <div className="sm:col-span-2 flex flex-col gap-3 sm:flex-row">
            <button type="submit" className="cta-primary text-center">
              SEND REQUEST →
            </button>
            <a href={reservationsEmailHref} className="cta-secondary text-center">
              EMAIL MICHAEL →
            </a>
          </div>
        </div>
      </div>
    </form>
  );
}
