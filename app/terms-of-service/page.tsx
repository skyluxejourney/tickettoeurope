// app/terms/page.tsx
"use client";

import { 
  Shield, 
  FileText, 
  Scale, 
  Globe, 
  CheckCircle,
  Phone,
  Lock,
  Calculator,
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
  Sliders,
  BarChart,
  Target,
  User,
  Receipt,
  RefreshCw,
  HelpCircle,
  Landmark,
  Building,
  Banknote,
  BookOpen,
  ListChecks,
  Scale as ScaleIcon,
  Award,
  Fingerprint,
  BadgeCheck,
  BookMarked,
} from "lucide-react";
import NextLink from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BRAND, CONTACT } from "@/app/constants";

export default function TermsPage() {
  const sections = [
    {
      icon: BookOpen,
      title: "1. Identity, Scope and Definitions",
      content: [
        "",
        "Corporate Identity and Operator",
        "These Terms & Conditions govern access to and use of the TickettoEurope.com website, any associated mobile experience, any contact-centre or phone-assisted booking service offered under the TickettoEurope.com brand, and any booking request, ticketing request, exchange, cancellation request, refund request, waiver request, reissue request, or related customer-support activity processed by Noam Flyers Inc. for travel services sold through TickettoEurope.com.",
        "For purposes of these Terms, \"TickettoEurope.com,\" \"Noam Flyers Inc.,\" \"we,\" \"us,\" and \"our\" refer to the platform operator and, where relevant, its authorised employees, agents, payment processors, technology providers, suppliers, and service subcontractors acting within the scope of their engagement.",
        "These Terms apply whether you are browsing the website, requesting a quote, creating an account, entering passenger data, completing a payment, requesting assisted support by phone, receiving a booking acknowledgement, receiving a ticketing confirmation, or requesting post-ticket servicing.",
        "By continuing to use TickettoEurope.com, or by instructing us to place, modify, cancel, or service a booking, you agree to these Terms and to any ancillary policy referenced in them, including our Privacy Policy, Cookie Policy, Refund and Cancellation Policy, Fees Disclosure, and any booking-specific fare rule or supplier notice shown during the purchase flow.",
        "",
        "ARC Accreditation and Verification",
        "Noam Flyers Inc. is an ARC-accredited travel agency.",
        "ARC accreditation reflects participation in recognised U.S. travel-agency ticketing and settlement infrastructure. It does not change the legal identity of Noam Flyers Inc. into that of an airline, and it does not mean that Noam Flyers Inc. owns, operates, controls, or represents any airline.",
        "Accordingly, any reference in these Terms to ARC accreditation should be understood as a statement about agency participation and recognised ticketing and settlement infrastructure, and not as a statement of airline ownership, airline partnership, airline endorsement, airline sponsorship, or airline operational control.",
        "Customers may independently verify the agency's participation status through ARC's official verification resources.",
        "No ARC accreditation number is disclosed in these Terms.",
        "",
        "Independent Agency Status and Airline Non-Affiliation",
        "This clause is fundamental and is repeated deliberately.",
        "TickettoEurope.com is an independent travel agency platform operated by Noam Flyers Inc. TickettoEurope.com is not an airline.",
        "TickettoEurope.com does not operate aircraft. TickettoEurope.com does not control airline schedules, aircraft swaps, staffing, airport operations, baggage systems, check-in counters, boarding decisions, or air-traffic events.",
        "TickettoEurope.com is not affiliated with, endorsed by, or authorised to speak on behalf of any airline merely because an airline name, route, fare, brand name, logo, city pair, flight number, or timetable appears on the platform.",
        "The platform provides access to travel inventory and agency services. The actual air transportation is supplied by the relevant airline or airlines.",
        "That distinction matters for liability, refunds, schedule changes, baggage, denied boarding, disruption handling, special-service approval, and many other operational issues.",
        "Airline conditions of carriage, fare rules, airport rules, security rules, immigration rules, and operational decisions remain the responsibility of the carrier and relevant authorities, not TickettoEurope.com.",
        "For clarity, TickettoEurope.com may, depending on the itinerary and system access available, issue, request, or service tickets using accredited agency channels. That ability does not alter the fundamental allocation of responsibility:",
        "TickettoEurope.com facilitates travel arrangements; airlines provide the transportation.",
        "This document therefore uses language such as \"subject to airline rules,\" \"may,\" \"depends on,\" \"not guaranteed until ticketed,\" and \"where applicable law requires\" because those conditions accurately reflect the structure of the travel industry.",
        "",
        "Definitions",
        "For purposes of these Terms:",
        "\"Travel Supplier\" means any airline, codeshare carrier, partner carrier, consolidator, wholesaler, GDS-linked supplier, hotel, transportation provider, or other travel-service provider whose inventory or rules apply to your booking.",
        "\"Booking Request\" means your request to search, reserve, or purchase a travel service through TickettoEurope.com. Depending on the workflow, a booking request may exist before ticket issuance or final supplier confirmation.",
        "\"Ticketed\" means that an airline ticket has been issued and/or that the relevant supplier reservation has been made and confirmed with an identifying reference such as a ticket number, PNR, reservation number, or record locator.",
        "\"PNR\" means a passenger name record, airline confirmation code, or record locator.",
        "\"Merchant of Record\" means the entity shown on the financial charge statement for the relevant purchase. For applicable U.S.-related transactions, the merchant of record may have refund obligations depending on the circumstances and applicable law.",
        "\"Service Fee\" means any fee charged by Noam Flyers Inc. / TickettoEurope.com for agency work, booking support, researched itinerary handling, manual servicing, exchanges, refund processing support, cancellation handling, waiver submissions, special-service support, or similar administrative work.",
        "Service fees are separate from airline fares, airline penalties, fare differences, taxes, airport charges, or optional supplier fees."
      ]
    },
    {
      icon: Shield,
      title: "Acceptance, Eligibility and Permitted Use",
      content: [
        "You may use TickettoEurope.com only if you are legally capable of entering a binding contract.",
        "You must provide accurate information and use the platform only for legitimate travel-shopping, travel-booking, and booking-servicing purposes.",
        "If you make a booking for another person or for multiple travellers, you represent that you have authority to do so and that all travellers accept being bound by these Terms, any booking-specific restrictions, and the applicable supplier rules.",
        "You must not use the platform for speculative, fictitious, fraudulent, duplicative, abusive, or high-risk bookings; automated scraping without written permission; chargeback abuse; circumvention of airline fare rules; hidden-city or throwaway-ticketing conduct that violates supplier rules; or any unlawful purpose.",
        "We may suspend, refuse, or cancel access or a booking request if we reasonably suspect a breach of these Terms, a risk to payment integrity, or a breach of supplier restrictions.",
        "",
        "Supplier Terms and Incorporated Airline Rules",
        "By booking through TickettoEurope.com, you acknowledge that your journey is subject not only to these Terms but also to the rules of the relevant Travel Supplier.",
        "These underlying airline terms may include liability limits, baggage limits, check-in rules, refusal-to-carry provisions, schedule-change rights, rerouting provisions, and claim deadlines.",
        "If there is a conflict between these Terms and a mandatory airline rule attached to your fare, ticket, or contract of carriage, the more specific rule applicable to the underlying transport service may apply, except to the extent that non-excludable consumer law requires a different result.",
        "Nothing in these Terms is intended to override a statutory right that cannot legally be excluded."
      ]
    },
    {
      icon: CreditCard,
      title: "2. Booking, Pricing, Fees and Payment",
      content: [
        "Booking Channels",
        "TickettoEurope.com supports two primary booking channels:",
        "",
        "• Online self-service: You search, compare, enter passenger details, review the total, and pay through the website yourself. May carry no assisted-service fee or a lower transaction/service fee displayed during checkout. Faster and usually lower-cost, but you are responsible for entering all information correctly.",
        "• Assisted phone booking: You speak with an agent who helps research options, explains fare conditions, enters data, and assists with placing the booking. A separate assisted-booking or contact-centre fee may apply and may be higher than online fees. Useful for complex itineraries, multi-city travel, schedule-risk questions, or travellers who need additional assistance.",
        "• Post-ticket support: Work requested after ticket issuance, such as exchange, cancellation, waiver filing, refund support, name-correction handling, or seat/baggage request support. Separate post-ticketing service fees may apply, in addition to airline fees or fare differences.",
        "",
        "TickettoEurope.com adopts the following structural logic:",
        "Online and phone bookings are not automatically priced the same, and post-ticket work is a separate service category.",
        "Calling TickettoEurope.com is optional. If you choose assisted support, pricing may reflect the additional human handling involved.",
        "",
        "Booking Flow",
        "The booking flow below is a simplified representation of how TickettoEurope.com generally processes a flight booking request:",
        "Search itinerary → Select flights → Review total price → Enter traveller details → Pay Noam Flyers Inc. → Booking request submitted → Airline or supplier processing → Ticket issued / PNR created → Confirmation sent",
        "Industry booking terms commonly distinguish between a booking request, acknowledgement email, and eventual ticket issuance or supplier confirmation.",
        "Accordingly, an initial acknowledgement email is not necessarily final contractual confirmation, and price, availability, and dates are not guaranteed until the travel supplier confirms and the ticket is issued, unless a supplier-specific or instant-ticketing workflow clearly states otherwise.",
        "",
        "Dynamic Pricing and Fare Accuracy",
        "Air fares are dynamic.",
        "Inventory, booking class, seat availability, route combinations, carrier-imposed charges, and taxes may change before ticketing.",
        "Every quote shown on TickettoEurope.com should therefore be understood as:",
        "• subject to availability;",
        "• subject to fare-rule validation;",
        "• subject to supplier confirmation; and",
        "• subject to correction of a genuine pricing or tax error.",
        "A booking may proceed through several stages, including search, selection, payment authorisation, supplier validation, and ticket issuance.",
        "If a fare can no longer be honoured because airline inventory changed, a booking class closed, taxes or surcharges changed, or an obvious pricing error occurred, we may offer an updated price, an alternative itinerary, a void or reversal where possible, or cancellation of the pending request.",
        "A displayed fare is not the same thing as a guaranteed ticket.",
        "The booking becomes materially firmer once the travel supplier confirms the booking and the ticket is issued."
      ],
      twoColumn: true
    },
    {
      icon: FileText,
      title: "Total Price Disclosure, Taxes and Surcharges",
      content: [
        "Where an airfare is advertised or displayed as a price to purchase a ticket, applicable mandatory government taxes and fees and mandatory carrier-imposed charges should be reflected as required by applicable law.",
        "Accordingly, TickettoEurope.com aims to present the total amount payable at the point of payment confirmation while also allowing the customer to understand the structure of that price where a breakdown is displayed.",
        "The total price shown before payment may include:",
        "• Base fare — Core airfare charged by the airline for the booked fare basis / inventory. (Payable at booking)",
        "• Carrier-imposed surcharge — Mandatory airline-imposed charge attached to the fare. (Payable at booking)",
        "• Government taxes and airport charges — Mandatory taxes, fees, passenger facility, security, inspection, or similar charges imposed by authorities. (Payable at booking)",
        "• TickettoEurope.com service fee — Agency booking or servicing fee charged by Noam Flyers Inc., if applicable. (Payable at booking if disclosed in the total)",
        "• Optional airline extras — Charges for bags, seats, upgrades, meals, lounge, priority, Wi-Fi, or other optional ancillaries. (Sometimes; may also be paid later to the airline)",
        "• Airport / border / entry charges not collected at booking — Certain destination-based charges, visa costs, border charges, or locally payable amounts. (Not always)",
        "Nothing in these Terms guarantees that every possible travel-related cost is collected at checkout.",
        "Optional supplier charges may be payable separately or later depending on the itinerary and service selected.",
        "TickettoEurope.com will disclose the amount being charged by Noam Flyers Inc. before payment, but other supplier-imposed or authority-imposed costs may still apply depending on the itinerary."
      ],
      twoColumn: true
    },
    {
      icon: DollarSign,
      title: "TickettoEurope.com Service-Fee Framework",
      content: (
        <div className="overflow-x-auto mt-2">
          <p className="text-xs text-[#0A1628]/60 mb-3">
            The following service-fee schedule is drafted to provide transparency regarding potential agency charges. Unless a lower amount is stated during checkout, quoted by an agent, or required by applicable law, the following maximum TickettoEurope.com agency fees may apply in USD or local-currency equivalent.
          </p>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-[#E8F0FE]">
                <th className="border border-[#E2E8F0] px-4 py-3 text-left font-semibold text-[#0A1628]">TickettoEurope.com Fee Category</th>
                <th className="border border-[#E2E8F0] px-4 py-3 text-left font-semibold text-[#0A1628]">Fee Cap / Range</th>
                <th className="border border-[#E2E8F0] px-4 py-3 text-left font-semibold text-[#0A1628]">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-[#F5F9FF] transition-colors">
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/80 font-medium">Online self-service booking fee</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">USD 0.00 – USD 50.00 per traveller</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">Applies where a service fee is shown during website checkout.</td>
              </tr>
              <tr className="hover:bg-[#F5F9FF] transition-colors">
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/80 font-medium">Complex online itinerary fee</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">Up to USD 100.00 per traveller</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">May apply to multi-city, mixed-carrier, non-standard fare constructions, or manually validated itineraries.</td>
              </tr>
              <tr className="hover:bg-[#F5F9FF] transition-colors">
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/80 font-medium">Assisted phone booking fee</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">USD 10.00 – USD 200.00 per traveller</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">May be higher for complex, round-the-world, premium-cabin, or urgent manual bookings.</td>
              </tr>
              <tr className="hover:bg-[#F5F9FF] transition-colors">
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/80 font-medium">Alternative airport / date research fee</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">Up to USD 50.00 per traveller</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">Applies where a customised manual search is requested.</td>
              </tr>
              <tr className="hover:bg-[#F5F9FF] transition-colors">
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/80 font-medium">Same-day urgent manual ticket review</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">Up to USD 75.00 per traveller</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">Applies to urgent manual servicing where system automation is not sufficient.</td>
              </tr>
              <tr className="hover:bg-[#F5F9FF] transition-colors">
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/80 font-medium">Post-ticket voluntary change / exchange handling fee</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">USD 25.00 – USD 200.00 per traveller</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">Plus any airline fee and any fare difference.</td>
              </tr>
              <tr className="hover:bg-[#F5F9FF] transition-colors">
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/80 font-medium">Post-ticket voluntary cancellation for future credit</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">USD 40.00 – USD 100.00 per traveller</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">Plus any airline-imposed cancellation cost or credit restriction.</td>
              </tr>
              <tr className="hover:bg-[#F5F9FF] transition-colors">
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/80 font-medium">Post-ticket voluntary cancellation / refund handling</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">USD 50.00 – USD 250.00 per traveller</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">Applies to refund requests, whether or not ultimately approved by the airline, unless service has not been performed or applicable law requires otherwise.</td>
              </tr>
              <tr className="hover:bg-[#F5F9FF] transition-colors">
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/80 font-medium">Name-correction / reissue assistance</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">Up to USD 50.00 per traveller</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">Minor corrections only if permitted by the carrier or validating ticket stock.</td>
              </tr>
              <tr className="hover:bg-[#F5F9FF] transition-colors">
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/80 font-medium">Waiver / special-case support</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">USD 50.00 – USD 150.00 per traveller</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">Examples may include medical submissions, bereavement, duplicate-ticket, visa, denied-boarding documentation, or no-show review.</td>
              </tr>
              <tr className="hover:bg-[#F5F9FF] transition-colors">
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/80 font-medium">Special-service request support</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">Up to USD 35.00 per request or USD 75.00 per traveller</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">Seats, SSRs, wheelchair notation, infant linkage, unaccompanied-minor coordination, or similar requests are request-only and not guaranteed.</td>
              </tr>
            </tbody>
          </table>
          <div className="mt-4 space-y-2 text-sm text-[#0A1628]/70">
            <p><strong>Important Rules About TickettoEurope.com Fees</strong></p>
            <p>First, service fees are generally non-refundable once the relevant agency service has been performed, unless these Terms expressly provide otherwise, a lower policy is shown in the booking flow, the service request was never actually performed, or a non-excludable legal rule requires a refund.</p>
            <p>Transaction fees and post-ticketing service fees are separate from supplier fees.</p>
            <p>Second, where an assisted cancellation or refund request is made shortly after booking and the airline fare remains voidable or otherwise eligible under airline policy, TickettoEurope.com may choose to waive, reduce, or refund some portion of its own service fee.</p>
            <p>Any such accommodation is discretionary unless clearly confirmed in writing for the relevant booking.</p>
            <p>Third, if an airline denies a refund, denies a voluntary change, or refuses a waiver, the fact that the supplier declined the request does not automatically mean that no agency work was performed.</p>
            <p>If TickettoEurope.com researched alternatives, contacted the supplier, filed a request, documented the case, or revalidated eligibility, an agency service fee may remain payable or non-refundable.</p>
          </div>
        </div>
      )
    },
    {
      icon: Calculator,
      title: "Sample Price Calculations",
      content: (
        <div className="overflow-x-auto mt-2">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-[#E8F0FE]">
                <th className="border border-[#E2E8F0] px-4 py-3 text-left font-semibold text-[#0A1628]">Example</th>
                <th className="border border-[#E2E8F0] px-4 py-3 text-left font-semibold text-[#0A1628]">Illustrative Breakdown</th>
                <th className="border border-[#E2E8F0] px-4 py-3 text-left font-semibold text-[#0A1628]">Illustrative Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-[#F5F9FF] transition-colors">
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/80 font-medium">Simple online economy booking</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">Base fare USD 220.00 + carrier surcharge USD 18.00 + taxes and airport fees USD 46.00 + TickettoEurope.com online service fee USD 12.00</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">USD 296.00</td>
              </tr>
              <tr className="hover:bg-[#F5F9FF] transition-colors">
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/80 font-medium">Phone-assisted international multi-city</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">Base fare USD 640.00 + carrier surcharge USD 52.00 + taxes and airport fees USD 118.00 + TickettoEurope.com assisted-booking fee USD 70.00</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">USD 880.00</td>
              </tr>
              <tr className="hover:bg-[#F5F9FF] transition-colors">
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/80 font-medium">Voluntary exchange after ticketing</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">Fare difference USD 85.00 + airline exchange penalty USD 0.00 + TickettoEurope.com exchange handling fee USD 50.00</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">USD 135.00</td>
              </tr>
              <tr className="hover:bg-[#F5F9FF] transition-colors">
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/80 font-medium">Refund request on refundable fare</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">Original total USD 900.00 – refundable airline amount USD 0.00 retained – TickettoEurope.com refund handling fee USD 50.00</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">Estimated refund USD 850.00</td>
              </tr>
              <tr className="hover:bg-[#F5F9FF] transition-colors">
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/80 font-medium">Non-refundable fare converted to future credit</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">Original total USD 420.00 – airline cancellation penalty / credit restriction according to fare rule + TickettoEurope.com future-credit handling fee USD 40.00</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">Varies</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs text-[#0A1628]/60 mt-3">
            These examples are illustrative only and do not constitute promises of any specific live fare, fee, tax, or refund outcome.
          </p>
        </div>
      )
    },
    {
      icon: Lock,
      title: "Payment Authorisation, Merchant of Record and Secure Processing",
      content: [
        "Payments made through TickettoEurope.com are processed by Noam Flyers Inc. using payment methods made available during checkout or communicated by an authorised agent during an assisted booking flow.",
        "Depending on the purchase path, the financial statement descriptor may show Noam Flyers Inc., TickettoEurope.com, or another disclosed trade descriptor used by the operator.",
        "The descriptor shown on your statement matters because, for eligible transactions, the merchant of record may have responsibility for processing applicable airfare refunds.",
        "TickettoEurope.com may require full payment at the time of booking unless an instalment or deferred-payment option is expressly offered.",
        "By submitting payment information, you authorise Noam Flyers Inc. and its payment processors to charge the total amount shown or quoted to you, including applicable taxes, surcharges, and disclosed service fees.",
        "We may also pre-authorise or otherwise validate a payment method before final confirmation to reduce fraud, card misuse, or settlement failures.",
        "No online system can be guaranteed to be completely immune from unauthorised access, error, outage, or third-party compromise. TickettoEurope.com nevertheless intends to use secure payment workflows and service providers designed around recognised payment-data protection practices."
      ]
    },
    {
      icon: AlertCircle,
      title: "Failed Payments, Reversals and Chargebacks",
      content: [
        "If a payment authorisation fails, is reversed, is later declined, is flagged as high risk, or cannot be completed for settlement reasons, the booking request may be suspended, cancelled, or never finalised.",
        "A ticket is not guaranteed merely because you reached the end of a checkout screen if the payment did not settle or the booking was blocked for verification.",
        "If you believe a charge is unauthorised, duplicated, billed in error, or was taken for a service not delivered, you should contact TickettoEurope.com first so that we can investigate.",
        "Nothing in these Terms removes or limits any statutory card-dispute rights available to you.",
        "If you initiate a chargeback while travel remains pending, live, or serviceable, we may pause non-essential booking support while the billing dispute is under review.",
        "We may provide relevant records to an issuer, acquirer, processor, or dispute-resolution body to contest a dispute that we reasonably believe is inaccurate, abusive, or inconsistent with the services actually provided.",
        "If a chargeback is resolved in our favour and the booking is to remain active, you may need to repay the outstanding amount before additional servicing is provided.",
        "Fraudulent or bad-faith chargeback activity may result in cancellation of accounts, refusal of future bookings, and pursuit of recovery where lawful."
      ]
    },
    {
      icon: DollarSign,
      title: "Pricing Errors, Tax Changes and Currency Conversion",
      content: [
        "Despite reasonable efforts to publish accurate fares and totals, technical or human errors may occur.",
        "If there is a genuine and demonstrable pricing error, tax miscalculation, stale inventory error, or carrier surcharge change, TickettoEurope.com may contact you with the corrected amount and the options available.",
        "Where the platform displays a local-currency equivalent, the amount finally posted by your bank or card issuer may differ because of exchange rates, issuer fees, processor settlement timing, or foreign-transaction rules.",
        "Unless expressly stated otherwise, agency fee tables shown in these Terms are denominated in USD for illustration and policy-capping purposes."
      ]
    },
    {
      icon: Ticket,
      title: "3. Ticketing, Confirmation, Cancellations and Refunds",
      content: [
        "Fulfilment Policy and Ticket Issuance",
        "TickettoEurope.com's fulfilment policy is simple in principle but important in operation:",
        "A booking request is fulfilled when the relevant ticket is issued and/or the relevant reservation is confirmed and communicated to you, subject to supplier-specific exceptions.",
        "A booking acknowledgement, order number, payment receipt, or \"request received\" message should not automatically be read as proof that the airline has finally accepted the booking.",
        "TickettoEurope.com may need to validate inventory, pass the booking into airline or GDS queues, complete risk checks, request manual fare validation, or await supplier confirmation before issuing final ticket details.",
        "Reservation request → Validation → Ticketing → Confirmation"
      ]
    },
    {
      icon: Clock,
      title: "Ticketing Timelines and Possible Delays",
      content: (
        <div className="overflow-x-auto mt-2">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-[#E8F0FE]">
                <th className="border border-[#E2E8F0] px-4 py-3 text-left font-semibold text-[#0A1628]">Stage</th>
                <th className="border border-[#E2E8F0] px-4 py-3 text-left font-semibold text-[#0A1628]">Typical Status</th>
                <th className="border border-[#E2E8F0] px-4 py-3 text-left font-semibold text-[#0A1628]">Typical Timing</th>
                <th className="border border-[#E2E8F0] px-4 py-3 text-left font-semibold text-[#0A1628]">Important Note</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-[#F5F9FF] transition-colors">
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/80 font-medium">Search and quote</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">Live fare display or cached fare display</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">Immediate</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">Fare may change before ticketing.</td>
              </tr>
              <tr className="hover:bg-[#F5F9FF] transition-colors">
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/80 font-medium">Payment authorisation</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">Card or other payment check</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">Seconds to minutes</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">Payment success does not itself guarantee ticketing.</td>
              </tr>
              <tr className="hover:bg-[#F5F9FF] transition-colors">
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/80 font-medium">Fraud / verification review</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">Cardholder or itinerary validation</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">Immediate to 24 hours</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">May require customer response.</td>
              </tr>
              <tr className="hover:bg-[#F5F9FF] transition-colors">
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/80 font-medium">Supplier / airline processing</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">Booking queue, PNR creation, ticketing message</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">Minutes to several hours</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">Delays may occur during disruption, schedule changes, manual review, or system outages.</td>
              </tr>
              <tr className="hover:bg-[#F5F9FF] transition-colors">
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/80 font-medium">Confirmation dispatch</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">Email / SMS / dashboard</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">After ticket issuance</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">Customer should review details promptly.</td>
              </tr>
              <tr className="hover:bg-[#F5F9FF] transition-colors">
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/80 font-medium">Airline verification</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">Traveller checks the PNR with the airline</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">After receipt of PNR</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">Recommended, especially for complex or urgent itineraries.</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs text-[#0A1628]/60 mt-3">
            Customers should review confirmation documents promptly and report any apparent issue or discrepancy as soon as reasonably possible.
          </p>
        </div>
      )
    },
    {
      icon: Mail,
      title: "Confirmation, PNR and Airline Verification",
      content: [
        "Once a booking is ticketed, TickettoEurope.com will ordinarily send confirmation containing booking details such as passenger names, itinerary, supplier name, and a PNR, record locator, ticket number, or other identifying reference.",
        "Customers should keep confirmation codes and PNRs confidential and should not share them unnecessarily.",
        "After receiving confirmation, you should:",
        "• check the spelling of all traveller names immediately;",
        "• verify travel dates;",
        "• verify departure and destination airports;",
        "• review all stopovers and connections;",
        "• confirm passport and travel-document alignment for international itineraries;",
        "• check the operating carrier on codeshare or mixed-carrier itineraries; and",
        "• verify the booking with the airline once the PNR is available, especially where travel is imminent or the itinerary is complex.",
        "A confirmation number is an indicator that a reservation exists, but it does not override airline rules relating to check-in, schedule changes, seat assignment, travel documents, baggage, or ancillary purchases."
      ],
      twoColumn: true
    },
    {
      icon: Clock,
      title: "24-Hour Handling and Agency Policy",
      content: [
        "The U.S. Department of Transportation's 24-hour rule for qualifying direct-airline bookings does not automatically apply to tickets purchased through travel agents or online travel agencies.",
        "TickettoEurope.com therefore adopts the following position:",
        "If you book through TickettoEurope.com, a penalty-free cancellation is not automatically guaranteed merely because the request falls within 24 hours.",
        "Where the airline fare rule, supplier void rule, or TickettoEurope.com policy allows it, we may process a 24-hour cancellation, void, or refund.",
        "If an assisted agent performs cancellation work, a reduced or waived agency fee may apply, but is not guaranteed unless shown in writing for the specific booking.",
        "If the fare was instantly ticketed, partially ticketed, contains non-voidable supplier content, or involves agency work already performed, a complete unwind may not be possible."
      ]
    },
    {
      icon: RefreshCw,
      title: "Voluntary Changes and Exchanges",
      content: [
        "If you ask to change an existing ticket:",
        "• the airline or validating carrier must permit the change;",
        "• the new itinerary must have eligible inventory;",
        "• any fare difference must be paid;",
        "• any airline exchange/change penalty must be paid where applicable;",
        "• any TickettoEurope.com post-ticket exchange fee may apply; and",
        "• the reissued ticket may carry new or different fare rules.",
        "Where a route has no airline change fee but fares have increased, the principal cost may be the fare difference plus the TickettoEurope.com servicing fee.",
        "Where the fare chosen is highly restrictive, no change may be permitted."
      ],
      twoColumn: true
    },
    {
      icon: XCircle,
      title: "Voluntary Cancellations and Future Credit",
      content: [
        "For voluntary cancellations made after any applicable initial cooling-off or void period, the starting point is the fare rule attached to the ticket.",
        "• Non-refundable fare — Usually no cash refund for customer-initiated cancellation after the applicable void/cooling-off window. An airline credit may sometimes be available.",
        "• Partially refundable fare — Some taxes, surcharge portions, or fare value may be refundable depending on the applicable fare rule.",
        "• Refundable fare — Cancellation may produce a refund to the original payment method, subject to supplier confirmation, cancellation timing, and any properly disclosed agency handling fee where permitted.",
        "• Future credit — If the airline permits future credit, it is generally subject to the airline's expiry, traveller, fare-class, and reissue restrictions.",
        "Any future credit is created by the airline or under airline rules, not by TickettoEurope.com alone."
      ],
      twoColumn: true
    },
    {
      icon: FileText,
      title: "Refundable and Non-Refundable Fares",
      content: (
        <div className="overflow-x-auto mt-2">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-[#E8F0FE]">
                <th className="border border-[#E2E8F0] px-4 py-3 text-left font-semibold text-[#0A1628]">Fare Type</th>
                <th className="border border-[#E2E8F0] px-4 py-3 text-left font-semibold text-[#0A1628]">General Treatment</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-[#F5F9FF] transition-colors">
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/80 font-medium">Refundable fare</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">May be eligible for refund to the original payment method, subject to fare rules and cancellation timing.</td>
              </tr>
              <tr className="hover:bg-[#F5F9FF] transition-colors">
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/80 font-medium">Non-refundable fare</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">Usually not eligible for cash refund after the applicable cancellation/void period.</td>
              </tr>
              <tr className="hover:bg-[#F5F9FF] transition-colors">
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/80 font-medium">Restricted/basic fare</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">May prohibit changes, credits, or refunds depending on fare conditions.</td>
              </tr>
              <tr className="hover:bg-[#F5F9FF] transition-colors">
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/80 font-medium">Premium fare</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">Higher price does not automatically mean refundable. The actual fare conditions remain decisive.</td>
              </tr>
              <tr className="hover:bg-[#F5F9FF] transition-colors">
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/80 font-medium">Airline credit</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">May be available where permitted by the airline and subject to expiration and reissue restrictions.</td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    },
    {
      icon: Plane,
      title: "Airline Cancellations, Significant Schedule Changes and Alternative Transportation",
      content: [
        "Where an airline cancels a flight or makes a qualifying significant schedule change, applicable law and airline policy may provide customers with rebooking or refund rights.",
        "For TickettoEurope.com bookings:",
        "• if the airline cancels or significantly changes the flight and you do not accept the airline's alternative transportation, a refund may be due;",
        "• where Noam Flyers Inc. / TickettoEurope.com is the merchant of record for the airfare and applicable law requires a refund, we will process the proper airfare refund when due;",
        "• where the airline is the merchant of record, the airline will ordinarily be responsible for the airfare refund;",
        "• ancillary refunds such as baggage or certain optional airline services may generally be handled by the airline.",
        "Customers should respond promptly to disruption communications because deadlines and airline waiver rules may apply."
      ]
    },
    {
      icon: XCircle,
      title: "No-Shows, Missed Departures and Missed Connections",
      content: [
        "A no-show may result in severe consequences.",
        "Unless the airline rule, formal waiver, or mandatory law provides otherwise:",
        "• if you do not travel on the first unused segment and do not notify the airline or TickettoEurope.com before departure, remaining value may be lost;",
        "• onward or return segments may be cancelled;",
        "• voluntary refund eligibility may be lost;",
        "• voluntary future-credit eligibility may be lost; and",
        "• any available relief may depend on the airline's specific waiver or irregular-operations policy.",
        "Missing a flight because of late arrival at the airport, late baggage drop, failure to meet check-in deadlines, or failure to be present at the gate is ordinarily treated as a customer-side issue."
      ]
    },
    {
      icon: UserCheck,
      title: "Name Corrections, Name Changes and Reissues",
      content: [
        "TickettoEurope.com distinguishes between:",
        "• Minor correction: A spelling, formatting, or ordering issue that still refers to the same traveller.",
        "• Material name change: A change that may effectively attempt to substitute a different traveller.",
        "• Transfer request: An attempt to transfer a ticket to another person.",
        "Only minor corrections may be possible, and only if:",
        "• the validating carrier allows it;",
        "• the route, stock, and operating carriers permit it;",
        "• the correction remains within the airline's permitted tolerance; and",
        "• any required reissue is completed.",
        "Traveller substitutions and ticket transfers are generally prohibited."
      ]
    },
    {
      icon: Package,
      title: "Ancillary Services, Baggage, Seats and Special Requests",
      content: [
        "Seat selection, meal preferences, wheelchair assistance, infant linkage, unaccompanied-minor handling, and similar items may be requests rather than guarantees.",
        "If TickettoEurope.com assists with an ancillary request:",
        "• the request may require a separate service fee;",
        "• the airline may decline, modify, or reassign the service;",
        "• seats together are not guaranteed unless confirmed and operationally preserved by the airline;",
        "• baggage allowances depend on the operating carrier and fare;",
        "• refunds for paid airline ancillaries may need to be requested from the airline.",
        "TickettoEurope.com may assist with documentation or guidance, but supplier approval and supplier performance remain outside the agency's operational control."
      ]
    },
    {
      icon: FileText,
      title: "Scenario-Based Examples",
      content: (
        <div className="overflow-x-auto mt-2">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-[#E8F0FE]">
                <th className="border border-[#E2E8F0] px-4 py-3 text-left font-semibold text-[#0A1628]">Scenario</th>
                <th className="border border-[#E2E8F0] px-4 py-3 text-left font-semibold text-[#0A1628]">Likely TickettoEurope.com Handling</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-[#F5F9FF] transition-colors">
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/80 font-medium">Online booking cancelled within a few hours, before ticket issuance</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">We may attempt to void or cancel the request. Full unwind may be possible if payment settled cleanly and the fare was not yet ticketed.</td>
              </tr>
              <tr className="hover:bg-[#F5F9FF] transition-colors">
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/80 font-medium">Booking cancelled within 24 hours through TickettoEurope.com</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">Airline 24-hour rules do not automatically bind agency bookings. If airline or agency policy allows, a refund or void may be processed.</td>
              </tr>
              <tr className="hover:bg-[#F5F9FF] transition-colors">
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/80 font-medium">Non-refundable fare cancelled voluntarily</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">Usually no cash refund. Airline credit may be available if permitted by the airline.</td>
              </tr>
              <tr className="hover:bg-[#F5F9FF] transition-colors">
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/80 font-medium">Refundable fare cancelled before departure</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">Refund may be processed to original payment method, subject to supplier validation and any applicable agency handling fee.</td>
              </tr>
              <tr className="hover:bg-[#F5F9FF] transition-colors">
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/80 font-medium">Airline cancels flight and customer rejects rebooking</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">Refund may be due. Merchant of record matters for airfare refund.</td>
              </tr>
              <tr className="hover:bg-[#F5F9FF] transition-colors">
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/80 font-medium">Significant schedule change</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">Customer may have refund or rebooking rights depending on applicable law, route, airline policy, and circumstances.</td>
              </tr>
              <tr className="hover:bg-[#F5F9FF] transition-colors">
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/80 font-medium">No-show without advance notice</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">Most or all value may be lost and onward segments may be cancelled.</td>
              </tr>
              <tr className="hover:bg-[#F5F9FF] transition-colors">
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/80 font-medium">Missed flight because customer arrived late</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">Usually treated as customer responsibility.</td>
              </tr>
              <tr className="hover:bg-[#F5F9FF] transition-colors">
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/80 font-medium">Minor misspelling</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">TickettoEurope.com may attempt correction if the airline permits it.</td>
              </tr>
              <tr className="hover:bg-[#F5F9FF] transition-colors">
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/80 font-medium">Traveller substitution</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">Usually not permitted because airline tickets are generally non-transferable.</td>
              </tr>
              <tr className="hover:bg-[#F5F9FF] transition-colors">
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/80 font-medium">Medical, bereavement, military, visa, or other waiver request</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">Relief may be possible if the airline provides or grants a waiver and supporting evidence is supplied.</td>
              </tr>
              <tr className="hover:bg-[#F5F9FF] transition-colors">
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/80 font-medium">Airline weather waiver</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">Changes or credits may be processed under the published waiver terms.</td>
              </tr>
              <tr className="hover:bg-[#F5F9FF] transition-colors">
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/80 font-medium">Bag fee paid but bag significantly delayed or lost</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">Refund request generally needs to be directed to the airline.</td>
              </tr>
              <tr className="hover:bg-[#F5F9FF] transition-colors">
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/80 font-medium">Mixed-airline itinerary</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">Each airline's rules may apply separately, creating additional costs or restrictions.</td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    },
    {
      icon: Users,
      title: "4. Responsibilities, Liability, Fraud Prevention and Data Use",
      content: [
        "Traveller Responsibilities and Document Compliance",
        "Travellers are responsible for obtaining and maintaining all required travel documents.",
        "You must:",
        "• enter each traveller's name accurately;",
        "• ensure passports and visas are valid;",
        "• verify entry and transit requirements;",
        "• provide mandatory passenger information;",
        "• comply with immigration, customs, security, health, and other applicable requirements;",
        "• review confirmation documents promptly; and",
        "• notify TickettoEurope.com promptly if an apparent error is discovered.",
        "TickettoEurope.com does not guarantee that a traveller will be admitted to a country or permitted to board an aircraft."
      ],
      twoColumn: true
    },
    {
      icon: Clock,
      title: "Check-in, Boarding and Timeline Compliance",
      content: [
        "Travellers are responsible for meeting airline check-in and boarding deadlines.",
        "You should arrive sufficiently early to allow time for:",
        "• security screening;",
        "• baggage drop;",
        "• document verification;",
        "• immigration procedures;",
        "• airport transfers within the terminal; and",
        "• gate boarding.",
        "Failure to meet airline deadlines may result in denied boarding, cancellation of the reservation, no-show status, or loss of ticket value.",
        "TickettoEurope.com does not control these operational decisions."
      ]
    },
    {
      icon: Plane,
      title: "Multi-Airline Itineraries, Separate Tickets and Special Requests",
      content: [
        "Where an itinerary involves multiple airlines, codeshares, or separate tickets, each carrier's rules may differ.",
        "If one flight is changed, cancelled, or rescheduled, another flight may not automatically receive protection.",
        "Where travel is not protected under a single through-ticket, customers may bear the cost of changing an unaffected ticket.",
        "Special requests such as seats, meals, wheelchair services, bassinets, or other preferences remain subject to supplier approval and operational conditions."
      ]
    },
    {
      icon: Shield,
      title: "Limitation of Liability",
      content: [
        "Because TickettoEurope.com is an independent travel agency and not an operating carrier, our liability is limited to the services we actually perform.",
        "To the maximum extent permitted by applicable law, TickettoEurope.com shall not be liable for losses arising from:",
        "• airline cancellations;",
        "• delays;",
        "• schedule changes;",
        "• rerouting;",
        "• missed connections;",
        "• aircraft substitutions;",
        "• denied boarding;",
        "• oversales;",
        "• seating changes;",
        "• baggage loss, delay, or damage;",
        "• airport operations;",
        "• refusal to carry;",
        "• passport or visa problems;",
        "• security decisions;",
        "• supplier non-performance;",
        "• supplier insolvency;",
        "• traveller failure to comply with check-in or boarding requirements;",
        "• special requests not honoured by suppliers; or",
        "• indirect, consequential, incidental, special, punitive, or exemplary losses, except where non-excludable law provides otherwise.",
        "If TickettoEurope.com is found liable for a direct loss caused by our own proven breach relating to an agency service, our aggregate liability for the affected booking will, to the maximum extent permitted by law, be limited to the total amount of TickettoEurope.com service fees actually paid by you for that booking.",
        "This limitation does not apply to statutory obligations that cannot legally be excluded."
      ],
      twoColumn: true
    },
    {
      icon: ScaleIcon,
      title: "Indemnity",
      content: [
        "You agree to indemnify and hold harmless Noam Flyers Inc., TickettoEurope.com, and their officers, employees, contractors, processors, and service providers against losses, costs, claims, liabilities, penalties, and expenses arising out of:",
        "• your breach of these Terms;",
        "• inaccurate passenger information supplied by you;",
        "• violation of supplier rules or applicable law;",
        "• fraudulent use of a payment instrument;",
        "• bad-faith or abusive chargeback activity;",
        "• misuse of the platform;",
        "• automation, scraping, or speculative mass bookings; or",
        "• claims brought by another traveller where you booked on that traveller's behalf without authority.",
        "This indemnity does not require you to indemnify us for our own fraud or wilful misconduct and applies only to the extent permitted by law."
      ]
    },
    {
      icon: Fingerprint,
      title: "Verification, Fraud Controls and Sanctions Screening",
      content: [
        "Travel transactions may involve fraud, card misuse, identity mismatch, and regulatory controls.",
        "TickettoEurope.com may therefore conduct:",
        "• cardholder verification;",
        "• billing-address verification;",
        "• device-risk checks;",
        "• document checks;",
        "• duplicate-booking checks;",
        "• fraud screening;",
        "• sanctions screening; and",
        "• other reasonable security checks.",
        "If a transaction cannot be verified or appears suspicious, we may delay ticketing, request additional documentation, reverse or cancel a booking request, or refuse future business.",
        "Failure to respond to a verification request within the communicated deadline may result in cancellation of the pending booking, voiding of an unticketed reservation, or reversal of payment authorisation."
      ]
    },
    {
      icon: Eye,
      title: "Privacy Summary",
      content: [
        "TickettoEurope.com may collect and process information required to search, book, ticket, confirm, service, cancel, refund, or otherwise administer travel arrangements.",
        "This may include:",
        "• traveller names;",
        "• contact details;",
        "• itinerary information;",
        "• payment information;",
        "• billing information;",
        "• passport or travel-document information where necessary;",
        "• communications relating to servicing requests; and",
        "• other information required for travel fulfilment.",
        "Information may need to be shared with airlines, GDSs, settlement partners, fraud-screening providers, customer-support providers, payment processors, and government or regulatory authorities where necessary.",
        "Separate suppliers maintain their own privacy policies.",
        "By booking through TickettoEurope.com, you acknowledge that booking information may need to be transferred across jurisdictions and among multiple service providers to perform the requested travel and related payment, fraud, and servicing functions."
      ]
    },
    {
      icon: Cookie,
      title: "Cookie Summary",
      content: (
        <div className="overflow-x-auto mt-2">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-[#E8F0FE]">
                <th className="border border-[#E2E8F0] px-4 py-3 text-left font-semibold text-[#0A1628]">Cookie Category</th>
                <th className="border border-[#E2E8F0] px-4 py-3 text-left font-semibold text-[#0A1628]">Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-[#F5F9FF] transition-colors">
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/80 font-medium">Strictly necessary cookies</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">Operate booking flow, maintain secure sessions, manage fraud controls, or preserve an in-progress booking/search.</td>
              </tr>
              <tr className="hover:bg-[#F5F9FF] transition-colors">
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/80 font-medium">Preference and functionality cookies</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">Remember settings such as language, region, or other preferences.</td>
              </tr>
              <tr className="hover:bg-[#F5F9FF] transition-colors">
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/80 font-medium">Analytics cookies</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">Understand site performance, conversion, errors, and service improvements.</td>
              </tr>
              <tr className="hover:bg-[#F5F9FF] transition-colors">
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/80 font-medium">Advertising / attribution cookies</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">Where lawful, measure campaigns, advertising performance, personalisation, or affiliate attribution.</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs text-[#0A1628]/60 mt-3">
            Where applicable law requires consent, non-essential cookies will be offered on a consent basis and may be managed through the website's cookie settings.
          </p>
        </div>
      )
    },
    {
      icon: Megaphone,
      title: "Advertiser and Affiliate Disclosure",
      content: [
        "TickettoEurope.com may display:",
        "• sponsored placements;",
        "• paid search or metasearch traffic;",
        "• affiliate links;",
        "• co-branded promotional content;",
        "• promotional rates funded partly or entirely by partners.",
        "Where TickettoEurope.com receives a commission, referral payment, advertising payment, or other material benefit connected with presented content, the relationship may be disclosed where appropriate.",
        "A commercial relationship does not mean that TickettoEurope.com is the airline, that an airline owns TickettoEurope.com, or that a displayed airline has generally endorsed TickettoEurope.com.",
        "If offers are ranked, highlighted, or presented with badges, the ranking may be influenced by price, itinerary quality, availability, supplier content, commercial relationships, conversion behaviour, or user preferences.",
        "No ranking should be interpreted as a guarantee of lowest price, best service, or airline endorsement unless expressly stated."
      ]
    },
    {
      icon: ScaleIcon,
      title: "5. General Legal Terms",
      content: [
        "Governing Law and Disputes",
        "These Terms and any dispute arising out of or relating to TickettoEurope.com, Noam Flyers Inc., or a TickettoEurope.com booking request shall be governed by the laws of the applicable jurisdiction designated by Noam Flyers Inc. and applicable U.S. federal law, except to the extent mandatory consumer law requires otherwise.",
        "Before formal proceedings are initiated, the parties should first attempt to resolve the issue through customer-support escalation in good faith.",
        "Nothing in this clause removes a consumer's right to pursue a complaint with a regulator, payment issuer, or consumer-protection authority where permitted by law."
      ]
    },
    {
      icon: Mail,
      title: "Electronic Communications and Notices",
      content: [
        "You agree that TickettoEurope.com may communicate with you electronically through:",
        "• email;",
        "• SMS;",
        "• website notices;",
        "• account/dashboard notices;",
        "• booking messages; or",
        "• other digital communications.",
        "These communications may concern bookings, payments, schedule changes, cancellations, servicing requests, fraud verification, refund status, or policy updates.",
        "You are responsible for maintaining accurate contact information.",
        "For legal or formal notices to Noam Flyers Inc., customers should use the current contact details published on the official TickettoEurope.com website or the relevant legal/contact page."
      ]
    },
    {
      icon: Lock,
      title: "Intellectual Property and Acceptable Website Use",
      content: [
        "All TickettoEurope.com platform content, except third-party airline or supplier content used under applicable rights, belongs to Noam Flyers Inc. or its licensors.",
        "This includes:",
        "• text;",
        "• page layouts;",
        "• branding;",
        "• interface design;",
        "• source code;",
        "• pricing presentation logic;",
        "• service marks; and",
        "• proprietary compilations.",
        "You may not:",
        "• copy, mirror, scrape, frame, or harvest the platform without permission;",
        "• use bots or scripted processes to query fares at scale;",
        "• attempt to reverse-engineer rate rules or internal scoring systems;",
        "• commercially resell platform content without authorisation;",
        "• interfere with site security;",
        "• interfere with payment flows; or",
        "• otherwise misuse the platform."
      ]
    },
    {
      icon: FileText,
      title: "Changes to These Terms, Severability, Waiver and Survival",
      content: [
        "TickettoEurope.com may amend these Terms from time to time to reflect changes in law, payment rules, supplier practice, product design, service-fee structures, dispute processes, or internal risk controls.",
        "Updated Terms become effective when posted unless a different effective date is stated.",
        "For completed bookings, the version in force at the time of purchase or otherwise applicable to that booking will generally govern, unless mandatory law requires otherwise.",
        "If any clause is held invalid, unlawful, or unenforceable, the remaining clauses will continue in effect to the maximum extent permitted by law.",
        "Failure to enforce a clause immediately does not waive the right to enforce it later.",
        "Provisions concerning payment, fees, liability, indemnity, data use, disputes, intellectual property, fraud controls, and rights that by their nature should continue after completion of a booking will survive termination or completion of the booking."
      ]
    },
   {
  icon: BookMarked,
  title: "Customer-Facing Wording Snippets",
  content: [
    "The following statements may be used in the website footer, FAQ, checkout, support pages, or booking communications. They summarise rather than replace the full Terms & Conditions.",
    "",
    "Independent Agency Status",
    "TickettoEurope.com is operated by Noam Flyers Inc., an independent travel agency. We are not an airline and do not operate flights.",
    "",
    "ARC Accreditation Statement",
    "Noam Flyers Inc. is an ARC-accredited travel agency. ARC accreditation reflects participation in recognised travel-agency ticketing and settlement infrastructure. ARC accreditation does not mean that we are an airline or affiliated with any airline.",
    "",
    "Booking Channel Statement",
    "You may book online yourself or request phone assistance. Assisted bookings may carry different or higher service fees than online self-service bookings.",
    "",
    "Fare Volatility Statement",
    "Air fares are dynamic and may change until ticketed and confirmed by the airline or supplier.",
    "",
    "Total Price Statement",
    "The final amount charged by Noam Flyers Inc. will be shown before payment confirmation. Optional airline extras may be charged separately by the airline.",
    "",
    "Ticketing Status Statement",
    "A booking request or payment receipt does not necessarily mean that the ticket has been issued. Final confirmation follows ticketing and/or supplier confirmation.",
    "",
    "Refund Rights Statement",
    "Refund and credit eligibility depends on airline fare rules, applicable law, timing, and whether Noam Flyers Inc. or the airline is the merchant of record.",
    "",
    "24-Hour Statement",
    "Airline 24-hour cancellation rules do not automatically apply to third-party agency bookings. Similar handling may be available where the applicable fare, supplier, or agency policy allows.",
    "",
    "No-Show Statement",
    "Most no-show bookings may lose value unless the airline rule, waiver, or applicable law provides relief.",
    "",
    "Name-Correction Statement",
    "Minor spelling corrections may be possible if the airline allows them. Traveller substitutions or ticket transfers are generally not permitted.",
    "",
    "Ancillary-Service Statement",
    "Seats, bags, meals, and other extras may be request-only or supplier-controlled. Airline approval and operating-carrier rules apply.",
    "",
    "Baggage-Refund Statement",
    "If an airline optional service is not provided, or if a checked bag is significantly delayed or lost, the refund request will generally need to be directed to the airline.",
    "",
    "Document-Responsibility Statement",
    "Travellers are responsible for ensuring that names, passports, visas, and other travel documents are accurate and valid for the full journey.",
    "",
    "Chargeback Statement",
    "If you believe a charge is unauthorised or incorrect, please contact us first so we can investigate. Your statutory card-dispute rights remain unaffected.",
    "",
    "Cookie-Consent Statement",
    "We use essential cookies to operate the site and, where permitted, optional cookies for analytics and advertising. You can manage your choices through Cookie Settings.",
    "",
    "These short statements are intended to summarise, not replace, the full Terms & Conditions. Where a short statement and the full Terms differ in detail, the full Terms will govern unless applicable law requires a more consumer-favourable interpretation."
  ]
}
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm mb-4 sm:mb-6 overflow-x-auto whitespace-nowrap scrollbar-hide pb-1">
            <NextLink href="/" className="text-[#1A3A6B] hover:text-[#4A8BCF] transition-colors flex-shrink-0">
              Home
            </NextLink>
            <span className="text-[#0A1628]/30 flex-shrink-0">›</span>
            <span className="text-[#0A1628]/60">Terms and Conditions</span>
          </nav>

          <div className="max-w-4xl mx-auto">
            {/* Header Section */}
            <div className="mb-4 sm:mb-6 lg:mb-8">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A1628] leading-tight">
                Terms and Conditions
              </h1>
              <p className="text-xs sm:text-sm text-[#0A1628]/60 mt-1.5 sm:mt-2 leading-relaxed">
                These Terms & Conditions are drafted for TickettoEurope.com, a travel-booking platform operated by Noam Flyers Inc. Noam Flyers Inc. publicly presents itself as an independent travel agency and travel-booking service offering online booking and call-assisted support.
              </p>
              <p className="text-xs sm:text-sm text-[#0A1628]/60 mt-1 leading-relaxed">
                Before live publication, the final text should be reviewed by qualified counsel for state-specific, country-specific, consumer-protection, payment-compliance, and other applicable legal requirements.
              </p>
              <div className="w-10 sm:w-12 h-0.5 sm:h-1 bg-gradient-to-r from-[#1A3A6B] to-[#4A8BCF] rounded-full mt-2 sm:mt-3" />
            </div>

            {/* Sections */}
            {sections.map((section, index) => {
              const Icon = section.icon;
              const isTwoColumn = section.twoColumn;
              // Check if section has many bullet points
              const bulletPoints = Array.isArray(section.content) 
                ? section.content.filter(p => typeof p === 'string' && p.startsWith("•")) 
                : [];
              const hasManyItems = bulletPoints.length > 4;
              
              return (
                <div key={index} id={`section-${index}`} data-expanded="false" className="mt-6 sm:mt-7 lg:mt-8">
                  <div className="flex items-start gap-2.5 sm:gap-3 mb-2 sm:mb-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-7 lg:w-8 lg:h-8 rounded-full bg-[#E8F0FE] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon size={14} className="text-[#1A3A6B]" />
                    </div>
                    <h2 className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold text-[#0A1628] leading-tight">
                      {section.title}
                    </h2>
                  </div>
                  <div className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm lg:text-base text-[#0A1628]/70 leading-relaxed ml-4 sm:ml-6 lg:ml-11 break-words">
                    {Array.isArray(section.content) ? (
                      <>
                        <div className={isTwoColumn ? "grid grid-cols-1 md:grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-2.5 sm:gap-y-3" : "space-y-2.5 sm:space-y-3"}>
                          {section.content.map((paragraph, pIndex) => {
                            if (paragraph === "") {
                              return <div key={pIndex} className="h-1.5 sm:h-2" />;
                            }
                            
                            // Check if it's a bullet point
                            const isBullet = typeof paragraph === 'string' && paragraph.startsWith("•");
                            const bulletIndex = isBullet ? bulletPoints.indexOf(paragraph) : -1;
                            const shouldHideOnMobile = isBullet && hasManyItems && bulletIndex >= 4;
                            
                            if (isBullet) {
                              return (
                                <div 
                                  key={pIndex} 
                                  className={`flex items-start gap-1.5 sm:gap-2 ${shouldHideOnMobile ? 'hidden-mobile-item hidden sm:flex' : ''}`}
                                >
                                  <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full mt-1.5 sm:mt-2 flex-shrink-0 bg-[#4A8BCF]" />
                                  <span className="text-[#0A1628]/70 text-xs sm:text-sm lg:text-base">{paragraph.substring(2)}</span>
                                </div>
                              );
                            }
                            
                            // Check if it's a bold header
                            const boldHeaders = [
                              "Corporate Identity and Operator",
                              "ARC Accreditation and Verification",
                              "Independent Agency Status and Airline Non-Affiliation",
                              "Definitions",
                              "Booking Channels",
                              "Booking Flow",
                              "Dynamic Pricing and Fare Accuracy",
                              "Fulfilment Policy and Ticket Issuance",
                              "Traveller Responsibilities and Document Compliance",
                              "Independent Agency Status",
                              "ARC Accreditation Statement",
                              "Booking Channel Statement",
                              "Fare Volatility Statement",
                              "Total Price Statement",
                              "Ticketing Status Statement",
                              "Refund Rights Statement",
                              "24-Hour Statement",
                              "No-Show Statement",
                              "Name-Correction Statement",
                              "Ancillary-Service Statement",
                              "Baggage-Refund Statement",
                              "Document-Responsibility Statement",
                              "Chargeback Statement",
                              "Cookie-Consent Statement"
                            ];
                            
                            if (boldHeaders.includes(paragraph)) {
                              return <p key={pIndex} className="font-semibold text-[#0A1628] col-span-2 text-sm sm:text-base">{paragraph}</p>;
                            }
                            return <p key={pIndex} className="col-span-2 text-xs sm:text-sm lg:text-base">{paragraph}</p>;
                          })}
                        </div>
                        
                        {/* "Show More" button for sections with many items */}
                        {hasManyItems && (
                          <div className="mt-2 sm:mt-3">
                            <button
                              onClick={() => {
                                const parent = document.getElementById(`section-${index}`);
                                if (parent) {
                                  const items = parent.querySelectorAll('.hidden-mobile-item');
                                  const isExpanded = parent.dataset.expanded === 'true';
                                  items.forEach(el => {
                                    if (isExpanded) {
                                      el.classList.add('hidden');
                                    } else {
                                      el.classList.remove('hidden');
                                    }
                                  });
                                  parent.dataset.expanded = isExpanded ? 'false' : 'true';
                                  const btn = parent.querySelector('.read-more-btn');
                                  if (btn) {
                                    btn.textContent = isExpanded ? 'Show More ▼' : 'Show Less ▲';
                                  }
                                }
                              }}
                              className="read-more-btn text-[#1A3A6B] hover:text-[#4A8BCF] font-medium text-xs sm:text-sm transition-colors flex items-center gap-1"
                            >
                              Show More ▼
                            </button>
                          </div>
                        )}
                      </>
                    ) : (
                      // For tables, wrap in overflow container
                      <div className="overflow-x-auto -mx-3 sm:mx-0">
                        <div className="min-w-[600px] sm:min-w-0">
                          {section.content}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Call to Action */}
            <div className="mt-8 sm:mt-10 p-4 sm:p-5 lg:p-6 bg-gradient-to-r from-[#1A3A6B] to-[#4A8BCF] rounded-lg text-white">
              <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-1.5 sm:mb-2 !text-white">
                Need Help With Your Travel Plans?
              </h3>
              <p className="text-xs sm:text-sm mb-3 sm:mb-4 !text-white/80">
                Our travel experts are here to assist you with flight bookings, changes, and more.
              </p>
              <a
                href={`tel:${CONTACT.phoneRaw}`}
                className="inline-flex items-center gap-2 bg-white text-[#1A3A6B] px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg font-semibold hover:bg-[#E8F0FE] transition-all duration-300 shadow-lg hover:scale-105 text-xs sm:text-sm lg:text-base"
              >
                <Phone size={14} className="sm:w-4 sm:h-4" />
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