/* Synced from converloopai; update with pnpm sync:converloop. */
import type { ReactNode } from "react";
import { converloopScenes, getConverloop } from "./copy";
import type { Locale } from "@/i18n";
import { Icon } from "./Icon";
import s from "./ProductPreviews.module.css";

const sentence = "The weather is lovely today, isn't it?";
const rewrite = "Yesterday I stopped by the library and picked up two books.";
const reply = "Nice! What books did you pick up? I love a good library haul.";

/** Static, readable excerpts of the app. Controls belong to the illustration. */
function Preview({ label, name, children, className = "" }: {
	label: string;
	name: string;
	children: ReactNode;
	className?: string;
}) {
	return <div className={`${s.preview} ${className}`} role="img" aria-label={label} data-preview={name}><div aria-hidden="true">{children}</div></div>;
}

function Play() {
	return <svg viewBox="0 0 20 20" aria-hidden="true"><path fill="currentColor" d="M6 3.5a1 1 0 0 1 1.5-.86l10 6a1 1 0 0 1 0 1.72l-10 6A1 1 0 0 1 6 15.5Z" /></svg>;
}

export function CorrectionPreview({ locale }: { locale: Locale }) {
	const c = getConverloop(locale).preview.correction;
	return (
		<Preview label={c.alt} name="correction" className={s.conversation}>
			<div className={s.bar}><Icon name="chat" /><span>{c.title}</span><span className={s.barDots}>···</span></div>
			<div className={s.userMessage}>
				<span className={s.meta}>{c.yours}</span>
				<p lang="en">I <del>goed</del> <ins>went</ins> to the library yesterday and <del>buyed</del> <ins>bought</ins> two books.</p>
				<div className={s.rewrite}><span className={s.meta}>{c.rewrite}</span><p lang="en">{rewrite}</p></div>
			</div>
			<p className={s.reply} lang="en">{reply}</p>
			<div className={s.messageTools}><Icon name="book" /><Icon name="translate" /><Icon name="headphones" /></div>
		</Preview>
	);
}

export function ExplanationPreview({ locale }: { locale: Locale }) {
	const c = getConverloop(locale).preview.explanation;
	return (
		<Preview label={c.alt} name="explanation">
			<div className={s.bar}><Icon name="book" /><span>{c.title}</span></div>
			<div className={s.explanationSource}><span className={s.meta}>{c.source}</span><p lang="en">Nice! What books did you <mark>pick up</mark>?</p></div>
			<div className={s.intent}><span className={s.meta}>{c.purpose}</span><p>{c.intent}</p></div>
			<div className={s.definition}><span className={s.category}>{c.category}</span><strong lang="en">pick up</strong><p>{c.meaning}</p></div>
		</Preview>
	);
}

export function ScenePreview({ locale }: { locale: Locale }) {
	const c = getConverloop(locale).preview.scene;
	return (
		<Preview label={c.alt} name="scene" className={s.scene}>
			<div className={s.sceneIntro}><span className={s.coffee}>☕</span><strong>{c.title}</strong><p>{c.setting}</p></div>
			<dl className={s.roles}>
				<div><dt>{c.you}</dt><dd>{c.role}</dd></div>
				<div><dt>{c.partner}</dt><dd>{c.partnerRole}</dd></div>
			</dl>
			<span className={s.sceneStart}><Play />{c.start}</span>
		</Preview>
	);
}

export function ExpressionPreview({ locale }: { locale: Locale }) {
	const c = getConverloop(locale);
	return (
		<Preview label={c.message.ask.alt} name="expression" className={s.expression}>
			<p className={s.question}>{c.preview.expression.question}</p>
			<div className={s.answer}><span className={s.answerIcon}><Icon name="sparkle" /></span><p lang="en">{c.preview.expression.answer}</p></div>
			<div className={s.messageTools}><Icon name="headphones" /><Icon name="book" /></div>
		</Preview>
	);
}

export function SceneLibraryPreview({ locale }: { locale: Locale }) {
	const c = getConverloop(locale);
	const examples = [0, 6, 12, 18, 24, 30].map(index => converloopScenes[index]);
	return (
		<Preview label={c.scenes.library.alt} name="library" className={s.library}>
			<div className={s.bar}><Icon name="book" /><span>{c.scenes.library.tag}</span><small>{c.preview.library.count}</small></div>
			<div className={s.sceneGrid}>
				{examples.map(scene => <div className={s.libraryScene} key={scene.en}><span>{scene.e}</span><strong>{locale === "zh" ? scene.zh : scene.en}</strong></div>)}
			</div>
		</Preview>
	);
}

export function ListeningPreview({ locale }: { locale: Locale }) {
	const c = getConverloop(locale);
	return (
		<Preview label={c.listen.listening.alt} name="listening" className={s.listening}>
			<div className={s.bar}><Icon name="headphones" /><span>{c.listen.listening.tag}</span><small>{c.preview.listening.sentence}</small></div>
			<div className={s.playlist} lang="en"><p className={s.activeSentence}>{sentence}</p><p>It really is! Perfect for a walk.</p><p>Do you have any plans to get outside?</p></div>
			<div className={s.playback}><span>{c.preview.listening.speed}</span><span className={s.play}><Play /></span><span>{c.preview.listening.loop}</span></div>
		</Preview>
	);
}

export function DictationPreview({ locale }: { locale: Locale }) {
	const c = getConverloop(locale);
	return (
		<Preview label={c.listen.dictation.alt} name="dictation" className={s.dictation}>
			<div className={s.bar}><Icon name="edit" /><span>{c.listen.dictation.tag}</span></div>
			<span className={s.meta}>{c.preview.dictation.progress}</span>
			<div className={s.progress}>{Array.from({ length: 10 }, (_, i) => <i key={i} data-current={i === 0 || undefined} />)}</div>
			<p className={s.typedSentence} lang="en">The weather is lovely today,<span className={s.caret} /></p>
			<div className={s.hints}><span><Icon name="sparkle" />{c.preview.dictation.hint}</span><span><Icon name="translate" />{c.preview.dictation.translation}</span></div>
			<div className={s.dictationActions}><span className={s.playSentence}><Play />{c.preview.dictation.play}</span><span className={s.check}><Icon name="check" />{c.preview.dictation.check}</span></div>
		</Preview>
	);
}

export function LearningPreview({ locale }: { locale: Locale }) {
	const c = getConverloop(locale);
	const p = c.preview.learning;
	return (
		<Preview label={c.learning.alt} name="learning" className={s.learning}>
			<div className={s.bar}><Icon name="book" /><span>{c.learning.kicker}</span><span className={s.weak}>{p.weak}</span></div>
			<div className={s.learningTerm}><span className={s.meta}>{p.grammar}</span><strong lang="en">go → went</strong></div>
			<div className={s.history}>
				<div><span className={s.meta}><Icon name="edit" />{p.correction}</span><p lang="en"><del>goed</del> <ins>went</ins></p></div>
				<div><span className={s.meta}><Icon name="check" />{p.later}</span><p lang="en">I went to the library yesterday.</p></div>
			</div>
			<span className={s.focusPractice}><Icon name="chat" />{p.practice}</span>
		</Preview>
	);
}
