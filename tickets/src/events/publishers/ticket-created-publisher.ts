import { Publisher, Subjects, TicketCreatedEvent } from "@sriticketing/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
    readonly subject: Subjects.TicketCreated = Subjects.TicketCreated
}
