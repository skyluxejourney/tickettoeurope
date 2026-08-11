// app/advertiser-disclosure/page.tsx
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
  CreditCard,
  Ticket,
  UserCheck,
  Mail,
  Plane,
  Info,
  Package,
  ChevronDown,
  Gift,
  TrendingUp,
  Link as LinkIcon,
  Megaphone,
} from "lucide-react";
import NextLink from "next/link"; 
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BRAND, CONTACT } from "@/app/constants";

export default function AdvertiserDisclosurePage() {
  const sections = [
    {
      icon: Megaphone,
      title: "1. Advertising and Commercial Relationships",
      content: [
        "Noam Flyers Inc. may receive compensation in connection with certain advertising or promotional relationships.",
        "Depending on the arrangement, compensation may include:",
        "• Advertising placement fees",
        "• Affiliate commissions",
        "• Referral fees",
        "• Cost-per-click compensation",
        "• Cost-per-acquisition compensation",
        "• Promotional or campaign fees",
        "• Sponsored-content payments",
        "• Media or marketing support",
        "• Preferred-placement fees",
        "• Other commercially agreed compensation",
        "The existence of compensation does not make Tickettooeurope.com the official website of an airline, hotel, cruise line, or other travel supplier.",
        "Compensation also does not automatically mean that Noam Flyers Inc. controls the supplier's prices, availability, operating policies, cancellation rules, or conditions of carriage."
      ],
      twoColumn: true
    },
    {
      icon: Eye,
      title: "2. Clear Advertising Identification",
      content: [
        "Tickettooeurope.com aims to identify paid or commercially influenced content clearly and in understandable language.",
        "Depending on the nature of the relationship, labels may include:",
        "• Advertisement",
        "• Sponsored",
        "• Paid Placement",
        "• Affiliate Link",
        "• Promoted Partner",
        "• Sponsored Placement",
        "• ReservationEase Offer — where applicable to a first-party service",
        "The label used should correspond to the actual commercial relationship.",
        "Noam Flyers Inc. does not intend to rely on vague language such as \"we work with great brands\" where a more direct explanation of a paid relationship is appropriate.",
        "Where a page contains a recommendation, promotion, or endorsement for which compensation may be received, the disclosure may appear near the beginning of the relevant content and/or near the applicable link, offer, or placement."
      ],
      twoColumn: true
    },
    {
      icon: Gift,
      title: "3. Types of Advertising and Promotional Content",
      content: [
        "Tickettooeurope.com may display different forms of commercial content.",
        "Examples may include:",
        "• Banner advertisements",
        "• Promotional tiles",
        "• Destination sponsorships",
        "• Travel-partner offers",
        "• Hotel or car rental promotions",
        "• Travel-financing offers",
        "• Card-related offers",
        "• Newsletter advertisements",
        "• Sponsored destination content",
        "• Affiliate offers",
        "• Referral placements",
        "• Preferred supplier placements",
        "• Promotional landing pages",
        "• Third-party travel offers",
        "Some promotional content may be advertising inventory purchased by a third party.",
        "Other content may involve an affiliate or referral relationship where Noam Flyers Inc. may receive compensation if a customer clicks, books, purchases, or otherwise completes a qualifying action.",
        "Tickettooeurope.com may also promote its own services. These are first-party promotions rather than third-party advertising."
      ],
      twoColumn: true
    },
    {
      icon: LinkIcon,
      title: "4. Affiliate Links",
      content: [
        "Some links displayed on Tickettooeurope.com may be affiliate or referral links.",
        "If a customer clicks or completes a qualifying transaction through such a link, Noam Flyers Inc. may receive compensation.",
        "Where appropriate, affiliate or referral content should be identified as such.",
        "Affiliate compensation does not necessarily increase the price paid by the customer. However, the applicable supplier's own pricing, terms, taxes, fees, and conditions will govern the underlying transaction."
      ]
    },
    {
      icon: FileText,
      title: "5. Sponsored Content",
      content: [
        "Noam Flyers Inc. may publish or display sponsored content, including destination guides, travel articles, promotional pages, newsletters, social-media content, or other editorial-style material.",
        "Where content has been materially sponsored or paid for by a third party, it may be identified using terms such as:",
        "• Sponsored",
        "• Paid Promotion",
        "• Sponsored Content",
        "A sponsorship does not necessarily mean that Noam Flyers Inc. independently endorses every product, service, statement, or representation made by the sponsoring company.",
        "Customers should review the applicable supplier's information and terms before making a purchase."
      ],
      twoColumn: true
    },
    {
      icon: TrendingUp,
      title: "6. Preferred or Paid Placement",
      content: [
        "Certain advertisers, suppliers, or partners may receive preferred placement through a commercial arrangement.",
        "Where a placement is materially influenced by payment or sponsorship, Tickettooeurope.com may identify the placement as:",
        "• Sponsored Placement",
        "• Paid Placement",
        "or another substantially similar disclosure.",
        "Paid placement should not be interpreted as a guarantee that the promoted supplier has the lowest price, best service, highest availability, or most suitable option for every customer."
      ],
      twoColumn: true
    },
    {
      icon: Search,
      title: "7. Search Results and Recommendations",
      content: [
        "Tickettooeurope.com may use various factors when displaying travel options, recommendations, or promotional content.",
        "Depending on the page or booking environment, these factors may include:",
        "• Price",
        "• Availability",
        "• Route relevance",
        "• Travel dates",
        "• Customer search criteria",
        "• Supplier participation",
        "• Popularity",
        "• Technical feed quality",
        "• Customer demand",
        "• Commercial relationships",
        "• Promotional arrangements",
        "Where a search result, recommendation, or placement is materially influenced by payment, sponsorship, or another commercial arrangement, the applicable commercial relationship may be disclosed near the relevant placement.",
        "Payment for placement does not automatically mean that an option is recommended solely because it is paid."
      ],
      twoColumn: true
    },
    {
      icon: Shield,
      title: "8. Supplier Identity and Independence",
      content: [
        "Tickettooeurope.com is an independent travel agency.",
        "If an airline, hotel, car-rental company, cruise line, or other travel supplier is displayed on the Website, that supplier's name, logo, trademark, or other identifying information may be used to identify the relevant travel product or service.",
        "The appearance of a supplier's branding does not necessarily mean that the customer is visiting that supplier's official website.",
        "Noam Flyers Inc. should not present supplier logos, names, URLs, telephone numbers, support channels, or other identifying information in a manner intended to falsely suggest that the customer is dealing directly with the supplier when the transaction is actually being handled by Noam Flyers Inc. or another intermediary.",
        "This principle applies to:",
        "• Advertisements",
        "• Search pages",
        "• Landing pages",
        "• Destination pages",
        "• Blogs",
        "• Emails",
        "• Social-media content",
        "• Promotional campaigns",
        "• Telephone scripts",
        "• Customer-service communications"
      ],
      twoColumn: true
    },
    {
      icon: Globe,
      title: "9. Third-Party Websites",
      content: [
        "Some advertisements, affiliate links, or promotional offers may take customers away from Tickettooeurope.com.",
        "Where a link directs a customer to an external website, the applicable context may identify that the customer is leaving Tickettooeurope.com.",
        "Once a customer leaves Tickettooeurope.com, the third party's own:",
        "• Pricing",
        "• Availability",
        "• Privacy practices",
        "• Cookie practices",
        "• Terms and conditions",
        "• Cancellation policies",
        "• Refund policies",
        "• Booking procedures",
        "may apply.",
        "Noam Flyers Inc. does not automatically control the conduct, content, availability, or policies of an independent third-party website."
      ],
      twoColumn: true
    },
    {
      icon: Database,
      title: "10. Advertising Technology and Measurement",
      content: [
        "Noam Flyers Inc. may use third-party advertising, analytics, attribution, or measurement technologies to operate, measure, and improve advertising campaigns.",
        "Depending on applicable settings and requirements, these technologies may help measure:",
        "• Impressions",
        "• Clicks",
        "• Conversions",
        "• Campaign reach",
        "• Attributed bookings",
        "• Audience suppression",
        "• Advertising performance",
        "• Website interactions",
        "Information about cookies, tracking technologies, analytics, and applicable privacy choices is addressed separately in the applicable Privacy Policy and Cookie Policy.",
        "This Advertiser Disclosure focuses on the commercial relationship behind advertising and promotional content."
      ],
      twoColumn: true
    },
    {
      icon: Users,
      title: "11. Social Media and Influencer Content",
      content: [
        "The same disclosure principles may apply to social-media content, creator campaigns, influencer promotions, and other endorsements.",
        "If Noam Flyers Inc. pays for, sponsors, or receives compensation in connection with an endorsement or promotional campaign, the commercial relationship should be disclosed in a manner that is reasonably visible where the endorsement is presented.",
        "Examples of appropriate language may include:",
        "• Sponsored",
        "• Paid Partnership",
        "• Advertisement",
        "• Paid Promotion",
        "• Affiliate Link",
        "A commercial disclosure should not be intentionally hidden in a location where a reasonable user would be unlikely to see it before relying on the endorsement."
      ],
      twoColumn: true
    },
    {
      icon: AlertCircle,
      title: "12. Advertising Does Not Guarantee Supplier Performance",
      content: [
        "An advertisement, sponsorship, affiliate relationship, or promotional placement does not guarantee:",
        "• Availability",
        "• Lowest pricing",
        "• Airline performance",
        "• Hotel performance",
        "• Flight operation",
        "• Schedule reliability",
        "• Refund eligibility",
        "• Cancellation eligibility",
        "• Supplier service quality",
        "The applicable supplier's own terms, fare rules, contract of carriage, booking conditions, and applicable law govern the underlying travel service."
      ],
      twoColumn: true
    },
    {
      icon: FileText,
      title: "13. Advertising Relationship Table",
      content: (
        <div className="overflow-x-auto mt-2">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-[#E8F0FE]">
                <th className="border border-[#E2E8F0] px-4 py-3 text-left font-semibold text-[#0A1628]">Relationship Type</th>
                <th className="border border-[#E2E8F0] px-4 py-3 text-left font-semibold text-[#0A1628]">Example</th>
                <th className="border border-[#E2E8F0] px-4 py-3 text-left font-semibold text-[#0A1628]">Appropriate User-Facing Label</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-[#F5F9FF] transition-colors">
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/80 font-medium">Sold advertising inventory</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">Banner advertisement from a travel brand</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">Advertisement</td>
              </tr>
              <tr className="hover:bg-[#F5F9FF] transition-colors">
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/80 font-medium">Affiliate relationship</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">Link that may generate commission from a qualifying purchase</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">Affiliate Link / We May Earn Commission</td>
              </tr>
              <tr className="hover:bg-[#F5F9FF] transition-colors">
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/80 font-medium">Sponsored editorial</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">Destination content funded by a commercial partner</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">Sponsored / Paid Promotion</td>
              </tr>
              <tr className="hover:bg-[#F5F9FF] transition-colors">
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/80 font-medium">Preferred placement</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">Supplier pays for highlighted positioning</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">Sponsored Placement / Paid Placement</td>
              </tr>
              <tr className="hover:bg-[#F5F9FF] transition-colors">
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/80 font-medium">First-party promotion</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">Noam Flyers Inc. promotes its own booking or support service</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">Tickettooeurope.com Offer / Our Service</td>
              </tr>
              <tr className="hover:bg-[#F5F9FF] transition-colors">
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/80 font-medium">External redirect</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">Link sends customer to an independent third-party website</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">You Are Leaving Tickettooeurope.com</td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    },
{
  icon: FileText,
  title: "17. Advertising Disclosure Process",
  content: (
    <div className="mt-2">
      <p className="text-sm sm:text-base text-[#0A1628]/70 leading-relaxed mb-6">
        The general commercial-disclosure process may be summarized as follows:
      </p>
      
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#4A8BCF] to-[#1A3A6B] opacity-30" />
        
        <div className="space-y-4">
          {/* Step 1 */}
          <div className="relative flex items-start gap-4">
            <div className="relative z-10 flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#1A3A6B] to-[#4A8BCF] flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-[#1A3A6B]/20">
                1
              </div>
            </div>
            <div className="flex-1 pt-1.5">
              <p className="text-sm sm:text-base font-medium text-[#0A1628]">Content or Offer Appears on Tickettooeurope.com</p>
              <p className="text-xs text-[#0A1628]/50">Commercial content is published on the website</p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative flex items-start gap-4">
            <div className="relative z-10 flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-[#E8F0FE] border-2 border-[#4A8BCF]/30 flex items-center justify-center text-[#1A3A6B] font-bold text-sm">
                2
              </div>
            </div>
            <div className="flex-1 pt-1.5">
              <p className="text-sm sm:text-base font-medium text-[#0A1628]">Is There Compensation, Sponsorship, or Affiliate Consideration?</p>
              <p className="text-xs text-[#0A1628]/50">Evaluation of commercial relationship</p>
            </div>
          </div>

          {/* Step 3 - Decision */}
          <div className="relative flex items-start gap-4">
            <div className="relative z-10 flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-[#E8F0FE] border-2 border-[#4A8BCF]/30 flex items-center justify-center text-[#1A3A6B] font-bold text-sm">
                3
              </div>
            </div>
            <div className="flex-1 pt-1.5">
              <p className="text-sm sm:text-base font-medium text-[#0A1628]">No → Normal Site/Service Identification</p>
              <p className="text-xs text-[#0A1628]/50">Standard content without commercial disclosure</p>
              <p className="text-sm font-medium text-[#1A3A6B] mt-1">Yes → Apply Appropriate Commercial Label</p>
              <p className="text-xs text-[#0A1628]/50">Add disclosure such as "Sponsored" or "Advertisement"</p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="relative flex items-start gap-4">
            <div className="relative z-10 flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-[#E8F0FE] border-2 border-[#4A8BCF]/30 flex items-center justify-center text-[#1A3A6B] font-bold text-sm">
                4
              </div>
            </div>
            <div className="flex-1 pt-1.5">
              <p className="text-sm sm:text-base font-medium text-[#0A1628]">Does the Link Leave Tickettooeurope.com?</p>
              <p className="text-xs text-[#0A1628]/50">Determines if user is redirected to external site</p>
            </div>
          </div>

          {/* Step 5 - Decision */}
          <div className="relative flex items-start gap-4">
            <div className="relative z-10 flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-[#E8F0FE] border-2 border-[#4A8BCF]/30 flex items-center justify-center text-[#1A3A6B] font-bold text-sm">
                5
              </div>
            </div>
            <div className="flex-1 pt-1.5">
              <p className="text-sm sm:text-base font-medium text-[#0A1628]">Yes → Identify External Destination Where Appropriate</p>
              <p className="text-xs text-[#0A1628]/50">Disclose that user is leaving the website</p>
              <p className="text-sm font-medium text-[#1A3A6B] mt-1">No → Keep Applicable Commercial Disclosure Near the Placement</p>
              <p className="text-xs text-[#0A1628]/50">Maintain disclosure near the commercial content</p>
            </div>
          </div>

          {/* Step 6 - Final */}
          <div className="relative flex items-start gap-4">
            <div className="relative z-10 flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#1A3A6B] to-[#4A8BCF] flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-[#1A3A6B]/30 ring-2 ring-[#4A8BCF]/20">
                6
              </div>
            </div>
            <div className="flex-1 pt-1.5">
              <p className="text-sm sm:text-base font-bold text-[#1A3A6B]">Third-Party Terms May Apply After Redirect</p>
              <p className="text-xs text-[#0A1628]/50">External site's policies and terms govern the transaction</p>
            </div>
          </div>
        </div>

        {/* Completion Badge */}
        <div className="mt-6 flex items-center justify-center gap-2">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#4A8BCF]/30" />
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8F0FE] border border-[#4A8BCF]/20">
            <CheckCircle size={14} className="text-[#1A3A6B]" />
            <span className="text-xs font-medium text-[#1A3A6B]">Disclosure Complete</span>
          </div>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#4A8BCF]/30" />
        </div>

        <p className="mt-4 text-xs text-[#0A1628]/60 text-center">
          Commercial relationships are disclosed clearly and transparently to customers.
        </p>
      </div>
    </div>
  )
},
    {
      icon: FileText,
      title: "18. Changes to This Advertiser Disclosure",
      content: [
        "Noam Flyers Inc. may update this Advertiser Disclosure from time to time to reflect changes in its advertising relationships, marketing practices, technology, third-party advertising services, or applicable legal requirements.",
        "The latest version will be made available on Tickettooeurope.com.",
        "Where appropriate, material changes may be accompanied by an updated \"Last Updated\" date.",
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
  <NextLink href="/" className="text-[#1A3A6B] hover:text-[#4A8BCF] transition-colors">
    Home
  </NextLink>
  <span className="text-[#0A1628]/30">›</span>
  <span className="text-[#0A1628]/60">Advertiser Disclosure</span>
</nav>

          <div className="max-w-4xl mx-auto">
            {/* Header Section */}
            <div className="mb-8">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A1628] leading-tight">
                Advertiser Disclosure
              </h1>
              <p className="text-sm text-[#0A1628]/60 mt-2">
                This Advertiser Disclosure explains how Tickettooeurope.com, operated by Noam Flyers Inc., may display advertising, sponsored placements, affiliate links, compensated recommendations, referral arrangements, promotional offers, and other commercial content across its Website and related communication channels.
              </p>
              <p className="text-sm text-[#0A1628]/60 mt-1">
                Tickettooeurope.com is an independent travel agency and is not an airline, hotel operator, cruise line, airport authority, government agency, or other transportation operator.
              </p>
              <p className="text-sm text-[#0A1628]/60 mt-1">
                The presence of an airline, hotel, travel supplier, financial product, destination, brand, or other third-party advertiser on Tickettooeurope.com does not by itself mean that Noam Flyers Inc. owns, operates, controls, or officially represents that company.
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
                  <div className="text-sm sm:text-base text-[#0A1628]/70 leading-relaxed ml-11">
                    {Array.isArray(section.content) ? (
                      <div className={isTwoColumn ? "grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3" : "space-y-3"}>
                        {section.content.map((paragraph: any, pIndex) => {
                          // 1. Empty spacer
                          if (paragraph === "") {
                            return <div key={pIndex} className="h-2 col-span-2" />;
                          }

                          // 2. Render Label: Value objects (Fixes overlapping issue)
                          if (paragraph && typeof paragraph === 'object' && paragraph.label && paragraph.value) {
                            return (
                              <div key={pIndex} className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-1.5 break-words col-span-2 md:col-span-1">
                                <span className="font-medium text-[#2c5aa0] flex-shrink-0">
                                  {paragraph.label}:
                                </span>
                                <span className="text-[#0A1628]/70">
                                  {paragraph.value}
                                </span>
                              </div>
                            );
                          }

                          // 3. Handle string content (Normal paragraph)
                          if (typeof paragraph === 'string') {
                            return <p key={pIndex} className="col-span-2 leading-relaxed">{paragraph}</p>;
                          }
                          
                          return null;
                        })}
                      </div>
                    ) : (
                      // If content is a React element (like the table), wrap it for scrolling
                      <div className="w-full overflow-x-auto overflow-y-hidden -mx-4 px-4 sm:mx-0 sm:px-0">
                        <div className="min-w-[640px] sm:min-w-0">
                          {section.content}
                        </div>
                      </div>
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