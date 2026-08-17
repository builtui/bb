import { Switch } from "@bb/shared-ui/switch";
import { SettingsWithControl } from "@/components/ui/settings-section";
import { useMarkdownTableBreakoutPreference } from "@/lib/markdown-table-breakout-preference";

export const MARKDOWN_TABLE_BREAKOUT_SETTING_LABEL = "Widen tables";

export function MarkdownTableBreakoutSetting() {
  const [breakoutEnabled, setBreakoutEnabled] =
    useMarkdownTableBreakoutPreference();

  return (
    <SettingsWithControl
      label={MARKDOWN_TABLE_BREAKOUT_SETTING_LABEL}
      description="Let tables in messages extend past the text column. Turn off to keep them at the content width and scroll them horizontally instead."
    >
      <Switch
        checked={breakoutEnabled}
        onCheckedChange={setBreakoutEnabled}
        aria-label={MARKDOWN_TABLE_BREAKOUT_SETTING_LABEL}
      />
    </SettingsWithControl>
  );
}
