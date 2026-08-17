import { useAtom } from "jotai";
import { createBooleanPreferenceAtom } from "./browser-storage";

export const MARKDOWN_TABLE_BREAKOUT_STORAGE_KEY = "bb.markdown.table-breakout";

/**
 * Default ON: markdown tables widen past the surrounding text column so wide
 * tables stay readable (see `MarkdownTable`). When OFF, a table is capped at
 * the content width of the message it sits in and scrolls horizontally inside
 * that column instead — the table no longer interrupts the reading rhythm of a
 * long answer, at the cost of scrolling to reach the far columns.
 *
 * Only the table's outer width changes; cell styling, borders and the existing
 * horizontal scroll container are shared by both modes.
 */
export const MARKDOWN_TABLE_BREAKOUT_DEFAULT = true;

export const markdownTableBreakoutPreferenceAtom = createBooleanPreferenceAtom(
  MARKDOWN_TABLE_BREAKOUT_STORAGE_KEY,
  MARKDOWN_TABLE_BREAKOUT_DEFAULT,
);

export function useMarkdownTableBreakoutPreference() {
  return useAtom(markdownTableBreakoutPreferenceAtom);
}
