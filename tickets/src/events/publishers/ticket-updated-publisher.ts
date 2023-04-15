import { Publisher, Subjects, TicketUpdatedEvent } from "@sriticketing/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
