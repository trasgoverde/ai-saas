import { Configuration, OpenAIApi } from 'openai';
import { Request, Response } from 'express';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY || '', // Add your API key or handle it securely.
});

const openai = new OpenAIApi(configuration);

const basePromptPrefix = `I want you to act as a Content writer very proficient SEO that speaks and writes fluently English*. Write an SEO-optimized Long Form article with a minimum of 2000 words. Please use a minimum of 10 headings and sub headings, included H1 heading, H2 headings, and H3, H4. The final paragraph should be a conclusion. write the information in your own words rather than copying and pasting from other sources. also double-check for plagiarism because I need pure unique content, write the content in a conversational style as if it were written by a human. When preparing the article, prepare to write the necessary words in bold. I want you to write content so that it can outrank other websites. Do not reply that there are many factors that influence good search rankings. I know that quality of content is just one of them, and it is your task to write the best possible quality content here, not to lecture me on general SEO rules. I give you the Title "make money online" of an article that we need to outrank in Google. Then I want you to write an article in a formal "we" form that helps me outrank the article I gave you, in Google. Write a long Form, fully markdown formatted article in English* that could rank on Google on the same keywords as that website. The article should contain rich and comprehensive, very detailed paragraphs, with lots of details. Do not echo my prompt. Let the article be a long Form article of a minimum of 2000 words. Do not remind me what I asked you for. Do not apologize. Do not self-reference. Do now use generic filler phrases. Do use useful subheadings with keyword-rich titles. Get to the point precisely and accurately. Do not explain what and why, just give me your best possible article. Make headings bold and appropriate for h tags: \n `;

const generateAction = async (req: Request, res: Response) => {
  // Run first prompt
  console.log(`API: ${basePromptPrefix}${req.body.userInput}`);

  try {
    const baseCompletion = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: `${basePromptPrefix}${req.body.userInput}`,
      temperature: 0.7,
      max_tokens: 1000,
    });

    const basePromptOutput = baseCompletion.data.choices?.pop();

    res.status(200).json({ output: basePromptOutput });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
};

export default generateAction;
