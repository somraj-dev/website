import type { Metadata } from "next";
import HospitalsView from "./HospitalsView";

export const metadata: Metadata = {
  title: "Hospital Operating System & Medical Network Management",
  description: "Digitize registration, centralize hospital EHR records, reduce patient waiting times, and streamline department workflows with AxioVital for Hospitals.",
  alternates: {
    canonical: "https://axiovital.quantaforze.com/hospitals",
  },
  openGraph: {
    title: "Hospital Operating System & Medical Network Management",
    description: "Digitize registration, centralize hospital EHR records, reduce patient waiting times, and streamline department workflows with AxioVital for Hospitals.",
    url: "https://axiovital.quantaforze.com/hospitals",
    siteName: "AxioVital Health Platform",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hospital Operating System & Medical Network Management",
    description: "Digitize registration, centralize hospital EHR records, reduce patient waiting times, and streamline department workflows with AxioVital for Hospitals.",
  },
};

export default function Hospitals() {
  return <HospitalsView />;
}
