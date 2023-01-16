import type { NextApiRequest, NextApiResponse } from 'next';
import { Event } from '../../models/event';
import path from 'path';
import fs from 'fs';

const buildPath = () => {
  return path.join(process.cwd(), 'data', 'data.json');
};

const extractData = (filePath: string) => {
  const jsonData = fs.readFileSync(filePath);
  // @ts-ignore
  return JSON.parse(jsonData);
};

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  const filePath = buildPath();
  const { events_categories, all_events } = extractData(filePath);

  if (!all_events) {
    return res.status(404).json({
      status: 404,
      message: 'Events data not found',
    });
  }

  if (method === 'POST') {
    const { email, eventId } = req.body;

    if (!email || !email.includes('@')) {
      res.status(422).json({ status: 404, message: 'Invalid email address' });
    }

    const updatedEvents = all_events.map((event: Event) => {
      if (event.id === eventId) {
        if (event.emails_registered.includes(email)) {
          res.status(409).json({
            message: 'This email has already been registered',
          });
          return event;
        }
        return {
          ...event,
          emails_registered: [...event.emails_registered, email],
        };
      }
      return event;
    });

    fs.writeFileSync(
      filePath,
      JSON.stringify({ events_categories, all_events: updatedEvents }),
    );

    res.status(201).json({
      message: `You have been registered successfully for this event with the email: ${email}`,
    });
  }
};

export default handler;
