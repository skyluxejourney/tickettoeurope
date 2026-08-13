// app/fulfillment/page.tsx
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
} from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BRAND, CONTACT } from "@/app/constants";

export default function FulfillmentPage() {
  const sections = [
    {
      icon: Shield,
      title: "1. How Fulfillment Works",
      content: [
        "Noam Flyers Inc. fulfills travel booking requests by providing access to available airline inventory, collecting the information required to create a booking request, processing payment or payment authorization, transmitting the booking or ticketing request through the applicable supplier or distribution channel, and communicating the resulting confirmation, ticket information, or failure status to the customer.",
        "The fulfillment process may involve airlines, Global Distribution Systems (GDS), airline-content systems, payment processors, technology providers, and other travel-service suppliers.",
        "The fact that a customer has submitted a booking request does not by itself mean that the reservation has been fully completed or ticketed."
      ]
    },
    {
      icon: Globe,
      title: "2. Online and Assisted Booking Channels",
      content: [
        "Tickettooeurope.com supports two primary booking channels.",
        "",
        "Online Self-Service Booking",
        "With online self-service booking, the customer searches for available travel options, selects an itinerary, provides the required passenger information, and submits payment through the Website's booking process.",
        "",
        "Assisted Booking",
        "Customers may also receive assistance through available telephone, chat, email, or other customer-service channels.",
        "Assisted booking may include help with:",
        { label: "Route selection", value: "Route selection" },
        { label: "Fare and itinerary", value: "Fare and itinerary information" },
        { label: "Manual booking", value: "Manual booking support" },
        { label: "Passenger info", value: "Passenger information" },
        { label: "Payment processing", value: "Payment processing" },
        { label: "Documentation", value: "Documentation requirements" },
        { label: "Complex itineraries", value: "Complex itineraries" },
        { label: "Multi-passenger", value: "Multi-passenger reservations" },
        { label: "Special requests", value: "Special-service requests" },
        { label: "Schedule changes", value: "Schedule-change situations" },
        { label: "Post-booking support", value: "Post-booking support" },
        "Assisted booking may involve a different service fee than self-service booking. Any applicable service fee should be disclosed to the customer before payment authorization."
      ],
      twoColumn: true
    },
    {
      icon: FileText,
      title: "3. Booking and Fulfillment Process",
      content: [
        "A typical booking request may proceed through the following stages:",
        "",
        "Step 1 — Search and Selection",
        "The customer searches available flights and selects a proposed itinerary.",
        "",
        "Step 2 — Passenger Information",
        "Required passenger and contact information is entered or confirmed.",
        "",
        "Step 3 — Price Review",
        "The applicable total price is displayed, including known mandatory charges and any applicable Tickettooeurope.com or Noam Flyers Inc. service fee.",
        "",
        "Step 4 — Payment Submission",
        "The customer submits payment information through the designated payment process.",
        "",
        "Step 5 — Payment and Transaction Validation",
        "Noam Flyers Inc. or its authorized payment providers may verify payment authorization, transaction status, availability, and applicable fraud or security signals.",
        "",
        "Step 6 — Supplier Confirmation or Ticketing",
        "The booking request is transmitted to the applicable airline, supplier, GDS, or other authorized distribution channel for confirmation and/or ticketing.",
        "",
        "Step 7 — Final Confirmation",
        "Once the applicable supplier confirms the reservation and, where applicable, the ticket has been issued, Tickettooeurope.com communicates the resulting booking information to the customer.",
        "Until the applicable confirmation or ticketing process has been successfully completed, a booking request should not be considered fully fulfilled."
      ]
    },
    {
      icon: CreditCard,
      title: "4. Payment Processing",
      content: [
        "Noam Flyers Inc. processes payments for bookings made through Tickettooeurope.com using applicable payment-processing systems and authorized payment providers.",
        "Depending on the payment pathway, a customer may see:",
        { label: "Authorization", value: "A payment authorization" },
        { label: "Completed charge", value: "A completed charge" },
        { label: "Component charges", value: "Multiple component charges that together represent the agreed transaction" },
        { label: "Hold", value: "A temporary authorization hold" },
        { label: "Delayed issuance", value: "A delay between payment submission and final ticket issuance" },
        "The exact appearance and timing of a transaction may depend on the payment method, financial institution, payment processor, airline, supplier, and booking pathway.",
        "If payment cannot be completed, the fare changes before ticketing, or the applicable supplier cannot confirm the itinerary, Noam Flyers Inc. may notify the customer and explain the available next steps.",
        "If a payment has been authorized or charged but the requested booking cannot be fulfilled, Noam Flyers Inc. will process the applicable reversal, release, refund, or other transaction adjustment in accordance with the payment method, processor requirements, supplier rules, and applicable circumstances."
      ],
      twoColumn: true
    },
    {
      icon: Clock,
      title: "5. When Is a Booking Final?",
      content: [
        "Submitting a booking request does not necessarily mean that a ticket has been issued.",
        "A booking should generally be considered fully fulfilled only after:",
        { label: "Payment", value: "Required payment or payment authorization has been successfully completed;" },
        { label: "Supplier confirmation", value: "The applicable airline or travel supplier has confirmed the requested service; and" },
        { label: "Confirmation", value: "A reservation confirmation and/or ticket number has been issued and communicated to the customer, as applicable." },
        "A confirmation that merely acknowledges receipt of a booking request should not automatically be interpreted as proof that a ticket has been issued."
      ]
    },
    {
      icon: Mail,
      title: "6. Fulfillment Confirmation",
      content: [
        "For an air booking, the core fulfillment deliverable is a valid reservation record and, where applicable, an issued ticket number.",
        "A completed fulfillment communication should generally contain the essential booking information available for the transaction, which may include:",
        { label: "Passengers", value: "Passenger names" },
        { label: "Route", value: "Origin and destination" },
        { label: "Dates", value: "Travel dates" },
        { label: "Flights", value: "Flight details" },
        { label: "Times", value: "Departure and arrival times" },
        { label: "Cabin", value: "Cabin class" },
        { label: "PNR", value: "Booking reference or PNR" },
        { label: "Ticket", value: "Ticket number, where issued" },
        { label: "Payment", value: "Applicable payment summary" },
        { label: "Conditions", value: "Relevant fare or booking conditions" },
        { label: "Support", value: "Instructions for obtaining assistance or checking the booking status" },
        "Customers should retain their confirmation and ticket information for future reference."
      ],
      twoColumn: true
    },
    {
      icon: AlertCircle,
      title: "7. Additional Review",
      content: [
        "Some transactions may require additional review before fulfillment is completed.",
        "This may include:",
        { label: "Payment verification", value: "Payment verification" },
        { label: "Identity verification", value: "Identity verification" },
        { label: "Fraud review", value: "Fraud or risk review" },
        { label: "Card validation", value: "Card validation" },
        { label: "Manual ticketing", value: "Manual ticketing" },
        { label: "Queue processing", value: "Supplier queue processing" },
        { label: "Availability", value: "Availability verification" },
        { label: "Special services", value: "Special-service validation" },
        { label: "Documentation", value: "Documentation review" },
        { label: "Recontact", value: "Customer recontact" },
        "Additional review does not necessarily mean that a booking has failed.",
        "It may simply mean that the transaction has not yet reached its final fulfillment stage.",
        "Where reasonably possible, Tickettooeurope.com will communicate the relevant status to the customer rather than allowing a customer to assume that a request has already resulted in an issued ticket."
      ],
      twoColumn: true
    },
    {
      icon: XCircle,
      title: "8. When a Booking Cannot Be Fulfilled as Requested",
      content: [
        "Not every booking request can necessarily be fulfilled exactly as originally selected.",
        "For example:",
        { label: "Fare unavailable", value: "The selected fare may no longer be available." },
        { label: "Inventory changes", value: "Airline inventory may change before ticket issuance." },
        { label: "Schedule change", value: "The airline may require a schedule or fare adjustment." },
        { label: "Payment fails", value: "A payment method may fail validation." },
        { label: "Supplier rejection", value: "A supplier may reject the requested itinerary." },
        { label: "Special service", value: "A special-service request may require additional confirmation." },
        { label: "Carrier servicing", value: "A supplier may require direct carrier servicing." },
        "When this occurs, Noam Flyers Inc. will seek to communicate the available options.",
        "Depending on the circumstances, available options may include:",
        { label: "Revised itinerary", value: "A revised itinerary" },
        { label: "Revised fare", value: "A revised fare" },
        { label: "Alternate routing", value: "An alternate routing" },
        { label: "Alternative flight", value: "An alternative flight" },
        { label: "Cancellation", value: "Cancellation of the booking request" },
        { label: "Refund", value: "Applicable reversal or refund" },
        "A failed fulfillment should not be represented as a successfully issued or fully delivered ticket."
      ],
      twoColumn: true
    },
    {
      icon: UserCheck,
      title: "9. Post-Fulfillment Support",
      content: [
        "After fulfillment, Tickettooeurope.com may provide applicable post-booking assistance.",
        "This may include:",
        { label: "Re-send itinerary", value: "Re-sending itinerary information" },
        { label: "Status assistance", value: "Booking-status assistance" },
        { label: "Schedule changes", value: "Schedule-change communication" },
        { label: "Booking services", value: "Assistance with eligible booking services" },
        { label: "Post-ticketing", value: "Post-ticketing service handling" },
        { label: "Refund assistance", value: "Refund-routing assistance" },
        { label: "General support", value: "General booking support" },
        "However, certain functions remain under the control of the operating airline or travel supplier.",
        "Depending on the booking, customers may need to deal directly with the airline for matters such as:",
        { label: "Check-in online", value: "Online check-in" },
        { label: "Check-in airport", value: "Airport check-in" },
        { label: "Travel documents", value: "Passport or travel-document verification" },
        { label: "API", value: "Advance Passenger Information (API) requirements" },
        { label: "Seat maps", value: "Operating-carrier seat maps" },
        { label: "LCC services", value: "Certain low-cost-carrier services" },
        { label: "Ancillary services", value: "Airline-controlled ancillary services" },
        { label: "Direct changes", value: "Certain changes that must be processed directly by the carrier" },
        "Tickettooeurope.com will provide guidance where appropriate, but it cannot control airline systems or operational procedures."
      ],
      twoColumn: true
    },
    {
      icon: Shield,
      title: "10. Customer Responsibility",
      content: [
        "Customers are responsible for reviewing their fulfillment confirmation when received.",
        "Customers should verify:",
        { label: "Passengers", value: "Passenger names" },
        { label: "Route", value: "Origin and destination" },
        { label: "Dates", value: "Travel dates" },
        { label: "Departures", value: "Departure times" },
        { label: "Arrivals", value: "Arrival times" },
        { label: "Count", value: "Number of passengers" },
        { label: "Cabin", value: "Cabin class" },
        { label: "Baggage", value: "Baggage inclusions" },
        { label: "Seats", value: "Seat information, where applicable" },
        { label: "PNR", value: "Booking reference" },
        { label: "Ticket", value: "Ticket number, where applicable" },
        { label: "Conditions", value: "Any important fare conditions" },
        "Any discrepancy should be reported to Tickettooeurope.com as soon as possible through the support channel provided with the booking.",
        "Prompt reporting is important because airline rules, fare conditions, and correction options may become more restrictive after ticket issuance or after the first departure."
      ],
      twoColumn: true
    },
    {
      icon: Mail,
      title: "11. Delivery of Fulfillment Information",
      content: [
        "Noam Flyers Inc. may use available communication channels to deliver booking and fulfillment information, including:",
        { label: "Email", value: "Email" },
        { label: "SMS", value: "SMS" },
        { label: "Phone", value: "Telephone" },
        { label: "Chat", value: "Chat" },
        { label: "In-app messages", value: "In-account or Website messaging" },
        "Customers are responsible for providing accurate and current contact information.",
        "Customers should also check spam, junk, promotions, or filtered folders if an expected confirmation email does not appear in their primary inbox.",
        "If travel is approaching and the expected confirmation or ticket information has not been received, customers should contact Tickettooeurope.com promptly rather than assuming that the booking has been completed.",
        "Where appropriate, customers may also contact the applicable airline using the booking reference or ticket information provided."
      ],
      twoColumn: true
    },
    {
      icon: FileText,
      title: "12. Fulfillment Stage Table",
      content: (
        <div className="overflow-x-auto mt-2">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-[#E8F0FE]">
                <th className="border border-[#E2E8F0] px-4 py-3 text-left font-semibold text-[#0A1628]">Fulfillment Stage</th>
                <th className="border border-[#E2E8F0] px-4 py-3 text-left font-semibold text-[#0A1628]">Noam Flyers Inc. / Tickettooeurope.com Role</th>
                <th className="border border-[#E2E8F0] px-4 py-3 text-left font-semibold text-[#0A1628]">Airline / Supplier Role</th>
                <th className="border border-[#E2E8F0] px-4 py-3 text-left font-semibold text-[#0A1628]">Customer Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-[#F5F9FF] transition-colors">
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/80 font-medium">Search and Selection</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">Present available travel inventory</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">Provide inventory and applicable fare information</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">Select itinerary</td>
              </tr>
              <tr className="hover:bg-[#F5F9FF] transition-colors">
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/80 font-medium">Checkout and Payment</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">Display applicable total, collect required information, and process payment</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">May provide fare/inventory information</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">Review total and authorize payment</td>
              </tr>
              <tr className="hover:bg-[#F5F9FF] transition-colors">
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/80 font-medium">Validation</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">Payment, security, availability, and applicable transaction checks</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">Inventory and fare validation</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">Respond if additional information is requested</td>
              </tr>
              <tr className="hover:bg-[#F5F9FF] transition-colors">
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/80 font-medium">Ticketing or Confirmation</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">Transmit booking/ticketing request and communicate outcome</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">Confirm reservation and/or issue ticket</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">Review confirmation</td>
              </tr>
              <tr className="hover:bg-[#F5F9FF] transition-colors">
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/80 font-medium">Post-Fulfillment Support</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">Provide applicable booking assistance and communication</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">Operate flight and provide carrier-controlled services</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-[#0A1628]/70">Check in, travel, and request applicable services</td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    },
    {
      icon: CheckCircle,
      title: "13. Sample Fulfillment Standard",
      content: [
        "A booking request is not considered fully fulfilled until Noam Flyers Inc. has received successful payment or payment authorization, the relevant airline or travel supplier has confirmed the requested service, and the applicable reservation confirmation and/or ticket number has been issued and communicated to the customer."
      ]
    },
    {
      icon: FileText,
      title: "14. Important Distinction Between Booking Request and Ticket Issuance",
      content: [
        "Customers should understand that there may be a difference between:",
        "",
        "Booking Request Received",
        "The customer's request has been submitted and is being processed.",
        "",
        "Payment Authorized",
        "The payment method has been authorized or the transaction has been submitted for processing.",
        "",
        "Supplier Confirmation",
        "The airline or applicable supplier has confirmed the requested service.",
        "",
        "Ticket Issued",
        "Where ticketing is required, the applicable airline ticket number has been successfully issued.",
        "",
        "Fulfillment Complete",
        "The reservation and applicable travel documentation have been successfully confirmed and communicated to the customer.",
        "These stages may occur close together, but they are not necessarily identical."
      ]
    },
    {
      icon: FileText,
      title: "15. Changes to This Fulfillment Policy",
      content: [
        "Noam Flyers Inc. may update this Fulfillment Policy from time to time to reflect changes in its booking processes, technology, supplier relationships, payment procedures, or applicable legal requirements.",
        "The latest version will be made available on Tickettooeurope.com.",
        "Where appropriate, material changes may be accompanied by an updated \"Last Updated\" date."
      ]
    },
    {
      icon: Phone,
      title: "16. Contact",
      content: [
        "For questions regarding a booking, fulfillment status, ticket issuance, or confirmation, customers should use the contact information and support channels provided on Tickettooeurope.com.",
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
            <span className="text-[#0A1628]/60">Fulfillment Policy</span>
          </nav>

          <div className="w-full">
            {/* Header Section */}
            <div className="mb-8">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A1628] leading-tight">
                Fulfillment Policy
              </h1>
              <p className="text-sm text-[#0A1628]/60 mt-2 text-justify">
                This Fulfillment Policy explains how Tickettooeurope.com, operated by Noam Flyers Inc., processes and fulfills travel booking requests, what happens after payment, how online and assisted booking channels operate, when a booking becomes final, and what confirmation customers should expect.
              </p>
              <p className="text-sm text-[#0A1628]/60 mt-1 text-justify">
                Tickettooeurope.com is an independent travel agency and is not an airline. Noam Flyers Inc. does not operate flights, control air-traffic operations, board passengers, load baggage, or determine airline schedules. Those operational functions remain the responsibility of the applicable airlines, airports, and other relevant service providers.
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
                  <div className="text-sm sm:text-base text-[#0A1628]/70 leading-relaxed">
                    {Array.isArray(section.content) ? (
                      <div className={isTwoColumn ? "grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3" : "space-y-3"}>
                        {section.content.map((paragraph, pIndex) => {
                          // 1. Empty spacer
                          if (paragraph === "") {
                            return <div key={pIndex} className="h-2 col-span-2" />;
                          }

                          // 2. Check if paragraph starts with "•" to render as list item
                          if (typeof paragraph === 'string' && paragraph.startsWith("•")) {
                            return (
                              <div key={pIndex} className="flex items-start gap-2 col-span-2 md:col-span-1">
                                <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-[#4A8BCF]" />
                                <span className="text-justify">{paragraph.substring(2)}</span>
                              </div>
                            );
                          }

                          // 3. Render Label: Value objects
                          if (typeof paragraph === 'object' && paragraph.label && paragraph.value) {
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

                          // 4. Handle string content
                          if (typeof paragraph === 'string') {
                            // Check if it's a bold header (Step, Stage, etc.)
                            if (
                              paragraph.startsWith("Step") || 
                              paragraph === "Online Self-Service Booking" || 
                              paragraph === "Assisted Booking" || 
                              paragraph === "Booking Request Received" || 
                              paragraph === "Payment Authorized" || 
                              paragraph === "Supplier Confirmation" || 
                              paragraph === "Ticket Issued" || 
                              paragraph === "Fulfillment Complete" ||
                              /^\d+\./.test(paragraph)
                            ) {
                              return <p key={pIndex} className="font-semibold text-[#0A1628] col-span-2">{paragraph}</p>;
                            }

                            // Normal paragraph
                            return <p key={pIndex} className="col-span-2 leading-relaxed text-justify">{paragraph}</p>;
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