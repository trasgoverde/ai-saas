import Sitemapper from 'sitemapper';
import OpenAI from 'openai';
import { Assistant } from 'openai/resources/beta/assistants/assistants';

const openai = new OpenAI();

async function fullWebsiteAssistant(url: string): Promise<Assistant> {
  const sitemap = new Sitemapper({ url });
  const { sites } = await sitemap.fetch();

  const files = await Promise.all(
    sites.map(async (site) =>
      openai.files.create({
        file: await fetch(site),
        purpose: 'assistants',
      })
    )
  );

  return await openai.beta.assistants.create({
    instructions: 'You are a website assistant.',
    model: 'gpt-4.1106',
    tools: [{ type: 'retrieval' }],
    file_ids: files.map((file) => file.id),
  });
}
