import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  DownIcon,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  UpIcon,
  YoutubeIcon,
} from "./assets/icons";
import { useTheme } from "./components/theme-provider";
import { SocialMedia, userStats } from "./data/userStats";
import { cn } from "./lib/utils";

const SOCIAL_MEDIA_ICONS = {
  facebook: <FacebookIcon />,
  instagram: <InstagramIcon />,
  twitter: <TwitterIcon />,
  youtube: <YoutubeIcon />,
};

const formatNumberCompact = (initialNumber: number): string => {
  if (initialNumber >= 10000) {
    const roundedNumber = Math.floor(initialNumber / 1000) * 1000;

    const formattedNumber = Intl.NumberFormat("en-US", {
      notation: "compact",
      compactDisplay: "short",
    }).format(roundedNumber);

    return formattedNumber;
  }
  return initialNumber.toString();
};

const sumFollowers = (user: SocialMedia[]): string => {
  const followers_count = user.reduce(
    (followers_count, platform) => followers_count + platform.followers_count,
    0,
  );

  const formattedTotalFollower =
    Intl.NumberFormat("en").format(followers_count);

  return formattedTotalFollower;
};

interface ValueTrendProps {
  value: number;
  text?: string;
  format?: "percent";
}

const ValueTrend = ({ value, text, format }: ValueTrendProps) => {
  const isRise = value > 0;

  const absoluteValue = Math.abs(value);

  const formattedValuePercent = `${absoluteValue}%`;

  return (
    <p
      className={cn(
        "flex items-center justify-center text-sm font-bold",
        isRise ? "text-green-500" : "text-red-500",
      )}
    >
      <i className="mr-1">{isRise ? <UpIcon /> : <DownIcon />}</i>
      {format ? formattedValuePercent : absoluteValue} {text}
    </p>
  );
};

function App() {
  const { social_media, overview_today } = userStats;
  const { theme, setTheme } = useTheme();

  const isDark = theme === "dark";

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    setTheme(newTheme);
  };

  return (
    <div className="text-blue-300 dark:text-blue-400 container mx-auto h-full px-4">
      <header className="before:bg-blue-200 dark:before:bg-blue-800 items-center justify-between py-5 before:absolute before:inset-0 before:-z-10 before:h-64 before:rounded-b-xl sm:flex">
        <div className="border-gray-500 dark:border-blue-400 mb-4 border-b pb-8 sm:mb-0 sm:border-b-0 sm:pb-0">
          <h1 className="text-blue-700 pb-2 text-3xl font-semibold tracking-tight first:mt-0 dark:text-white">
            Social Media Dashboard
          </h1>
          <p className="text-lg font-semibold">
            Total Followers: {sumFollowers(userStats.social_media)}
          </p>
        </div>
        <div className="flex items-center justify-between sm:space-x-2">
          <Label className="dark:hover:text-white" htmlFor="dark-mode">
            Dark Mode
          </Label>
          <Switch
            id="dark-mode"
            className="data-[state=unchecked]:hover:from-teal-500 data-[state=unchecked]:hover:to-green-700 data-[state=unchecked]:hover:bg-gradient-to-r"
            checked={isDark}
            onCheckedChange={toggleTheme}
          />
        </div>
      </header>
      <main className="space-y-9 py-6 leading-7">
        <section className="grid grid-cols-1 place-content-center gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {social_media.map(
            ({ id, platform, username, followers_count, followers_today }) => (
              <Card
                key={id}
                socialMedia={platform}
                className="w-full overflow-hidden text-center"
              >
                <CardHeader className="justify-center gap-2">
                  <i role="img" aria-label={`${platform} icon`}>
                    {SOCIAL_MEDIA_ICONS[platform]}
                  </i>
                  <CardTitle className="text-sm">{username}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="uppercase tracking-[.25em]">
                    <strong className="text-blue-900 block text-6xl font-bold tracking-normal dark:text-white">
                      {formatNumberCompact(followers_count)}
                    </strong>
                    {platform == "youtube" ? "Subscribers" : "Followers"}
                  </p>
                </CardContent>
                <CardFooter className="justify-center">
                  <ValueTrend value={followers_today} text="Today" />
                </CardFooter>
              </Card>
            ),
          )}
        </section>

        <section>
          <h2 className="mb-8 scroll-m-20 text-2xl font-semibold tracking-tight dark:text-white">
            Overview - Today
          </h2>
          <div className="grid grid-cols-1 place-content-center gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {overview_today.map(
              ({ id, title, platform, interaction, percentage_change }) => (
                <Card key={id} className="w-full">
                  <CardHeader className="justify-between">
                    <CardTitle className="text-base font-bold">
                      {title}
                    </CardTitle>
                    <i role="img" aria-label={`${platform} icon`}>
                      {SOCIAL_MEDIA_ICONS[platform]}
                    </i>
                  </CardHeader>
                  <CardContent className="flex content-center justify-between">
                    <strong className="text-blue-900 text-4xl dark:text-white">
                      {formatNumberCompact(interaction)}
                    </strong>
                    <ValueTrend value={percentage_change} format="percent" />
                  </CardContent>
                </Card>
              ),
            )}
          </div>
        </section>
      </main>

      <footer className="hidden">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </footer>
    </div>
  );
}

export default App;
