import Link from "next/link";
import { portfolioData } from "@/data/portfolio";
import { IconSvgElement } from "@hugeicons/react";
import IconButton from "../icon-button";
import {
  GithubIcon,
  Linkedin02Icon,
  Mail01Icon,
  TwitterIcon,
} from "@hugeicons/core-free-icons";
import { Button } from "../ui/button";

const iconComponents: Record<string, IconSvgElement> = {
  github: GithubIcon,
  linkedin: Linkedin02Icon,
  twitter: TwitterIcon,
  email: Mail01Icon,
};

export function SocialLinks() {
  const links = portfolioData.socialLinks;
  const resumeUrl = portfolioData.profile.resumeUrl || "#";

  return (
    <div className="flex gap-1 items-center">
      <Link href={resumeUrl} target="_blank">
        <Button variant={"default"} size={"lg"} className="font-semibold cursor-pointer">
          resume
        </Button>
      </Link>

      {links.map((link) => {
        const icon = iconComponents[link.platform];
        return (
          <Link key={link.platform} href={link.url} target="_blank">
            <IconButton icon={icon} variant={"secondary"} />
          </Link>
        );
      })}
    </div>
  );
}
