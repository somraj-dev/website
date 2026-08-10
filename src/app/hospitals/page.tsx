import type { Metadata } from "next";
import HospitalsView from "./HospitalsView";

export const metadata: Metadata = {
  title: "Hospital Queue Management & Operating System | AxioVital",
  description: "Reduce emergency waiting times by 80%, centralize multi-facility hospital EHRs, and enable 1-tap NFC kiosk check-in with AxioVital for Hospitals.",
  alternates: {
    canonical: "https://axiovital.quantaforze.com/hospitals",
  },
  openGraph: {
    title: "Hospital Queue Management & Operating System | AxioVital",
    description: "Reduce emergency waiting times by 80%, centralize multi-facility hospital EHRs, and enable 1-tap NFC kiosk check-in with AxioVital for Hospitals.",
    url: "https://axiovital.quantaforze.com/hospitals",
    siteName: "AxioVital Health Platform",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hospital Queue Management & Operating System | AxioVital",
    description: "Reduce emergency waiting times by 80%, centralize multi-facility hospital EHRs, and enable 1-tap NFC kiosk check-in with AxioVital for Hospitals.",
  },
};

export default function Hospitals() {
  return <HospitalsView />;
}
