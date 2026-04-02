# Human Gesture — CLAUDE.md
# Source of truth for all development sessions
# humangesture.com

---

## PROJECT

Human Gesture is a community for design leaders 
who are still building things.
Founded by Eliel Johnson.
Single page site at launch. Next.js App Router, 
Tailwind CSS, deployed to Vercel.

### Figma (authoritative layout)

- File: [Human Gesture — Figma](https://www.figma.com/design/BS4QBzePuswaPeSIZdgxo1/)
- File key (for MCP / API): `BS4QBzePuswaPeSIZdgxo1`

Use the Figma MCP in Cursor with this file open (or cite the file key / node IDs in chat) when syncing code to the latest frames.

---

## DESIGN TOKENS — EXACT FROM FIGMA

### Colors
```
--color-bg-primary:    #fbf9f6   /* warm off-white — default background */
--color-bg-secondary:  #f5f3f0   /* slightly darker — alternate sections */
--color-bg-section:    #f0f4f2   /* cool gray-green — mandate/pillar block */
--color-text-primary:  #1b1c1a   /* near-black — all body and headline text */
--color-text-secondary:#6b7280   /* medium gray — captions, labels */
--color-accent-dark:   #974400   /* dark amber — primary accent, CTA, emphasis */
--color-accent-mid:    #d2691e   /* lighter amber — hover states, variants */
--color-white:         #ffffff
```

### Typography

Typeface: IBM Plex Sans (Google Fonts)
Weights to load: 400 (Regular), 500 (Medium), 700 (Bold)
```
Hero headline:    IBM Plex Sans Bold,    72px
Section head:     IBM Plex Sans Bold,    36px
Subhead:          IBM Plex Sans Medium,  24px
Pillar label:     IBM Plex Sans Bold,    20px
Body large:       IBM Plex Sans Regular, 18px
Body:             IBM Plex Sans Regular, 16px
Caption/label:    IBM Plex Sans Bold,    12–14px
                  letter-spacing: 0.1em, uppercase
```

### Spacing

Base unit: 8px
Section padding: 80–120px vertical
Content max-width: 1100px
Column gap: 32px

---

## TAILWIND CONFIG
```js
theme: {
  extend: {
    colors: {
      'bg-primary':    '#fbf9f6',
      'bg-secondary':  '#f5f3f0',
      'bg-section':    '#f0f4f2',
      'text-primary':  '#1b1c1a',
      'text-secondary':'#6b7280',
      'accent-dark':   '#974400',
      'accent-mid':    '#d2691e',
    },
    fontFamily: {
      sans: ['IBM Plex Sans', 'sans-serif'],
    },
  }
}
```

---

## COMPONENT LIST — V1

Build in this order:

1. Nav
2. Hero
3. Thesis paragraphs
4. Founder / origin story (two column)
5. Three pillars
6. Pull quote / mandate block
7. Email capture form + API route
8. Footer

No other components for v1.
Do not add components not on this list 
without asking first.

---

## COPY RULES — NEVER VIOLATE THESE

- No em dashes. Use commas or periods instead.
- No placeholder copy. Ever. 
  Ask for real copy if missing.
- Do not reference specific tool names 
  (Cursor, Claude Code, ChatGPT).
  Use "AI-native development tools" instead.
- No hashtags, no trailing questions, 
  no performative enthusiasm.
- Amber accent (#974400) is used sparingly.
  Logo slash, key word emphasis in hero, 
  CTA button only. Not decorative.

---

## SECTION COPY — USE EXACTLY AS WRITTEN

### Nav
```
human/gesture          About    Connect
```
Logo left. Nav items right. 
CTA button "Join the list" — amber fill,
white text, links to #connect anchor.

### Hero headline
```
Human Gesture is a community for design 
leaders who are still building things.
```
"building" renders in accent-dark #974400.
All else in text-primary #1b1c1a.

### Hero subhead
```
As AI generates more of what we interact 
with, the intentional human act — the one 
with a point of view behind it — becomes 
the scarce and valuable thing.
```

### Thesis paragraphs (below hero)
```
Human Gesture exists at that intersection. 
It's where design leaders come to figure out 
what we protect, what we let go, and what 
craft means now.

The price of admission is simple: show up 
with something you're building.
```

### Founder section
Label: ORIGIN STORY (spaced caps, accent color)
```
I started this because I needed the room 
and it didn't exist.

I'm Eliel Johnson — design executive, 
founder of the CVS AI Design Lab, and 
someone who never stopped building things. 
Twenty-five years leading design at scale 
taught me that the judgment layer is what 
matters. Right now, that judgment is exactly 
what's under pressure.

Human Gesture is the community that emerged 
from those conversations.
```

Link: → elieljohnson.com

### Three pillars
Section label: WHAT WE CARE ABOUT
```
01/
Intentional Acts
Design has always been the discipline of 
making choices on behalf of other people. 
That doesn't change when AI is doing more 
of the making. It gets more important.

02/
Radical Agency
The leaders in the room are the ones still 
making things themselves. Not simply 
managing people who make things.

03/
Continuous Craft
Taste compounds. Judgment compounds. 
The practitioners who stay close to the work, 
across every tool generation, are the ones 
whose instincts you can trust.
```

### Pull quote block
Section label: THE MANDATE
Background: bg-section #f0f4f2
```
The price of admission is simple: show up 
with something you're building.
```

Large type. Centered. No attribution.

### Email capture
Section label: JOIN THE LIST
Anchor id: connect
```
Monthly conversations for practitioners. 
Occasional notes from Eliel on what he's 
reading, building, and thinking about. 
First call coming soon.
```

Form: single email field + JOIN button
API route: POST to /api/subscribe
On submit: send to eliel@humangesture.com
Success message: "You're on the list."

### Footer
```
human/gesture    © 2026 Eliel Johnson    LinkedIn ↗
```

Tagline below logo: A repository for intentional design.

---

## IMAGE GUIDANCE

- Hero: no image. Typography only.
- Founder section: photo of Eliel Johnson.
  File: public/hero-eliel.png (already in repo)
- Pillar section: optional single image.
  If used: desaturated, implies making or craft.
  Not stock. Not laptops. Not whiteboards.
- No abstract gradients. No AI-generated art.

---

## DEVELOPMENT RULES

- App Router only. No Pages Router.
- next/font for IBM Plex Sans. 
  Not a CDN link.
- No external UI libraries. 
  Tailwind only for styling.
- Mobile first. 
  Single column on mobile, 
  multi-column on md: and above.
- Whitespace is intentional. 
  Do not compress padding to fit more content.
- Button hover state: 
  accent-mid #d2691e (lighter amber).
- The amber CTA button in nav and hero 
  should not compete with amber on "building" 
  in headline. If conflict, make button 
  outline style on desktop.

---

## PHASE 2 — DO NOT BUILD NOW

Scaffold these routes but leave empty:

- /writing  (MDX articles)
- /events   (links to Luma)

Add Writing to nav only when first 
article is live.

---

## WHAT THIS SITE IS NOT

Not a portfolio site.
Not a personal brand site.
Not a newsletter platform.
Not a company.

It is a named community initiative 
founded and run by Eliel Johnson.
The community is the product.
Eliel is the founder.
Those are different things and the 
page hierarchy reflects that.