/* Synced from converloopai; update with pnpm sync:converloop. */
"use client";

import { useState, type KeyboardEvent, type ReactNode } from "react";
import s from "./ConverloopPage.module.css";

type Item = { kind: string; tab: string; title: string; body: string; preview: ReactNode };

/**
 * Hero demo: one stage, one tab per feature (Lumno's command-bar stage).
 * The active tab's progress bar advances the stage when its animation ends, so CSS
 * pauses it on hover and focus and removes it for reduced motion; picking a tab stops
 * the rotation. All panels stay rendered in one grid cell, so the stage never resizes.
 */
export function HeroStage({ label, items }: { label: string; items: Item[] }) {
	const [active, setActive] = useState(0);
	const [auto, setAuto] = useState(true);

	const pick = (index: number) => {
		const next = (index + items.length) % items.length;
		setAuto(false);
		setActive(next);
		return next;
	};
	const onKeyDown = (event: KeyboardEvent) => {
		const step = event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : 0;
		if (!step) return;
		event.preventDefault();
		document.getElementById(`hero-tab-${items[pick(active + step)].kind}`)?.focus();
	};

	return (
		<div className={s.stage}>
			<div className={s.stageTabs} role="tablist" aria-label={label} onKeyDown={onKeyDown}>
				{items.map((item, i) => (
					<button
						key={item.kind}
						type="button"
						role="tab"
						id={`hero-tab-${item.kind}`}
						aria-controls={`hero-panel-${item.kind}`}
						aria-selected={i === active}
						tabIndex={i === active ? 0 : -1}
						onClick={() => pick(i)}
					>
						{item.tab}
						{auto && i === active ? <span className={s.stageProgress} aria-hidden="true" onAnimationEnd={() => setActive((active + 1) % items.length)} /> : null}
					</button>
				))}
			</div>
			<div className={s.stagePanels}>
				{items.map((item, i) => (
					<div
						key={item.kind}
						className={s.stagePanel}
						role="tabpanel"
						id={`hero-panel-${item.kind}`}
						aria-labelledby={`hero-tab-${item.kind}`}
						tabIndex={0}
						hidden={i !== active}
						data-play={i === active || undefined}
					>
						<div className={s.stageCopy}>
							<h2>{item.title}</h2>
							<p>{item.body}</p>
						</div>
						<div className={s.stageArt}>{item.preview}</div>
					</div>
				))}
			</div>
		</div>
	);
}
