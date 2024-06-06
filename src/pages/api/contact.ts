import { NextApiRequest, NextApiResponse } from 'next';

const contactApi = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, date, message, peopleAmount } = req.body;

  // Check if the date is available
  const isDateAvailable = await checkDateAvailability(date);

  if (isDateAvailable) {
    // Send a response back to the client
    res.json({ success: true, message: 'The date is available!' });
  } else {
    res.json({ success: false, message: 'The date is not available.' });
  }
};

const checkDateAvailability = async (date: string) => {
  // Implement your logic to check if the date is available
  // For example, you could check a database or a calendar API
  return true; // or false
};

export default contactApi;