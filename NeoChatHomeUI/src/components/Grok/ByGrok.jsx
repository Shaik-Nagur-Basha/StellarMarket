import React from "react";
import NavbarByGrok from "./NavbarByGrok";
import UsersSectionByGrok from "./UsersSectionByGrok";
import GroupsSectionByGrok from "./GroupsSectionByGrok";
import HeroByGrok from "./HeroByGrok";
import ChannelsSectionByGrok from "./ChannelsSectionByGrok";
import FooterByGrok from "./FooterByGrok";

export default function ByGrok() {
  return (
    <>
      <header>
        <title>NeoChat – Connect, Collaborate, Communicate</title>
        <meta
          name="description"
          content="NeoChat is a platform for communities, users, and groups to chat and collaborate seamlessly."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </header>
      <div className="font-sans">
        <NavbarByGrok />
        <HeroByGrok />
        <UsersSectionByGrok />
        <GroupsSectionByGrok />
        <ChannelsSectionByGrok />
        <FooterByGrok />
      </div>
    </>
  );
}
