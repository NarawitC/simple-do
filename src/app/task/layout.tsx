import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "Tasks - %s",
    default: "Tasks",
  },
};

export default function TaskLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
