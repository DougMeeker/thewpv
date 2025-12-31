How to Request Website Changes (for non-technical admins)

Use the coding agent by posting a short, clear request. Include the details below so changes can be done quickly and accurately.

What to include in your request
- What you want changed: page, section, or component (include the page URL or path, e.g., /about/mission/).
- The exact text/content: paste the new copy, links, phone numbers, dates, or list items. Say which parts to replace vs. add.
- Assets: provide links to images/files to use (or say “reuse the existing image”).
- Priority and timing: “publish asap” or a date if relevant.
- Any approvals or constraints: e.g., “Board-approved wording—do not edit.”

Examples you can copy
- “On /join/, change the ‘Client’ price to $300/year and update the CTA button text to ‘Start membership’.”
- “On /events/, add a new event block for Jan 15 at 2pm with this description: … Include RSVP link: https://….”
- “On /contact/, replace the phone number with 555-123-4567 and add a line: ‘Office hours: Mon–Thu, 9–4.’”

What the agent will do
- Edit the Eleventy templates/content files, keep styling consistent, and run the site build.
- Reply with a summary of changes and what to verify after deployment.

After the agent finishes
- Deploy the updated `site/_site/` to GitHub Pages (standard project flow).
- Spot-check the changed pages live (links, forms, images). If anything is off, send a follow-up request.

How to upload a newsletter PDF
- Save the PDF into `site/src/wp-content/uploads/newsletters/` (create the folder if it does not exist). Keep the filename simple, e.g., `WPV-Newsletter-2025-02.pdf`.
- In your change request, include the link you want on the site: `/thewpv/wp-content/uploads/newsletters/WPV-Newsletter-2025-02.pdf`.
- Tell the agent which page/section should link to the new PDF (for example, add to the Newsletters page list or replace last month’s link).
