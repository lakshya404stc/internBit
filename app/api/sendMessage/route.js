import { NextResponse } from 'next/server';
import { WebClient } from '@slack/web-api';

export async function POST(req) {
  const { channelId, text } = await req.json();
  console.log(channelId)
  const client = new WebClient(process.env.NEXT_AUTH_SLACK_API_TOKEN);

  try {
    const result = await client.chat.postMessage({
      channel: channelId,
      text: text,
    });

    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
