export const CHANNELS = [
  "telegram",
  "discord",
  "whatsapp",
];

export const geProviderRequiredFields = (channel: string) => {
  switch (channel) {
    case "telegram":
      return ["telegram_bot_token"];
    case "discord":
      return [
        "discord_bot_token",
        "discord_application_id",
        "discord_slash_command",
        "discord_slash_command_description",
      ];
    case "whatsapp":
      return [
        "whatsapp_phone_number",
        "whatsapp_verify_token",
        "whatsapp_access_token",
      ];
    default:
      return null;
  }
};
