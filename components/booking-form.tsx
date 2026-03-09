'use client';

import type { ChangeEvent } from 'react';
import { useMemo, useState } from 'react';
import { reservationsEmail, reservationsEmailHref } from '@/lib/production-site-data';

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

  const mailtoHref = useMemo(() => {
    const subject = `Driftwoods Booking Request - ${formState.eventType || 'Reservation Inquiry'}`;
    const body = [
      `Name: ${formState.name}`,
      `Email: ${formState.email}`,
      `Phone: ${formState.phone}`,
      `Preferred Date: ${formState.date}`,
      `Preferred Time: ${formState.time}`,
      `Guest Count: ${formState.guests}`,
      `Event Type: ${formState.eventType}`,
      '',
      'Notes:',
      formState.notes || 'N/A'
    ].join('\n');

    return `${reservationsEmailHref}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [formState]);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormState((current) => ({ ...current, [name]: value }));
  };

  return (
    <div className="section-shell p-5 md:p-6">
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
              name="name"
              value={formState.name}
              onChange={handleChange}
              className="rounded-[1rem] border border-white/[0.12] bg-white/[0.04] px-4 py-3 text-base normal-case tracking-normal text-cream outline-none transition duration-300 focus:border-cyan/[0.45]"
            />
          </label>
          <label className="grid gap-2 text-sm uppercase tracking-[0.14em] text-cream/[0.72]">
            Email
            <input
              name="email"
              type="email"
              value={formState.email}
              onChange={handleChange}
              className="rounded-[1rem] border border-white/[0.12] bg-white/[0.04] px-4 py-3 text-base normal-case tracking-normal text-cream outline-none transition duration-300 focus:border-cyan/[0.45]"
            />
          </label>
          <label className="grid gap-2 text-sm uppercase tracking-[0.14em] text-cream/[0.72]">
            Phone
            <input
              name="phone"
              value={formState.phone}
              onChange={handleChange}
              className="rounded-[1rem] border border-white/[0.12] bg-white/[0.04] px-4 py-3 text-base normal-case tracking-normal text-cream outline-none transition duration-300 focus:border-cyan/[0.45]"
            />
          </label>
          <label className="grid gap-2 text-sm uppercase tracking-[0.14em] text-cream/[0.72]">
            Event Type
            <select
              name="eventType"
              value={formState.eventType}
              onChange={handleChange}
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
              name="date"
              type="date"
              value={formState.date}
              onChange={handleChange}
              className="rounded-[1rem] border border-white/[0.12] bg-white/[0.04] px-4 py-3 text-base normal-case tracking-normal text-cream outline-none transition duration-300 focus:border-cyan/[0.45]"
            />
          </label>
          <label className="grid gap-2 text-sm uppercase tracking-[0.14em] text-cream/[0.72]">
            Preferred Time
            <input
              name="time"
              type="time"
              value={formState.time}
              onChange={handleChange}
              className="rounded-[1rem] border border-white/[0.12] bg-white/[0.04] px-4 py-3 text-base normal-case tracking-normal text-cream outline-none transition duration-300 focus:border-cyan/[0.45]"
            />
          </label>
          <label className="grid gap-2 text-sm uppercase tracking-[0.14em] text-cream/[0.72] sm:col-span-2">
            Guest Count
            <input
              name="guests"
              value={formState.guests}
              onChange={handleChange}
              className="rounded-[1rem] border border-white/[0.12] bg-white/[0.04] px-4 py-3 text-base normal-case tracking-normal text-cream outline-none transition duration-300 focus:border-cyan/[0.45]"
            />
          </label>
          <label className="grid gap-2 text-sm uppercase tracking-[0.14em] text-cream/[0.72] sm:col-span-2">
            Notes
            <textarea
              name="notes"
              value={formState.notes}
              onChange={handleChange}
              rows={5}
              className="rounded-[1rem] border border-white/[0.12] bg-white/[0.04] px-4 py-3 text-base normal-case tracking-normal text-cream outline-none transition duration-300 focus:border-cyan/[0.45]"
            />
          </label>
          <div className="sm:col-span-2 flex flex-col gap-3 sm:flex-row">
            <a href={mailtoHref} className="cta-primary text-center">
              SEND REQUEST →
            </a>
            <a href={reservationsEmailHref} className="cta-secondary text-center">
              EMAIL MICHAEL →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
