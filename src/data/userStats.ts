export interface UserStats {
  social_media: SocialMedia[];
  overview_today: OverviewToday[];
}

export interface SocialMedia {
  id: number;
  platform: Platform;
  username: string;
  followers_count: number;
  followers_today: number;
}

interface OverviewToday {
  id: number;
  title: string;
  platform: Platform;
  interaction: number;
  percentage_change: number;
}

type Platform = "facebook" | "twitter" | "instagram" | "youtube";

export const userStats: UserStats = {
  social_media: [
    {
      id: 1,
      platform: "facebook",
      username: "@nathanf",
      followers_count: 1987,
      followers_today: 12,
    },
    {
      id: 2,
      platform: "twitter",
      username: "@nathanf",
      followers_count: 1044,
      followers_today: 99,
    },
    {
      id: 3,
      platform: "instagram",
      username: "@realnathanf",
      followers_count: 11734,
      followers_today: 1099,
    },
    {
      id: 4,
      platform: "youtube",
      username: "Nathan F.",
      followers_count: 8239,
      followers_today: -144,
    },
  ],
  overview_today: [
    {
      id: 9,
      platform: "facebook",
      title: "Page Views",
      interaction: 87,
      percentage_change: 3,
    },
    {
      id: 5,
      title: "Likes",
      platform: "facebook",
      interaction: 52,
      percentage_change: -2,
    },
    {
      id: 7,
      title: "Likes",
      platform: "instagram",
      interaction: 5462,
      percentage_change: 2257,
    },
    {
      id: 11,
      platform: "instagram",
      title: "Profile Views",
      interaction: 52000,
      percentage_change: 1375,
    },
    {
      id: 10,
      platform: "twitter",
      title: "Retweets",
      interaction: 117,
      percentage_change: 303,
    },
    {
      id: 6,
      title: "Likes",
      platform: "twitter",
      interaction: 507,
      percentage_change: 553,
    },
    {
      id: 8,
      title: "Likes",
      platform: "youtube",
      interaction: 107,
      percentage_change: -19,
    },
    {
      id: 12,
      platform: "youtube",
      title: "Total Views",
      interaction: 1407,
      percentage_change: -12,
    },
  ],
};
