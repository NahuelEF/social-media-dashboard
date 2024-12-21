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
        isRise ? "text-green" : "text-red",
      )}
    >
      <i className="mr-1">{isRise ? <UpIcon /> : <DownIcon />}</i>
      {format ? formattedValuePercent : absoluteValue} {text}
    </p>
  );
};

function App() {
  const { social_media, overview_today } = userStats;

  return (
    <div className="container mx-auto h-screen bg-white px-4 text-subdued-blue">
      <header className="flex items-center justify-between py-5">
        <div>
          <h1 className="pb-2 text-3xl font-semibold tracking-tight text-dark-blue first:mt-0">
            Social Media Dashboard
          </h1>
          <p className="text-lg font-semibold">
            Total Followers: {sumFollowers(userStats.social_media)}
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Label htmlFor="dark-mode">Dark Mode</Label>
          <Switch id="dark-mode" />
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
                    <strong className="block text-6xl font-bold tracking-normal text-charcoal">
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
          <h2 className="mb-8 scroll-m-20 text-2xl font-semibold tracking-tight">
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
                    <strong className="text-4xl text-charcoal">
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
