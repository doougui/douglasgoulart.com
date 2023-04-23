import mailchimp, { ErrorResponse } from '@mailchimp/mailchimp_marketing';
import { NextApiRequest, NextApiResponse } from 'next';

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_SERVER, // e.g. us1
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests are allowed' });
    return;
  }

  const data = JSON.parse(req.body);

  if (!data?.email) {
    res.status(400).json({ error: 'Email is required' });
    return;
  }

  const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;

  if (!audienceId) {
    res.status(500).json({ error: 'Audience ID not provided' });
    return;
  }

  try {
    await mailchimp.lists.addListMember(audienceId, {
      email_address: data.email,
      status: 'subscribed',
    });

    res.status(201).json({ error: '' });
  } catch (e) {
    const mailchimpError = e as { response: { body: ErrorResponse } };

    if (mailchimpError.response?.body) {
      res
        .status(mailchimpError.response.body.status)
        .json({ error: mailchimpError.response.body.title });
      return;
    }

    let error = 'An unexpected error has occurred';
    if (e instanceof Error) error = e.message || e.toString();
    res.status(500).json({ error });
  }
}
