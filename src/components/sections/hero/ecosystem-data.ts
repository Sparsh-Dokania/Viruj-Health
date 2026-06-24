import {
  Activity,
  Brain,
  HeartPulse,
  FileText,
  ShieldCheck,
} from "lucide-react";

export const ecosystemNodes = [
  {
    id: "ai",
    title: "AI Insight",
    description: "Adaptive care guidance",
    icon: Brain,
    position:
      "absolute top-0 left-1/2 -translate-x-1/2 w-72",
  },

  {
    id: "diagnostics",
    title: "Diagnostics",
    description: "",
    icon: Activity,
    position:
      "absolute top-44 left-12 w-72",
  },

  {
    id: "timeline",
    title: "Care Timeline",
    description: "",
    icon: HeartPulse,
    position:
      "absolute top-44 right-12 w-72",
  },

  {
    id: "records",
    title: "Medical Records",
    description: "Securely organized",
    icon: FileText,
    position:
      "absolute top-[360px] left-1/2 -translate-x-1/2 w-64",
  },

  {
    id: "security",
    title: "Protected Care",
    description: "End-to-end encrypted records",
    icon: ShieldCheck,
    position:
      "absolute bottom-0 left-1/2 -translate-x-1/2 w-64",
  },
];