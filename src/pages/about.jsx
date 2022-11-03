import React from "react";
import { Layout } from "../components/Layout";

function About() {
  return (
    <Layout>
      <div className="py-32 px-8 md:px-15 lg:px-20 ">
        <h1 className="my-5 text-3xl lg:text-5xl text-black dark:text-white">
          About
        </h1>
        <p className="dark:text-[#8175a7] text-[#413A5A]">
          A unique NFT marketplace to provide opportunities for creators like an
          artist, architect, designers for financial benefits with the vision of
          empowering digital asset management through NFTs.
        </p>
        <p className="dark:text-[#8175a7] text-[#413A5A] my-5">
          The platform allows the digital representation of unique assets in the
          form of NFTs with the standards of Ethereum that offer substantial
          benefits and a huge reputation from the global market for NFTs. This
          art-centric marketplace has a huge reputation for arts and artists
          that receives global recognition from the creators and NFT collectors.
        </p>
        <p className="dark:text-[#8175a7] text-[#413A5A]">
          Our market place allows us to create, sell and bid for NFTs which also
          allows purchasing NFTs from other marketplaces. Our plethora of NFTs
          in our marketplace offers a better investment opportunity for digital
          assets that offer enormous crypto fortunes as rewards for financial
          freedom.
        </p>
      </div>
    </Layout>
  );
}

export default About;
