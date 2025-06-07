import { WebClient } from '@slack/web-api';
import dotenv from 'dotenv';
dotenv.config();

const token = process.env.SLACK_BOT_TOKEN;
const web = new WebClient(token);

const channelId = 'C090TBHDN49'; 

async function sendMessage() {
  const res = await web.chat.postMessage({
    channel: channelId,
    text: 'Hello from Slack API!'
  });
  console.log('Message sent:', res.ts);
  return res.ts;
}

async function scheduleMessage() {
  const postAt = Math.floor(Date.now() / 1000) + 60; 
  const res = await web.chat.scheduleMessage({
    channel: channelId,
    text: 'Scheduled message from API',
    post_at: postAt,
  });
  console.log('Message scheduled:', res.scheduled_message_id);
  return res.scheduled_message_id;
}

async function retrieveMessage(ts) {
  const res = await web.conversations.history({
    channel: channelId,
    latest: ts,
    inclusive: true,
    limit: 1
  });
  console.log('Message retrieved:', res.messages[0]);
}

async function editMessage(ts, newText) {
  await web.chat.update({
    channel: channelId,
    ts,
    text: newText
  });
  console.log('Message edited');
}

async function deleteMessage(ts) {
  await web.chat.delete({
    channel: channelId,
    ts,
  });
  console.log('Message deleted');
}

(async () => {
  const ts = await sendMessage();
  await retrieveMessage(ts);
  await editMessage(ts, 'Edited message text');
  await deleteMessage(ts); 
  await scheduleMessage();
})();
