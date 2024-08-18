import "./App.css";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function App() {
  return (
    <div className="container mx-auto h-screen bg-white px-4 text-gray-700">
      <header className="flex items-center justify-between py-5">
        <div>
          <h1 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight text-gray-900 first:mt-0">
            Social Media Dashboard
          </h1>
          <h2 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Total Followers: 23,004
          </h2>
        </div>
        <div className="flex items-center space-x-2">
          <Label className="text-gray-500" htmlFor="dark-mode">
            Dark Mode
          </Label>
          <Switch id="dark-mode" />
        </div>
      </header>
      <main className="leading-7 [&:not(:first-child)]:mt-6">
        <section className="">
          <Card className="w-80 border-x-0 border-b-0 border-t-8 border-t-blue-600 bg-gray-100 text-center text-inherit">
            <CardHeader>
              <CardTitle className="text-sm">@nathanf</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="scroll-m-20 text-6xl font-bold tracking-tight text-gray-900">
                1987
              </div>
              <span className="uppercase tracking-[.25em]">Followers</span>
            </CardContent>
            <CardFooter className="justify-center">
              <p className="text-sm font-bold text-emerald-500">12 Today</p>
            </CardFooter>
          </Card>

          <div>@nathanf 1987 Followers 12 Today</div>
          <div>@nathanf 1044 Followers 99 Today</div>
          <div>@realnathanf 11k Followers 1099 Today</div>
          <div>Nathan F. 8239 Subscribers 144 Today</div>
        </section>

        <section>
          <h3>Overview - Today</h3>
          <div>Page Views 87 3%</div>
          <div>Likes 52 2%</div>
          <div>Likes 5462 2257%</div>
          <div>Profile Views 52k 1375%</div>
          <div>Retweets 117 303%</div>
          <div>Likes 507 553%</div>
          <div>Likes 107 19%</div>
          <div>Total Views 1407 12%</div>
        </section>
      </main>

      <footer className="attribution">
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
