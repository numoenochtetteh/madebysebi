"use client";

import { useSearchParams } from "next/navigation";

export function ContactMessageField() {
  const requestCall = useSearchParams().get("intent") === "call";
  return <>
    {requestCall ? <p className="ms-call-hint">Tell us what you&apos;d like to discuss. We&apos;ll reply to arrange a time.</p> : null}
    <textarea id="message" name="message" rows={6} placeholder="What are you trying to build or improve?" defaultValue={requestCall ? "I'd like to book a free call to discuss my project. " : ""} required />
  </>;
}
