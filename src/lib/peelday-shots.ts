import calendar from "../../public/peelday/calendar.webp";
import empty from "../../public/peelday/empty.webp";
import maker from "../../public/peelday/maker.webp";
import page from "../../public/peelday/page.webp";
import search from "../../public/peelday/search.webp";
import ticket from "../../public/peelday/ticket.webp";
import widget from "../../public/peelday/widget.webp";

// Next.js gives static imports content-hashed URLs, so updated captures bypass old caches.
export const peeldayShots = {
	calendar: calendar.src,
	empty: empty.src,
	maker: maker.src,
	page: page.src,
	search: search.src,
	ticket: ticket.src,
	widget: widget.src,
} as const;
