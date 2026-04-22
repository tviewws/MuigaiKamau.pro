export default async function handler(req, res) {
  // 1. Ensure we only handle POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // 2. Safely parse the body
  let body = req.body;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch (e) {
      return res.status(400).json({ error: 'Invalid JSON' });
    }
  }

  const { user_name, reply_to, phone, company, service_interest, message } = body;

  // 3. Log to your terminal so you can see the data arriving
  console.log('Received data:', body);

  try {
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        // Service credentials with fallbacks
        service_id: process.env.EMAILJS_SERVICE_ID || "service_bf0zusv",
        template_id: process.env.EMAILJS_TEMPLATE_ID || "template_u3bimlr",
        user_id: process.env.EMAILJS_PUBLIC_KEY || "x0aTl9NHPhD_NzaFg",
        
        // NEW: This is the Private Key required for "Strict Mode" / Server-side requests
        accessToken: process.env.EMAILJS_PRIVATE_KEY || "UOpfohtGJJCIv-c1VgtXv",
        
        template_params: {
          user_name,
          reply_to,
          phone,
          company,
          service_interest,
          message,
        },
      }),
    });

    const resultText = await response.text();

    if (response.ok) {
      return res.status(200).json({ success: true });
    } else {
      console.error('EmailJS Error:', resultText);
      return res.status(500).json({ error: resultText });
    }
  } catch (err) {
    console.error('Server Fetch Error:', err);
    return res.status(500).json({ error: 'Server error' });
  }
}