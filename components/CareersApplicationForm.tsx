'use client';

import { useCallback, useEffect, useMemo, useState, type ChangeEvent, type FormEvent } from 'react';

const FORM_ENDPOINT = 'https://formsubmit.co/el/rayoyi';
const THANK_YOU_URL = 'https://thedriftwoodsaz.com/careers/thank-you';
const MAX_FILE_SIZE_BYTES = 10 * 1024 * 1024;

const POSITION_MAP: Record<string, string> = {
  'line-cook': 'Line Cook',
  server: 'Server',
  bartender: 'Bartender',
  'host-hostess': 'Host/Hostess'
};

const POSITION_OPTIONS = ['Line Cook', 'Server', 'Bartender', 'Host/Hostess'];

const ALLOWED_FILE_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
];

const ALLOWED_FILE_EXTENSIONS = ['pdf', 'doc', 'docx'];

function buildSubject(firstName: string, lastName: string, position: string) {
  const safePosition = (position || 'POSITION').trim().toUpperCase();
  const fullName = `${firstName.trim()} ${lastName.trim()}`.trim();
  return `[APPLICATION] [DRIFTWOODS] [${safePosition}] ${fullName}`.trim();
}

function isAllowedResumeFile(file: File) {
  const extension = file.name.split('.').pop()?.toLowerCase() || '';
  return ALLOWED_FILE_TYPES.includes(file.type) || ALLOWED_FILE_EXTENSIONS.includes(extension);
}

export default function CareersApplicationForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [position, setPosition] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const rawPosition = params.get('position');

    if (!rawPosition) {
      return;
    }

    const mappedPosition = POSITION_MAP[rawPosition];
    if (mappedPosition) {
      setPosition(mappedPosition);
    }
  }, []);

  const subject = useMemo(() => buildSubject(firstName, lastName, position), [firstName, lastName, position]);

  const validateResume = useCallback((file: File | null) => {
    if (!file) {
      return 'Please upload your resume.';
    }

    if (!isAllowedResumeFile(file)) {
      return 'Please upload a PDF, DOC, or DOCX resume.';
    }

    if (file.size > MAX_FILE_SIZE_BYTES) {
      return 'Resume must be under 10MB.';
    }

    return '';
  }, []);

  function handleEmailChange(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function handleResumeChange(event: ChangeEvent<HTMLInputElement>) {
    const nextFile = event.target.files?.[0] || null;
    setError(validateResume(nextFile));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    const resumeInput = event.currentTarget.elements.namedItem('resume') as HTMLInputElement | null;
    const nextFile = resumeInput?.files?.[0] || null;
    const validationMessage = validateResume(nextFile);

    if (validationMessage) {
      event.preventDefault();
      setError(validationMessage);
      return;
    }

    setError('');
  }

  return (
    <form
      action={FORM_ENDPOINT}
      method="POST"
      encType="multipart/form-data"
      onSubmit={handleSubmit}
      className="mx-auto w-full max-w-3xl space-y-6 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-panel backdrop-blur-sm md:p-8"
    >
      <input type="hidden" name="_subject" value={subject} />
      <input type="hidden" name="_next" value={THANK_YOU_URL} />
      <input type="hidden" name="_template" value="table" />
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" />
      <input type="hidden" name="_replyto" value={email} />
      <input type="hidden" name="tag" value="APPLICATION" />
      <input type="hidden" name="brand" value="DRIFTWOODS" />

      <div className="space-y-2">
        <h1 className="text-3xl uppercase leading-none text-cream md:text-4xl">Apply to Driftwoods</h1>
        <p className="max-w-2xl text-sm leading-6 text-cream/70 md:text-base">
          Complete the application below and it will be delivered to the Driftwoods careers inbox.
        </p>
      </div>

      {error ? (
        <div className="rounded-[1rem] border border-[#ff6138]/30 bg-[#ff6138]/10 px-4 py-3 text-sm text-[#ffd5ca]">
          {error}
        </div>
      ) : null}

      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm uppercase tracking-[0.14em] text-cream/[0.72]">
          First Name
          <input
            id="first_name"
            name="first_name"
            type="text"
            required
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            className="rounded-[1rem] border border-white/[0.12] bg-white/[0.04] px-4 py-3 text-base normal-case tracking-normal text-cream outline-none transition duration-300 focus:border-cyan/[0.45]"
          />
        </label>

        <label className="grid gap-2 text-sm uppercase tracking-[0.14em] text-cream/[0.72]">
          Last Name
          <input
            id="last_name"
            name="last_name"
            type="text"
            required
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            className="rounded-[1rem] border border-white/[0.12] bg-white/[0.04] px-4 py-3 text-base normal-case tracking-normal text-cream outline-none transition duration-300 focus:border-cyan/[0.45]"
          />
        </label>

        <label className="grid gap-2 text-sm uppercase tracking-[0.14em] text-cream/[0.72]">
          Email
          <input
            id="email"
            name="email"
            type="email"
            required
            value={email}
            onChange={handleEmailChange}
            className="rounded-[1rem] border border-white/[0.12] bg-white/[0.04] px-4 py-3 text-base normal-case tracking-normal text-cream outline-none transition duration-300 focus:border-cyan/[0.45]"
          />
        </label>

        <label className="grid gap-2 text-sm uppercase tracking-[0.14em] text-cream/[0.72]">
          Phone
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="rounded-[1rem] border border-white/[0.12] bg-white/[0.04] px-4 py-3 text-base normal-case tracking-normal text-cream outline-none transition duration-300 focus:border-cyan/[0.45]"
          />
        </label>

        <label className="grid gap-2 text-sm uppercase tracking-[0.14em] text-cream/[0.72]">
          Position
          <select
            id="position"
            name="position"
            required
            value={position}
            onChange={(event) => setPosition(event.target.value)}
            className="rounded-[1rem] border border-white/[0.12] bg-[#0b1520] px-4 py-3 text-base normal-case tracking-normal text-cream outline-none transition duration-300 focus:border-cyan/[0.45]"
          >
            <option value="">Select a position</option>
            {POSITION_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label className="grid gap-2 text-sm uppercase tracking-[0.14em] text-cream/[0.72]">
          Available Start Date
          <input
            id="start_date"
            name="start_date"
            type="date"
            className="rounded-[1rem] border border-white/[0.12] bg-white/[0.04] px-4 py-3 text-base normal-case tracking-normal text-cream outline-none transition duration-300 focus:border-cyan/[0.45]"
          />
        </label>

        <label className="grid gap-2 text-sm uppercase tracking-[0.14em] text-cream/[0.72] md:col-span-2">
          Availability
          <input
            id="availability"
            name="availability"
            type="text"
            placeholder="Weekdays, evenings, weekends, etc."
            className="rounded-[1rem] border border-white/[0.12] bg-white/[0.04] px-4 py-3 text-base normal-case tracking-normal text-cream placeholder:text-cream/35 outline-none transition duration-300 focus:border-cyan/[0.45]"
          />
        </label>

        <label className="grid gap-2 text-sm uppercase tracking-[0.14em] text-cream/[0.72]">
          Are you 21 or older?
          <select
            id="is_21_or_older"
            name="is_21_or_older"
            className="rounded-[1rem] border border-white/[0.12] bg-[#0b1520] px-4 py-3 text-base normal-case tracking-normal text-cream outline-none transition duration-300 focus:border-cyan/[0.45]"
          >
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </label>

        <label className="grid gap-2 text-sm uppercase tracking-[0.14em] text-cream/[0.72]">
          Reliable Transportation
          <select
            id="reliable_transportation"
            name="reliable_transportation"
            className="rounded-[1rem] border border-white/[0.12] bg-[#0b1520] px-4 py-3 text-base normal-case tracking-normal text-cream outline-none transition duration-300 focus:border-cyan/[0.45]"
          >
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </label>

        <label className="grid gap-2 text-sm uppercase tracking-[0.14em] text-cream/[0.72] md:col-span-2">
          Experience
          <textarea
            id="experience"
            name="experience"
            required
            rows={6}
            placeholder="Tell us about your hospitality, kitchen, bar, or customer service experience."
            className="rounded-[1rem] border border-white/[0.12] bg-white/[0.04] px-4 py-3 text-base normal-case tracking-normal text-cream placeholder:text-cream/35 outline-none transition duration-300 focus:border-cyan/[0.45]"
          />
        </label>

        <label className="grid gap-2 text-sm uppercase tracking-[0.14em] text-cream/[0.72] md:col-span-2">
          Message
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Anything else you want us to know?"
            className="rounded-[1rem] border border-white/[0.12] bg-white/[0.04] px-4 py-3 text-base normal-case tracking-normal text-cream placeholder:text-cream/35 outline-none transition duration-300 focus:border-cyan/[0.45]"
          />
        </label>

        <label className="grid gap-2 text-sm uppercase tracking-[0.14em] text-cream/[0.72] md:col-span-2">
          Resume Upload
          <input
            id="resume"
            name="resume"
            type="file"
            accept=".pdf,.doc,.docx"
            required
            onChange={handleResumeChange}
            className="block rounded-[1rem] border border-white/[0.12] bg-white/[0.04] px-4 py-3 text-base normal-case tracking-normal text-cream file:mr-4 file:rounded-[0.8rem] file:border-0 file:bg-cyan file:px-4 file:py-2 file:font-medium file:text-[#06101a]"
          />
          <span className="text-xs normal-case tracking-normal text-cream/55">Accepted: PDF, DOC, DOCX. Max file size: 10MB.</span>
        </label>

        <label className="md:col-span-2 flex items-start gap-3 text-sm normal-case tracking-normal text-cream/80">
          <input
            type="checkbox"
            name="certification"
            value="I certify the information provided is accurate."
            required
            className="mt-1 h-4 w-4 rounded border-white/20 bg-[#0b1520] text-cyan"
          />
          <span>I certify the information provided is accurate.</span>
        </label>
      </div>

      <button type="submit" className="cta-primary w-full justify-center text-center sm:w-auto">
        Submit Application
      </button>
    </form>
  );
}
