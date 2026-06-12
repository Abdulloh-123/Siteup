# Siteup Client Management Notion Template

Use this as a Notion workspace template. Create a new Notion page called `Siteup HQ`, then copy/paste this file into it. Turn each database section into a Notion database using the listed properties.

## Dashboard

### Today

- Follow-ups due today
- Active projects with blocked tasks
- Payments due or overdue
- Launches scheduled this week

### Quick Actions

- Add new client
- Start Launch package project
- Start Growth package project
- Start Premium package project
- Log follow-up
- Log payment

### Key Views

- Active Projects: By stage
- Tasks: My next actions
- Payments: Unpaid
- Clients: Active

---

# Database 1: Clients

Main database for every business Siteup works with.

## Properties

| Property | Type | Options / Notes |
| --- | --- | --- |
| Business Name | Title | Client business name |
| Contact Name | Text | Owner or decision maker |
| Phone | Phone |  |
| Email | Email |  |
| Business Type | Text | Construction, service business, restaurant, etc. |
| Status | Select | New Client, Active Client, Past Client, Paused |
| Package | Select | Launch, Growth, Premium, Custom, Not Chosen |
| Project | Relation | Link to Projects database |
| Client Source | Select | Referral, Website, Cold Outreach, Google, Social, Existing Network, Other |
| Priority | Select | High, Medium, Low |
| Last Contact | Date | Most recent meaningful touch |
| Next Follow-up | Date | Next promised action |
| Estimated Value | Number | Expected project value |
| Total Paid | Rollup | From Payments database |
| Balance Due | Formula | Project price minus paid amount |
| Website URL | URL | Existing or launched website |
| Google Business URL | URL | Optional |
| Notes | Text | Short running context |

## Views

- `All Clients`: Table grouped by Status
- `Active Clients`: Filter Status is Active Client
- `Follow Up`: Filter Next Follow-up is on or before today
- `Construction Companies`: Filter Business Type contains Construction
- `High Priority`: Filter Priority is High

## Client Page Template

### Client Snapshot

- Contact:
- Best way to reach them:
- Business type:
- Current online presence:
- Main problem:
- Package fit:
- Budget / price discussed:
- Start timeline:

### Discovery Notes

- What does the business sell?
- Who are their customers?
- What service areas do they cover?
- What makes them trustworthy?
- What pages do they need?
- What proof do they have? Reviews, photos, past projects, licenses, awards.

### Promised Deliverables

- Website:
- Online presence setup:
- Quote/request flow:
- Branding:
- Apps / automations:
- AI helpers:

### Communication Log

Add important calls, texts, emails, and decisions here.

---

# Database 2: Projects

Use this for every paid or approved client project.

## Properties

| Property | Type | Options / Notes |
| --- | --- | --- |
| Project Name | Title | Example: ABC Roofing - Growth Website |
| Client | Relation | Clients database |
| Package | Select | Launch, Growth, Premium, Custom |
| Price | Number | 700, 1100, 1500, or custom |
| Stage | Select | Not Started, Discovery, Content, Design, Build, Review, Launch Prep, Launched, Bug Fix Window, Complete, Paused |
| Start Date | Date |  |
| Target Launch | Date |  |
| Launch Date | Date |  |
| Tasks | Relation | Tasks database |
| Payments | Relation | Payments database |
| Progress | Rollup | Percent complete from Tasks |
| Client Assets | Relation | Assets database |
| Website URL | URL |  |
| Repo / Files URL | URL | Optional |
| Bug Fix Window Ends | Formula | Launch Date plus 30 days |
| Risk | Select | Low, Medium, High |
| Blocker | Text | Current blocker, if any |

## Views

- `Active Projects`: Filter Stage is not Complete and not Paused
- `Project Board`: Board grouped by Stage
- `Launch Calendar`: Calendar by Target Launch
- `Bug Fix Window`: Filter Stage is Bug Fix Window
- `At Risk`: Filter Risk is High

## Project Page Template

### Project Brief

- Client:
- Package:
- Price:
- Start date:
- Target launch:
- Main outcome:

### Scope

- Included:
- Not included:
- Extra paid requests:

### Access Needed

- Domain:
- Hosting:
- Email:
- Google Business Profile:
- Apple Maps:
- Existing website:
- Logo / brand files:
- Photos:
- Reviews / testimonials:

### Delivery Checklist

- Discovery completed
- Content collected
- Sitemap approved
- Homepage drafted
- Services pages drafted
- Contact / quote form built
- Mobile check completed
- Basic SEO completed
- Client review completed
- Revisions completed
- Launch completed
- 30-day bug fix window started

---

# Database 3: Tasks

Daily execution database for all client work.

## Properties

| Property | Type | Options / Notes |
| --- | --- | --- |
| Task | Title |  |
| Project | Relation | Projects database |
| Client | Rollup | From Project |
| Status | Select | Inbox, Next, Doing, Waiting, Done, Canceled |
| Type | Select | Sales, Discovery, Content, Design, Build, SEO, Google, Apple Maps, Automation, AI, Admin, Support |
| Priority | Select | Urgent, High, Medium, Low |
| Due Date | Date |  |
| Owner | Person | Usually you |
| Estimate | Number | Hours |
| Done | Checkbox |  |
| Notes | Text |  |

## Views

- `Today`: Due Date is today or earlier and Status is not Done
- `Next Actions`: Status is Next
- `By Project`: Group by Project
- `Waiting On Client`: Status is Waiting
- `Support Requests`: Type is Support

## Common Task Templates

### Launch Package Tasks

- Discovery call
- Collect logo, photos, services, reviews, service areas
- Write homepage copy
- Write services section
- Build mobile-friendly website
- Build contact form
- Build quote/request form
- Add reviews/testimonials section
- Add basic SEO title and description
- Set up Telegram website manager
- Test Telegram updates
- Client review
- Revisions
- Launch
- Start 30-day bug fix window

### Growth Package Tasks

- Complete all Launch tasks
- Google Search setup
- Google indexing basics
- Google Business/Profile setup or connection
- Apple Maps setup
- Online presence information check
- Customer request notification email setup
- Confirm Google can find and understand the business

### Premium Package Tasks

- Complete all Growth tasks
- Logo design
- Brand colors and typography
- Business card design
- Flyer or door hanger design
- Shirt / hoodie mockup
- Truck decal mockup
- Brand mini-guide
- Approximate project map
- Map pin popup with photo, title, location, and description

---

# Database 4: Payments

Track invoices, deposits, balances, and paid support requests.

## Properties

| Property | Type | Options / Notes |
| --- | --- | --- |
| Payment Name | Title | Example: ABC Roofing Deposit |
| Client | Relation | Clients database |
| Project | Relation | Projects database |
| Type | Select | Deposit, Final Payment, Support Request, Add-on, Refund |
| Amount | Number |  |
| Status | Select | Draft, Sent, Paid, Overdue, Canceled |
| Due Date | Date |  |
| Paid Date | Date |  |
| Method | Select | Cash, Card, Bank Transfer, Zelle, PayPal, Other |
| Invoice URL | URL | Optional |
| Notes | Text |  |

## Views

- `Unpaid`: Status is Sent or Overdue
- `Paid`: Status is Paid
- `Overdue`: Status is Overdue
- `By Client`: Group by Client

---

# Database 5: Assets

Keep client-provided material organized.

## Properties

| Property | Type | Options / Notes |
| --- | --- | --- |
| Asset Name | Title |  |
| Client | Relation | Clients database |
| Project | Relation | Projects database |
| Asset Type | Select | Logo, Photo, Review, Project Example, Service List, Brand File, Access, Copy, Map Location, Other |
| Status | Select | Needed, Requested, Received, Approved, Rejected, Archived |
| File / URL | Files & media | Or URL if external |
| Usage | Text | Where it should appear |
| Notes | Text |  |

## Views

- `Needed Assets`: Status is Needed or Requested
- `Received`: Status is Received
- `By Client`: Group by Client
- `Project Photos`: Asset Type is Photo or Project Example

---

# Database 6: Support Requests

After launch, support is paid per request depending on size. Track those requests separately from the original package.

## Properties

| Property | Type | Options / Notes |
| --- | --- | --- |
| Request | Title |  |
| Client | Relation | Clients database |
| Project | Relation | Projects database |
| Request Type | Select | Bug Fix, Content Change, New Feature, Website Update, Automation Update, Other |
| Covered By Bug Window | Checkbox | Only for 30 days after launch |
| Status | Select | New, Quoted, Approved, In Progress, Waiting, Done, Canceled |
| Price | Number |  |
| Due Date | Date |  |
| Payment | Relation | Payments database |
| Notes | Text |  |

## Views

- `New Requests`
- `Quoted`
- `In Progress`
- `Done`
- `Bug Fix Window`

---

# Client Status Rules

- `New Client`: You have started a client record, but the project is not active yet.
- `Active Client`: They have paid and have an active project.
- `Past Client`: Project is complete and no active support request is open.
- `Paused`: Waiting for client, access, payment, or a major decision.

# Package Reference

## Launch - $700

For businesses that need a clean website they can manage.

Includes:

- Custom business website
- Mobile-friendly design
- Contact form
- Quote/request form
- Reviews/testimonials section
- Basic SEO setup
- Telegram website manager
- Project/gallery updates from Telegram
- 30 days post-launch bug fixes

## Growth - $1,100

For businesses that want to be easier to find online.

Includes:

- Everything in Launch
- Google Search setup
- Google indexing basics
- Google Business/Profile setup or connection
- Apple Maps setup
- Stronger online presence setup
- Customer request notifications by email

Positioning note:

> We set up the basics so Google can find, index, and understand your business.

Do not promise top Google rankings.

## Premium - $1,500

For businesses that want a sharper brand and stronger proof.

Includes:

- Everything in Growth
- Logo design
- Brand colors and typography
- Business card design
- Flyer or door hanger design
- Shirt/hoodie mockup
- Truck decal mockup
- Brand mini-guide
- Approximate past-project map with clickable pins

Premium does not include custom AI agent planning or custom business system planning unless quoted separately.

# Client Message Templates

## After First Call

Hi {{Name}}, thanks for taking the time to talk today. Based on what you shared, I think the best fit is the {{Package}} package. I’ll send over the scope, price, and next steps so you can review everything clearly.

## Project Start

Hi {{Name}}, excited to get started on {{Business Name}}. The next step is collecting the materials and access I need so I can begin the project.

## Asset Request

Hi {{Name}}, to keep the project moving, please send over the items below when you can:

- Logo
- Best business photos
- Service list
- Service areas
- Reviews/testimonials
- Domain or website access, if available

## Launch Message

Hi {{Name}}, your Siteup project is live: {{Website URL}}. I’ll keep an eye on bugs for the next 30 days. Any new changes or additions after that can be handled as paid support requests depending on size.

# Weekly Review Checklist

Use this every Friday or Sunday.

- Review all clients with follow-ups due
- Check every active project stage
- Identify blocked tasks
- Request missing client assets
- Check unpaid invoices
- Schedule next week launches and reviews
- Log support requests separately from original project scope
