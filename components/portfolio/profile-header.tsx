import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { portfolioData } from "@/data/portfolio";
import { ModeToggle } from "../mode-toggle";
import Highlight from "../highlight";
import { SocialLinks } from "./social-links";

export function ProfileHeader() {
  const { name, username, avatar, bio } = portfolioData.profile;

  return (
    <div>
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3 mb-6">
          <Avatar className="h-12 w-12 rounded-full border-2 border-foreground">
            <AvatarImage src={avatar || "/placeholder.svg"} alt={name} />
            <AvatarFallback>
              {name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-base font-medium">{name}</h1>
            <p className="text-sm text-muted-foreground">{username}</p>
          </div>
        </div>

        <ModeToggle />
      </div>

      <p className="text-base text-muted-foreground mb-6">
        <Highlight>Full-stack developer</Highlight> and{" "}
        <Highlight>B.Tech CSE @ Sage University</Highlight>.
        <br className="hidden sm:block" />
        {bio} Focused on{" "}
        <Highlight>SaaS</Highlight>,{" "}
        <Highlight>mobile</Highlight>, and{" "}
        <Highlight>3D experiences</Highlight>.
      </p>

      <SocialLinks />
    </div>
  );
}
