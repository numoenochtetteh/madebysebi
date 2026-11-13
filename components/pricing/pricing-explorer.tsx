"use client";

import { useSearchParams } from "next/navigation";
import { Search, X } from "lucide-react";
import { getPricingSelection, pricingHref, pricingPillars, type PricingCategoryId, type PricingPillarId } from "@/lib/pricing-catalog";
import { PricingResults } from "./pricing-results";
import styles from "./pricing.module.css";

export function PricingExplorer() {
  const params = useSearchParams();
  const { category, categories, query, pillar, unknownCategory } = getPricingSelection(params);

  function selectCategory(id: PricingCategoryId, nextPillar = pillar) {
    // Next integrates native history with useSearchParams and browser back/forward.
    window.history.pushState(null, "", pricingHref(id, query, nextPillar));
  }
  function search(value: string) {
    const next = new URLSearchParams(params);
    if (value.trim()) next.set("q", value.slice(0, 160));
    else next.delete("q");
    const match = getPricingSelection(next).category;
    if (match) next.set("category", match.id);
    window.history.replaceState(null, "", `/pricing?${next}`);
  }
  function selectPillar(id?: PricingPillarId) {
    const next = new URLSearchParams();
    if (id) next.set("pillar", id);
    const match = getPricingSelection(next).category;
    if (match) next.set("category", match.id);
    window.history.pushState(null, "", `/pricing?${next}`);
  }
  return <>
    <div className={styles.explorerIntro}><div><span className={styles.smallLabel}>Find your fit</span><h2>What does your business need?</h2></div><p>Choose a direction, then compare the scope.</p></div>
    <nav className={styles.pillars} aria-label="Pricing service pillars">
      {pricingPillars.map(item => <a key={item.id} href={`/pricing?pillar=${item.id}`} aria-current={pillar === item.id ? "true" : undefined} onClick={event => { if (event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) { event.preventDefault(); selectPillar(item.id); } }}><span>{item.number}</span>{item.title}</a>)}
    </nav>
    <div className={styles.filterBar}>
      <div className={styles.search}><label htmlFor="pricing-search">Search services or features</label><div><Search size={18} aria-hidden="true" /><input id="pricing-search" type="search" maxLength={160} placeholder="Try booking, inventory or support" value={query} onChange={event => search(event.target.value)} aria-describedby="pricing-filter-status" />{query ? <button type="button" aria-label="Clear service search" onClick={() => { search(""); document.getElementById("pricing-search")?.focus(); }}><X size={17} aria-hidden="true" /></button> : null}</div></div>
      <button type="button" className={styles.reset} onClick={() => selectPillar()} disabled={!pillar && !query}>Show all services</button>
    </div>
    <p id="pricing-filter-status" className={styles.filterStatus} role="status" aria-atomic="true">{categories.length} of 8 service categories{category ? ` · Comparing three options for ${category.name}` : " · No matching services"}</p>
    {unknownCategory ? <p className={styles.notice}>That service category isn’t available. Choose one of the services below.</p> : null}
    <nav className={styles.categories} aria-label="Service categories">{categories.map(item => <a key={item.id} href={pricingHref(item.id, query, pillar)} aria-current={category?.id === item.id ? "true" : undefined} aria-controls="pricing-packages" onClick={event => { if (event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) { event.preventDefault(); selectCategory(item.id); } }}>{item.name}</a>)}</nav>
    {category ? <PricingResults category={category} /> : <div className={styles.empty}><h3>No services match your search.</h3><p>Try a broader term, choose another pillar or show all eight services.</p><button type="button" className="mbs-action mbs-action-primary" onClick={() => selectPillar()}>Reset search and filters</button></div>}
  </>;
}
