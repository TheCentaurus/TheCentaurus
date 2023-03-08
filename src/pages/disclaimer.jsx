import React from "react";
import { Layout } from "../components/Layout";

function Disclaimer() {
  return (
    <Layout>
      <div className="py-32 px-8 md:px-15 lg:px-20 ">
        <h1 className="my-5 text-3xl lg:text-5xl text-black dark:text-white">
          Disclaimer
        </h1>
        <p className="dark:text-[#8175a7] md:text-justify text-[#413A5A]">
          The Centaurus including but not limited to the overall project, the
          token, website, smart contracts and any apps (“CENTAURUS”) as
          presented in this conceptual paper is not a licensed, unlicensed or
          exempted financial or payment service of any kind and in any
          jurisdiction. Any terminology used in this Whitepaper, on the Website
          or within the app is intended only as a basic reference, without any
          effective or legal meaning of the same terms in a regulated and/or
          financial environment CENTAURUS is a fully and completely
          decentralized and community driven project and does not have owners,
          shareholders promoters, marketers, managers, directors or other
          figures or entities exerting any form of governance; the CENTAURUS
          smart contracts are open-source, security audited, permanent and
          non-modifiable in any way. The CENTAURUS token is a strictly utility
          token in any jurisdiction and is not and cannot be considered as a
          security or otherwise a regulated token of any kind, is not in any way
          e-money and/or a fiat or asset backed stable coin, whether global or
          limited in scope. This Whitepaper taken by itself is not a contract or
          a contractual agreement of any kind, is not an invitation,
          solicitation or offer to invest in CENTAURUS or acquire or use its
          CENTAURUS tokens in any way and with any expectation of profit in any
          form. Any user of CENTAURUS declares to have received appropriate
          technical, administrative, regulatory and legal advice before and
          after accessing and/or reading this Whitepaper, the website and using
          any portion or element of CENTAURUS (including any CENTAURUS token
          therein) and accepts that there is an inherent high risk in accessing,
          acquiring or using any kind of blockchain and/or crypto system, token,
          platform, software, interface including CENTAURUS and further
          acknowledges with full disclaimer for any community member directly or
          indirectly involved with CENTAURUS, that there can be any kind of
          damage suffered, including total loss.
        </p>
      </div>
    </Layout>
  );
}

export default Disclaimer;
