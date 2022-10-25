import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import AboutSection from "../components/AboutSection";
import AreasSection from "../components/AreasSection";
import BannerSection from "../components/BannerSection";
import ContactSection from "../components/ContactSection";
import ExperienceSection from "../components/ExperienceSection";
import Navbar from "../components/Navbar";
import NewsSection from "../components/NewsSection";
import QuestionSection from "../components/QuestionSection";
import RecentPubsSection from "../components/RecentPubsSection";
import SentenceSection from "../components/SentenceSection";

const Home: NextPage = () => {
  return (
    <div className="font-lato overflow-hidden">
      <Head>
        <title>Estudio Ugaz Zegarra</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative">
        <Navbar />
        <BannerSection />
        <AreasSection />
        <ExperienceSection />
        <AboutSection />
        <RecentPubsSection />
        <SentenceSection />
        <NewsSection />
        <QuestionSection />
        <ContactSection />
      </div>
    </div>
  );
};

export default Home;
