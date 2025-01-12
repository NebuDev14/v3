import Image from "next/image";
import Link from "next/link";
import MetaImage from "../public/warrenog.png";

import { Social } from "../components/content/social";
import axios from "axios";
import { FaSpotify, FaMusic } from "react-icons/fa";
import { GetServerSideProps, NextPage } from "next";
import { Timeline } from "../components/ui/timeline";
import { useRouter } from "next/router";
import Head from "next/head";
import MetaData from "../components/content/metadata";
import { StarsBackground } from "../components/ui/stars-background";
import { ShootingStars } from "../components/ui/shooting-stars";
import { FlipWords } from "../components/ui/flip-words";
import { LayoutGrid } from "../components/ui/image-grid";
import { Gallery } from "../components/content/gallery";
import SpotifyWebApi from "spotify-web-api-node";
import { useState } from "react";

interface Props {
  song: string;
  isPlaying: boolean;
  link: string;
}

const Home: NextPage<Props> = (props) => {
  const { song, isPlaying, link } = props;

  return (
    <>
      <MetaData />
      <div className="flex flex-col items-center justify-center">
        <ShootingStars
          starWidth={15}
          trailColor="#db2777"
          starColor="#db2777"
          minSpeed={8}
          maxSpeed={15}
          starHeight={5}
          minDelay={2000}
          maxDelay={3000}
        />
        <StarsBackground starDensity={0.001} twinkleProbability={0.6} />
        <div className="flex px-8 md:grid-cols-1 border-b-[1px] border-b-neutral-800">
          <div className="z-10 flex justify-center items-center h-screen md:flex-col">
            <div className="pl-20 md:pl-0 md:w-full">
         
              <div className="inline-flex font-semibold text-8xl md:text-3xl font-open">
                <span className="mr-5 text-pink-600 md:mr-3 ">Warren</span>
                <span className="text-cyan-400">Yun.</span>
              </div>
              <div className="inline-block m-0 text-4xl md:text-lg text-zinc-300 font-bricolage pr-80">
                I&apos;m
                <span>
                  <FlipWords
                    duration={4500}
                    words={[
                      "a maker",
                      "a hackathon addict",
                      "an engineer",
                      "a software developer",
                      "a redbull enthusiast",
                    ]}
                  />
                </span>
                from NYC doing{" "}
                <span className="hover:text-yellow-600">robotics</span>,{" "}
                <span className="hover:text-purple-500">
                  full-stack development
                </span>
                , and{" "}
                <span className="hover:text-cyan-700">embedded security</span>.
              </div>
              <div className="flex flex-row items-center justify-start mt-3 font-bricolage text-zinc-400 md:text-sm md:flex-col md:items-start">
                <FaSpotify
                  size={30}
                  className="mr-2 text-green-400 md:hidden"
                />
                {isPlaying ? (
                  <FaMusic
                    size={20}
                    className="mr-2 text-purple-500 md:hidden"
                  />
                ) : (
                  ""
                )}

                {isPlaying ? (
                  <span className="md:mt-2">
                    <div className="inline-block mr-2 md:block">
                      Currently jamming to{" "}
                    </div>
                    <span>
                      <u className="font-mono text-green-400">
                        <Link href={link}>{song}</Link>
                      </u>{" "}
                      <FaSpotify
                        size={25}
                        className="hidden mr-2 text-green-400 md:inline md:ml-1"
                      />
                    </span>
                  </span>
                ) : (
                  <span>{song}</span>
                )}

                {isPlaying ? (
                  <FaMusic
                    size={20}
                    className="ml-2 text-purple-500 md:hidden"
                  />
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex py-20 px-20 md:grid-cols-1 md:px-4">
        <div className="flex flex-col items-center">
          <div className="w-[500px] h-[670px] relative rounded-xl">
            <Image src="/warren.jpg" alt="Warren Yun" layout="fill" objectFit="contain" className="rounded-xl" />
          </div>
          <h1 className="font-bricolage mt-2">MLH Hackcon 2024!</h1>
        </div>
        <div className=" ml-12 w-2/3 flex flex-col">
          <span className=" text-5xl font-open mb-4 font-semibold text-yellow-500">ABOUT ME</span>
          <p className="text-zinc-200 font-bricolage text-2xl mb-auto">
            Hi! I&apos;m Warren. I&apos;m currently an undergraduate studying Computer Science and Robotics Engineering at WPI.
            <br /> <br />
            My interests lie in the intersection of optimization, control theory, and machine learning. My goal is to create loco-manipulative robots that can operate in unique environments while still maintaing efficiency and style in their movements.
            <br /> <br />
            I also love hackathons! I&apos;ve been competing in them since freshman year of high school, and I go to them quite frequently nowadays.
            <br /> <br />
            If you&apos;re interested in collaborating with me on something, please reach out to me at  <span className="ml-2 font-mono">wyun [at] wpi [dot] edu</span>
          </p>
          <Social />
        </div>
      </div>

      <div className="flex items-center justify-center py-32 text-3xl md:py-16 md:text-lg text-zinc-400 font-bricolage">
        <div className="w-1/5 border border-yellow-600 md:w-1/12 " />
        <h1 className="mx-20 md:mx-4">
          <i>professional do-er of things.</i>
        </h1>
        <div className="w-1/5 border border-yellow-600 md:w-1/12" />
      </div>

      <Gallery />

      <div className="flex items-center justify-center py-32 text-3xl md:py-16 md:text-lg text-zinc-400 font-bricolage">
        <div className="w-1/5 border border-pink-700 md:w-1/12 " />
        <h1 className="mx-20 md:mx-4">
          <i>buildin&apos; things is fun.</i>
        </h1>
        <div className="w-1/5 border border-pink-700 md:w-1/12" />
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  require("dotenv").config();

  let spotifyApi = new SpotifyWebApi();
  spotifyApi.setCredentials({
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    refreshToken: process.env.TOKEN,
    redirectUri: "http://localhost:3000/callback/",
  });

  const token = await spotifyApi.refreshAccessToken();
  spotifyApi.setAccessToken(token.body["access_token"]);

  const currentTrack = await spotifyApi.getMyCurrentPlayingTrack();

  const fetchedData = currentTrack.body;
  if (Object.keys(fetchedData).length === 0) {
    return {
      props: {
        isPlaying: false,
        song: "Currently not jamming right now :(",
      },
    };
  } else {
    const isPlaying = fetchedData.is_playing;
    const link = fetchedData.item!.external_urls.spotify;
    let song = {};
    if (!isPlaying) {
      song = "Currently not jamming right now :(";
    } else {
      song = fetchedData.item!.name;
    }

    return {
      props: {
        isPlaying,
        song,
        link,
      },
    };
  }
};

export default Home;
