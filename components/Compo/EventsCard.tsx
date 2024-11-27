"user client"

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useUser } from "@clerk/nextjs";
import { useQuery } from "convex/react";
import { useRouter } from "next/navigation";

export default function EventsCard({eventId}: {eventId: Id<"events">}) {
    const {user} = useUser();
    const router = useRouter();
    const event = useQuery(api.events.getById, {eventId});
  return (
    <></>
  )
}