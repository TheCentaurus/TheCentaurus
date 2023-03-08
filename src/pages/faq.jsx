import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Layout } from "../components/Layout";

const faqs = [
  {
    question: "What is ERC-721 token standards?",
    answer:
      "ERC-721 is an ethereum based token token standard that allows the digital representation of unique collectibles in the form of NFTs. This non-fungible token creates intrinsic asset value for your unique collectibles that can be sold for millions of dollars.",
  },
  {
    question: "What is minting an NFT?",
    answer:
      "The process of creating digitally represented unique assets into NFTs called minting.",
  },
  {
    question: " Can I create an NFT without putting it on sale?",
    answer:
      "Yes, you can and its completely your choice to list for selling or not.",
  },
  {
    question: "Can I change the price of an already created NFT?",
    answer:
      "Yes , you can change the price of your NFT at any time with the signature through your integrated wallet.",
  },
  {
    question: "Can I gift or send a collectible to someone?",
    answer: `Yes, you can send or gift your NFT to anyone just by clicking "Transfer" button with a correct address.`,
  },
  {
    question: "What does “burning a token” mean?",
    answer:
      "ERC-721 is an ethereum based token token standard that allows the digital representation of unique collectibles in the form of NFTs. This non-fungible token creates intrinsic asset value for your unique collectibles that can be sold for millions of dollars.",
  },
  {
    question: "Do you have integration of other marketplaces?",
    answer:
      "Yes, you can purchase NFT from any popular NFT marketplaces like opensea , rarible which is integrated to our platform.",
  },
  {
    question: "What is unlockable tokens?",
    answer:
      "As a content creator, you can add unlockable content to your collectibles, that can be visible only after the transfer of ownership. This supports Artists to include high res files, making ofs. videos, secret messages etc.",
  },
  {
    question: "How does the royalty works?",
    answer:
      "When the user creates a collectible the user can set a certain percentage as royalty for secondary sales. This allows the creators to earn revenue for each transaction of their NFTs.",
  },
  {
    question: " Can I report an artwork or collectible?",
    answer:
      "Yes, you can report a collectible if it represents the same asset as yours or any other discomforts caused by other NFTs.",
  },
  {
    question: " What is verification?",
    answer:
      "Verified badges are granted to creators and collectors that show the proof of authenticity and active dedication to the marketplace.",
  },
  //   {
  //     question: `How to get a "verified" badge? (depends platform)`,
  //     answer: `You need to submit the following details:

  // Filled-in profile on our marketplace: user pic + cover + custom link
  // Links to at least 2 social media profiles.
  // Active social media profiles with plenty of artworks posted with huge benefit will attract buyers to your profile.
  // Behind the screens/work in progress.
  // If you're a creator, show us the backstage of the work process on one of the minted items.We verify your purchased NFTs if you are a collector.
  // Share us the story behind your account
  // Tell us about yourself.your collectibles,concept of your arts etc.`,
  //   },
  // More questions...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Layout>
      <div className="py-32 z-30 px-8 md:px-15 lg:px-20 ">
        <div className="mx-auto z-20 max-w-7xl py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
          <div className="mx-auto z-20 max-w-3xl divide-y-2 divide-gray-200">
            <h1 className="my-5 text-3xl z-30 lg:text-5xl text-black dark:text-white">
              Frequently asked questions
            </h1>
            <dl className="mt-6 space-y-6 divide-y divide-gray-200">
              {faqs.map((faq) => (
                <Disclosure as="div" key={faq.question} className="pt-6">
                  {({ open }) => (
                    <>
                      <dt className="text-lg">
                        <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                          <span className="font-medium dark:text-[#fff] text-[#413A5A]">
                            {faq.question}
                          </span>
                          <span className="ml-6 flex h-7 items-center">
                            <ChevronDownIcon
                              className={classNames(
                                open ? "-rotate-180" : "rotate-0",
                                "h-6 w-6 transform"
                              )}
                              aria-hidden="true"
                            />
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="mt-2 pr-12">
                        <p className="text-base dark:text-[#fff] text-[#000]">
                          {faq.answer}
                        </p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </Layout>
  );
}
