import { OrderCancelledEvent, Publisher, Subjects } from "@sriticketing/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
