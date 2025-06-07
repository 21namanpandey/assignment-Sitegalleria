
# Slack Messaging Assignment – Sitegalleria

This project is a part of an internship assignment where the objective is to integrate with the Slack API and perform messaging operations in a sandbox environment.

## ✅ Features Implemented

- **Slack API Authentication** (via token)
- **Send a Message** to a Slack channel
- **Schedule a Message** for future delivery
- **Retrieve a Message** using timestamp
- **Edit a Message**
- **Delete a Message**

## 🚀 Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/21namanpandey/assignment-Sitegalleria.git
cd assignment-Sitegalleria
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create `.env` file

Create a `.env` file in the root directory and add your Slack bot token:

```env
SLACK_BOT_TOKEN=xoxb-your-slack-bot-token-here
```

> Make sure your token has the required scopes: `chat:write`, `chat:write.public`, `channels:read`, `channels:history`, `chat:delete`, `chat:write.customize`.

### 4. Run the project

```bash
node index.js
```

##  How It Works

The script does the following in sequence:

1. Sends a message to the specified channel
2. Retrieves the message
3. Edits the message content
4. Deletes the message
5. Schedules another message to be posted 1 minute later

##  References

* [Slack API Documentation](https://api.slack.com/apis)
* [Messaging Guide](https://api.slack.com/messaging)
* [Slack Developer Sandbox Setup](https://api.slack.com/docs/developer-sandbox)

##  Contact

**Naman Pandey**
LinkTree: [https://linktr.ee/21namanpandey](https://linktr.ee/21namanpandey)
LinkedIn: [https://www.linkedin.com/in/21namanpandey](https://www.linkedin.com/in/21namanpandey)
GitHub: [https://github.com/21namanpandey](https://github.com/21namanpandey)

```
