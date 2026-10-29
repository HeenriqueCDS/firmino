import { type Preference, useRootPreference } from "@/hooks/rootPreference";

export const ACCENTS = [
	"gold",
	"violet",
	"indigo",
	"blue",
	"sky",
	"cyan",
	"teal",
	"emerald",
	"amber",
	"orange",
	"rose",
	"pink",
	"slate",
] as const;
export type Accent = (typeof ACCENTS)[number];

/** Gold is the base palette in `index.css`, so choosing it removes the attribute rather than restating it. */
export const ACCENT: Preference<Accent> = {
	attribute: "data-accent",
	storageKey: "testify:accent",
	options: ACCENTS,
	fallback: "gold",
};

export function useAccent(): { accent: Accent; setAccent: (next: Accent) => void } {
	const { value, choose } = useRootPreference(ACCENT);

	return { accent: value, setAccent: choose };
}
