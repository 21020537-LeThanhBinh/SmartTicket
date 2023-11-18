import { ticketsTest } from "@/testData/testData";
import { NewTicket } from "../../components/NewTicket/NewTicket";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | undefined }
}

export async function generateMetadata({ params, searchParams }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  return {
    title: `SmartTicket - New Ticket #${params.id}`,
    // Other metadata here
  }
}

export default function NewTicketPage({ params, searchParams }: Props) {
  const { id } = params;
  // Fetch ticket from API here
  const ticket = ticketsTest.find((ticket) => ticket.id == id);

  return <NewTicket ticket={ticket} />;
};