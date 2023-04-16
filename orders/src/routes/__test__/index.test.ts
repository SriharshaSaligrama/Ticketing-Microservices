import request from "supertest";
import { app } from "../../app";
import { Ticket } from "../../../models/ticket";

const buildTicket = async (title: string, price: number) => {
  const ticket = Ticket.build({
    title,
    price,
  });

  await ticket.save();
  return ticket;
};

it("fetches order for the current user", async () => {
  // Create 3 tickets
  const ticketOne = await buildTicket("First ticket", 10);
  const ticketTwo = await buildTicket("Second ticket", 20);
  const ticketThree = await buildTicket("Third ticket", 30);

  const user1 = global.signin();
  const user2 = global.signin();

  //Create one order as User #1
  await request(app)
    .post("/api/orders")
    .set("Cookie", user1)
    .send({ ticketId: ticketOne.id })
    .expect(201);

  //Create two orders as User #2
  const { body: orderOne } = await request(app)
    .post("/api/orders")
    .set("Cookie", user2)
    .send({ ticketId: ticketTwo.id })
    .expect(201);

  const { body: orderTwo } = await request(app)
    .post("/api/orders")
    .set("Cookie", user2)
    .send({ ticketId: ticketThree.id })
    .expect(201);

  //Make request to get orders for User #2
  const response = await request(app)
    .get("/api/orders")
    .set("Cookie", user2)
    .expect(200);

  //Make sure we got only orders for User #2
  expect(response.body.length).toEqual(2);
  expect(response.body[0].id).toEqual(orderOne.id);
  expect(response.body[1].id).toEqual(orderTwo.id);
  expect(response.body[0].ticket.id).toEqual(ticketTwo.id);
  expect(response.body[1].ticket.id).toEqual(ticketThree.id);
});
