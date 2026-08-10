// app/price-match/page.tsx
"use client";

import { 
  Shield, 
  FileText, 
  Scale, 
  Globe, 
  CheckCircle,
  Phone,
  Lock,
  Eye,
  Database,
  Share2,
  Cookie,
  Users,
  MapPin,
  AlertCircle,
  Clock,
  DollarSign,
  Search,
  XCircle,
} from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BRAND, CONTACT } from "@/app/constants";

export default function PriceMatchPage() {
  const sections = [
    {
      icon: Shield,
      title: "Our Price Match Promise",
      content: [
        "Subject to the conditions below, Noam Flyers Inc. may review a properly submitted claim where a lower publicly available total airfare was available for the same itinerary shortly after a booking was made through Tickettooeurope.com.",
        "Because airline inventory and pricing can change rapidly, not every lower price found elsewhere will qualify.",
        "Our Price Match Promise is intended to provide a consistent process for reviewing properly documented and independently verifiable lower-price claims."
      ]
    },
    {
      icon: FileText,
      title: "What Qualifies as the Same Itinerary?",
      content: [
        "For a Price Match claim to qualify, the compared booking must match the original Tickettooeurope.com reservation on all material booking elements.",
        "This generally includes:",
        "• Operating airline or airlines",
        "• Marketing carrier, where applicable",
        "• Flight number or materially identical flight",
        "• Origin and destination airports",
        "• Travel dates",
        "• Applicable departure time or departure window",
        "• Cabin class",
        "• Fare family or equivalent fare conditions",
        "• Number and type of passengers",
        "• Baggage allowance",
        "• Seat inclusion, where applicable",
        "• Change and cancellation conditions",
        "• Flexibility provisions",
        "• Other mandatory services or charges included in the fare",
        "The comparison must be like-for-like.",
        "For example, a basic fare without a cabin-baggage allowance would not generally be considered equivalent to a fare that includes baggage.",
        "Similarly, an online self-service fare is not automatically comparable to an assisted-booking quote where the assisted transaction includes a clearly disclosed service fee.",
        "A competitor's advertised headline price will not qualify if mandatory fees are added later and the resulting checkout total is higher."
      ],
      twoColumn: true
    },
    {
      icon: DollarSign,
      title: "Publicly Available Fare Requirement",
      content: [
        "A lower fare will generally qualify for review only when it was:",
        "• Visible to the general public",
        "• Available for public purchase",
        "• Bookable at the time of verification",
        "• For the same itinerary",
        "• Based on materially equivalent fare conditions",
        "• Inclusive of the same applicable mandatory charges",
        "Taxes and known mandatory airline, supplier, or agency charges should be included when comparing the total price.",
        "Optional services selected only by the customer are generally excluded from the comparison unless both offers include those services on the same basis.",
        "Examples of optional services may include:",
        "• Optional seat purchases",
        "• Travel protection",
        "• Donations",
        "• Optional baggage",
        "• Additional after-sale services",
        "• Other customer-selected ancillary services"
      ],
      twoColumn: true
    },
    {
      icon: Clock,
      title: "Price Match Claim Period",
      content: [
        "Price Match claims must be submitted within twenty-four (24) hours of the original booking confirmation time shown by Noam Flyers Inc. and before the first flown segment departs, whichever occurs first.",
        "The claim should include:",
        "• Tickettooeurope.com booking reference",
        "• Passenger's full name",
        "• Original itinerary",
        "• Lower advertised fare",
        "• Comparison website or URL, where available",
        "• Date and time the lower fare was observed",
        "• Currency displayed",
        "• Screenshots or other objective evidence showing the lower public price",
        "Noam Flyers Inc. may request additional documentation if the submitted information is insufficient to independently verify the claim.",
        "Claims that cannot be independently verified may be declined."
      ],
      twoColumn: true
    },
    {
      icon: Search,
      title: "How We Review a Claim",
      content: [
        "Once a claim is received, Noam Flyers Inc. will review the submitted information and compare the lower fare against the original Tickettooeurope.com reservation.",
        "The review may consider:",
        "• Whether the lower price was publicly available.",
        "• Whether the fare could actually be booked.",
        "• Whether the itinerary is materially identical.",
        "• Whether the passenger mix is identical.",
        "• Whether the cabin and fare conditions are equivalent.",
        "• Whether mandatory taxes and charges are included.",
        "• Whether baggage and other included services are equivalent.",
        "• Whether the lower price is still available at the time of verification.",
        "• Whether the comparison is based on the same applicable currency and point of sale.",
        "• Whether the competing offer is subject to restrictions unavailable to the general public.",
        "Dynamic or temporary pricing differences do not automatically qualify."
      ],
      twoColumn: true
    },
    {
      icon: CheckCircle,
      title: "Approved Price Match Remedies",
      content: [
        "If a Price Match claim is approved, Noam Flyers Inc. may resolve the claim through one of the following remedies, depending on the circumstances.",
        "",
        "1. Verified Difference Refund",
        "Where operationally practical, Noam Flyers Inc. may refund the verified difference between the amount originally charged and the lower comparable public fare.",
        "",
        "2. Agency Credit",
        "Where a direct refund is not operationally practical but another transparent remedy is appropriate, Noam Flyers Inc. may issue an applicable agency credit for the verified difference.",
        "",
        "3. Eligible Cancellation and Reversal",
        "If the reservation remains within an applicable cancellation period and the airline fare permits cancellation without loss of the applicable airfare, Noam Flyers Inc. may offer to cancel the reservation and process the applicable reversal in accordance with the relevant cancellation conditions.",
        "",
        "The available remedy may depend on:",
        "• Ticket status",
        "• Time elapsed since booking",
        "• Payment status",
        "• Airline fare rules",
        "• Supplier restrictions",
        "• Cancellation eligibility",
        "• Operational feasibility",
        "The applicable remedy will be communicated when the claim is resolved."
      ],
      twoColumn: true
    },
    {
      icon: XCircle,
      title: "Excluded Offers",
      content: [
        "The following types of fares or offers are generally excluded from this Price Match Promise:",
        "• Member-only fares",
        "• Login-only fares",
        "• Subscription fares",
        "• Corporate fares",
        "• Negotiated fares",
        "• Student fares",
        "• Military fares",
        "• Tour-operator fares",
        "• Group fares",
        "• Charter fares",
        "• Consolidator fares",
        "• Unpublished fares",
        "• Opaque fares",
        "• Auction or bidding-based fares",
        "• Coupon-dependent prices unavailable to the general public",
        "• Loyalty-point or loyalty-redemption offers",
        "• Cashback offers",
        "• Financing-specific offers",
        "• Obvious pricing errors",
        "• Metasearch preview prices that are not the final checkout total",
        "• Prices that cannot be reproduced or independently verified",
        "• Prices requiring a different point of sale",
        "• Prices available only in a different country or market",
        "• Prices dependent on different tax residency",
        "• Prices involving materially different currency-conversion treatment",
        "• Prices requiring a payment method unavailable to the claimant",
        "Offers bundled with unrelated services that materially change the effective airfare may also be excluded."
      ],
      twoColumn: true
    },
    {
      icon: Globe,
      title: "Online Booking vs. Assisted Booking",
      content: [
        "Tickettooeurope.com may provide both self-service online booking and assisted booking through telephone, chat, or email.",
        "If the original reservation was made through an assisted channel, the comparison must take into account the relevant service level.",
        "For example, an online-only competitor fare will not automatically invalidate an assisted Tickettooeurope.com booking where the assisted transaction included a clearly disclosed service fee and the competitor fare does not provide comparable assisted service.",
        "However, if a customer can demonstrate that another publicly available assisted-booking transaction for the same itinerary provides a lower verified total, including applicable mandatory assisted-booking charges, Noam Flyers Inc. may review that claim under the same Price Match criteria."
      ]
    },
    {
      icon: AlertCircle,
      title: "Abusive or Invalid Claims",
      content: [
        "Noam Flyers Inc. reserves the right to decline repeated, abusive, fraudulent, or bad-faith Price Match submissions.",
        "This may include claims involving:",
        "• Manipulated screenshots",
        "• Altered booking information",
        "• Stale cached prices",
        "• Automated or artificially generated pricing results",
        "• Scraped prices that cannot be purchased",
        "• Offers that were never genuinely available for public purchase",
        "• Repeated claims based solely on normal dynamic price fluctuations",
        "Airline fares can change rapidly, sometimes within minutes. The purpose of this Price Match Promise is to address objectively verifiable price differences, not to guarantee protection against every future movement in airline pricing."
      ],
      twoColumn: true
    },
    {
      icon: Shield,
      title: "Effect on Your Original Booking",
      content: [
        "Nothing in this Price Match Promise changes the fact that Tickettooeurope.com is an independent travel agency and that airline inventory, ticket conditions, and fare rules are controlled by the applicable airline or travel supplier.",
        "Payment for the original booking is processed through the applicable booking and payment arrangements of Noam Flyers Inc.",
        "Approval of a Price Match claim does not guarantee that any later voluntary cancellation, exchange, refund, or modification will be free of airline or agency fees.",
        "If a Price Match claim is denied, the original booking remains subject to the fare rules, conditions, and policies presented at the time of booking, together with any other applicable Tickettooeurope.com policies."
      ]
    },
    {
      icon: FileText,
      title: "Price Match Summary",
      content: (
        <div className="overflow-x-auto mt-2">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-[#E8F0FE]">
                <th className="border border-[#E2E8F0] px-4 py-3 text-left font-semibold text-[#0A1628]">Claim Component</th>
                <th className="border border-[#E2E8F0] px-4 py-3 text-left font-semibold text-[#0A1628]">Tickettooeurope.com Rule</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-[#F5F9FF] transition-colors">
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/80 font-medium">Claim Window</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">Within 24 hours of booking and before the first departure</td>
              </tr>
              <tr className="hover:bg-[#F5F9FF] transition-colors">
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/80 font-medium">Compared Price</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">Same itinerary, passenger mix, cabin, fare conditions, and mandatory charges</td>
              </tr>
              <tr className="hover:bg-[#F5F9FF] transition-colors">
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/80 font-medium">Proof Required</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">Booking reference, comparison URL where available, screenshots/evidence, timestamp, and currency</td>
              </tr>
              <tr className="hover:bg-[#F5F9FF] transition-colors">
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/80 font-medium">Mandatory Charges</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">Base fare, applicable airline charges, known taxes, and known mandatory agency charges</td>
              </tr>
              <tr className="hover:bg-[#F5F9FF] transition-colors">
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/80 font-medium">Excluded Prices</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">Optional ancillary services, member-only fares, coupon-only savings, opaque fares, loyalty redemptions, and non-public fares</td>
              </tr>
              <tr className="hover:bg-[#F5F9FF] transition-colors">
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/80 font-medium">Remedies</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">Verified difference refund, agency credit, or eligible cancellation/reversal where operationally feasible</td>
              </tr>
              <tr className="hover:bg-[#F5F9FF] transition-colors">
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/80 font-medium">Online vs. Assisted</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">Must be compared on a like-for-like service basis</td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    },
    {
      icon: Shield,
      title: "Verification Requirement",
      content: [
        "Any approved Price Match claim will be resolved only after Noam Flyers Inc. independently verifies that the lower fare was publicly available, bookable, and materially identical to the confirmed Tickettooeurope.com itinerary.",
        "Dynamic price differences, stale cached fares, membership-only promotions, unavailable fares, and prices that exclude mandatory charges will not qualify."
      ]
    },
    {
      icon: CheckCircle,
      title: "Our Commitment",
      content: [
        "Tickettooeurope.com aims to make airfare pricing as transparent and understandable as possible.",
        "Our Price Match Promise is designed to give customers a clear process for bringing a potentially lower publicly available fare to our attention while recognizing the highly dynamic nature of airline pricing and inventory.",
        "We encourage customers to provide complete and accurate documentation so that claims can be reviewed efficiently and consistently.",
        "",
        "Tickettooeurope.com",
        "Operated by Noam Flyers Inc."
      ]
    }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm mb-6">
            <Link href="/" className="text-[#1A3A6B] hover:text-[#4A8BCF] transition-colors">
              Home
            </Link>
            <span className="text-[#0A1628]/30">›</span>
            <span className="text-[#0A1628]/60">Price Match Promise</span>
          </nav>

          <div className="max-w-4xl mx-auto">
            {/* Header Section */}
            <div className="mb-8">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A1628] leading-tight">
                Price Match Promise
              </h1>
              <p className="text-sm text-[#0A1628]/60 mt-2">
                Tickettooeurope.com, operated by Noam Flyers Inc., is committed to presenting travel pricing in a transparent, reviewable, and fair manner.
              </p>
              <p className="text-sm text-[#0A1628]/60 mt-1">
                Tickettooeurope.com is an independent travel agency and is not an airline. Airline names, route information, schedules, fare brands, trademarks, and logos may appear on the Website solely to identify available travel inventory or supplier content. Their appearance does not imply any affiliation, endorsement, sponsorship, or ownership relationship between Noam Flyers Inc. and any airline unless expressly stated.
              </p>
              <p className="text-sm text-[#0A1628]/60 mt-1">
                Tickettooeurope.com may provide both online self-service booking and optional assisted booking through telephone, chat, or email. Pricing displayed online and pricing quoted through an assisted channel may differ when the service level differs, an assisted-booking fee applies, or availability and pricing change between channels.
              </p>
              <div className="w-12 h-1 bg-gradient-to-r from-[#1A3A6B] to-[#4A8BCF] rounded-full mt-3" />
            </div>

            {/* Sections */}
            {sections.map((section, index) => {
              const Icon = section.icon;
              const isTwoColumn = section.twoColumn;
              
              return (
                <div key={index} className="mt-8">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-[#E8F0FE] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon size={16} className="text-[#1A3A6B]" />
                    </div>
                    <h2 className="text-lg sm:text-xl font-bold text-[#0A1628]">
                      {section.title}
                    </h2>
                  </div>
                  <div className="space-y-3 text-sm sm:text-base text-[#0A1628]/70 leading-relaxed ml-11">
                    {Array.isArray(section.content) ? (
                      <div className={isTwoColumn ? "grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3" : "space-y-3"}>
                        {section.content.map((paragraph, pIndex) => {
                          // Check if paragraph is empty for spacing
                          if (paragraph === "") {
                            return <div key={pIndex} className="h-2" />;
                          }
                          // Check if paragraph starts with "•" to render as list item
                          if (paragraph.startsWith("•")) {
                            return (
                              <div key={pIndex} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-[#4A8BCF]" />
                                <span>{paragraph.substring(2)}</span>
                              </div>
                            );
                          }
                          // Check if it's a numbered item (starts with number followed by dot)
                          if (/^\d+\./.test(paragraph)) {
                            return <p key={pIndex} className="font-semibold text-[#0A1628] col-span-2">{paragraph}</p>;
                          }
                          return <p key={pIndex} className="col-span-2">{paragraph}</p>;
                        })}
                      </div>
                    ) : (
                      // If content is a React element (like the table), render it directly
                      section.content
                    )}
                  </div>
                </div>
              );
            })}

            {/* Call to Action */}
            <div className="mt-10 p-6 bg-gradient-to-r from-[#1A3A6B] to-[#4A8BCF] rounded-lg text-white">
              <h3 className="text-lg sm:text-xl font-bold mb-2 !text-white">
                Need Help With Your Travel Plans?
              </h3>
              <p className="text-sm mb-4 !text-white/80">
                Our travel experts are here to assist you with flight bookings, changes, and more.
              </p>
              <a
                href={`tel:${CONTACT.phoneRaw}`}
                className="inline-flex items-center gap-2 bg-white text-[#1A3A6B] px-5 py-2.5 rounded-lg font-semibold hover:bg-[#E8F0FE] transition-all duration-300 shadow-lg hover:scale-105"
              >
                <Phone size={16} />
                Call Us Now: {CONTACT.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}