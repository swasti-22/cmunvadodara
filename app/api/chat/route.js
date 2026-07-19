import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: "Invalid messages body" }, { status: 400 });
    }

    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      console.error("Missing ANTHROPIC_API_KEY env var");
      return NextResponse.json({ error: "Configuration error" }, { status: 500 });
    }

    const systemPrompt = `You are the official AI Assistant for Concord Model United Nations (Concord MUN) Vadodara 2026.
Conference Details:
- Date: 22-23 August 2026
- Venue: The Fern Residency, Vadodara
- Delegate Pass Fee: ₹2,900 per delegate. This is inclusive of entry to all committee sessions, official premium delegate kits, certified blockchain credentials, and 7 gourmet meals (breakfasts, lunches, high teas on both days, plus the social evening dinner) prepared by the hotel's executive chefs.
- Committees & Portfolios:
  1. UNSC (United Nations Security Council)
  2. Lok Sabha
  3. BRICS+
  4. International Press (IP)
  5. IPL Auction
- Registration: Delegates can register directly on the website using the secure embedded registration forms in the "Registration" section (tabs for Individual and Team Delegation).
- Contact: For any specific, complex, or off-policy questions, direct the user to email the Secretariat at concordmunvadodara08@gmail.com or contact us on Instagram @concordmun_vadodara.

Guidelines:
1. Be concise, friendly, helpful, and professional.
2. If a user asks a question you cannot answer with the facts listed above, politely instruct them to contact the Secretariat via email or use the registration form.
3. NEVER invent or hallucinate any dates, fees, policies, or details that are not explicitly provided in this prompt.`;

    // Call Anthropic API
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-6",
        max_tokens: 500,
        system: systemPrompt,
        messages: messages.map((m) => ({
          role: m.role,
          content: m.content,
        })),
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Anthropic API error response:", errorText);
      return NextResponse.json({ error: "Failed to generate reply from AI partner" }, { status: 500 });
    }

    const data = await response.json();
    const replyText = data.content?.[0]?.text || "I am unable to generate a response at this moment.";

    return NextResponse.json({ reply: replyText });
  } catch (error) {
    console.error("Server API route error:", error);
    return NextResponse.json({ error: "An internal server error occurred" }, { status: 500 });
  }
}
