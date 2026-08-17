// @vitest-environment jsdom

import { fireEvent, render, screen } from "@testing-library/react";
import { createStore, Provider as JotaiProvider } from "jotai";
import { beforeEach, describe, expect, it } from "vitest";
import {
  MARKDOWN_TABLE_BREAKOUT_STORAGE_KEY,
  markdownTableBreakoutPreferenceAtom,
} from "@/lib/markdown-table-breakout-preference";
import {
  MARKDOWN_TABLE_BREAKOUT_SETTING_LABEL,
  MarkdownTableBreakoutSetting,
} from "./MarkdownTableBreakoutSetting";

describe("MarkdownTableBreakoutSetting", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it("updates and saves the table breakout preference", () => {
    const store = createStore();
    render(
      <JotaiProvider store={store}>
        <MarkdownTableBreakoutSetting />
      </JotaiProvider>,
    );

    const toggle = screen.getByRole("switch", {
      name: MARKDOWN_TABLE_BREAKOUT_SETTING_LABEL,
    });
    expect(toggle.getAttribute("data-state")).toBe("checked");

    fireEvent.click(toggle);

    expect(store.get(markdownTableBreakoutPreferenceAtom)).toBe(false);
    expect(
      window.localStorage.getItem(MARKDOWN_TABLE_BREAKOUT_STORAGE_KEY),
    ).toBe("false");
  });
});
