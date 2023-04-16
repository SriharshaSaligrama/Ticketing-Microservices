import { OrderCreatedEvent, Publisher, Subjects } from "@sriticketing/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
