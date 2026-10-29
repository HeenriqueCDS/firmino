import { type ColorResolvable } from "discord.js";
import { CATEGORIES, type Category } from "@config/categories";

/** The one definition of Firmino's brand gold, so every surface that is not a named Discord colour reads it from here. */
const BRAND_HEX = "#d4af37";

/** Colours, emoji and branding. */
export const theme = {
	author: "Henrique Carvalho (Firma) · based on Testify by Kkermit",
	repository: "https://github.com/HeenriqueCDS/firmino",
	// TODO: still points at Testify's support server — swap for Firma's own invite once one exists.
	supportServer: "https://discord.gg/xcMVwAVjSD",
	brandHex: BRAND_HEX,

	/** The only place a colour is written. Everything else names one of these. */
	colours: {
		default: BRAND_HEX,
		error: "Red",
		success: "Green",
		warning: "Yellow",
		info: "Blue",
		audit: "DarkPurple",
		/** A moderator acted, rather than something merely changing. */
		severe: "DarkRed",
		/** Something left or ran out, which is neither a success nor a failure. */
		notice: "Orange",
	} satisfies Record<string, ColorResolvable>,

	/** Plain Unicode only. */
	emoji: {
		error: "❌",
		success: "✅",
		warning: "⚠️",
		info: "ℹ️",
		arrow: "➜",
		auditLog: "📋",
		coin: "🪙",
		bank: "🏦",
		wallet: "👛",
		confetti: "🎉",
		counting: "🔢",
		moderation: "🛡️",
		verify: "🔓",
		first: "⏮️",
		previous: "◀️",
		next: "▶️",
		last: "⏭️",
		tick: "✔️",
		maintenance: "🛠️",
	},
} as const;

export function categoryColour(category: Category): ColorResolvable {
	return CATEGORIES[category].colour;
}
