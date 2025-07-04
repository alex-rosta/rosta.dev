# About Page Text Content

## How to Update About Page Text

To update the text content on the about page, simply edit the `aboutPageText.js` file in this directory.

### File Structure

```
data/content/aboutPageText.js
```

This file contains all the text content for the about page, making it easy to update without touching the React component code.

### Available Text Fields

#### Flip Words Animation
- `flipWords`: Array of words that appear in the animated text on the first tab

#### Tab Content
Each tab has the following editable fields:

**About Me Tab (`aboutMe`):**
- `title`: Tab title
- `description`: Main description text
- `buttonText`: Button text
- `buttonLink`: Button link URL

**Learning Tab (`learning`):**
- `title`: Tab title
- `mainTitle`: Main heading in the tab content
- `description`: Description text
- `buttonText`: Button text
- `buttonLink`: Button link URL

**Homelab Tab (`homelab`):**
- `title`: Tab title
- `mainTitle`: Main heading in the tab content
- `description`: Description text
- `buttonText`: Button text
- `buttonLink`: Button link URL

**Cat Tab (`cat`):**
- `title`: Tab title
- `mainTitle`: Main heading in the tab content
- `description`: Description text
- `buttonText`: Set to `null` (no button)
- `buttonLink`: Set to `null` (no link)

### Example Update

To change the about me description, simply update:

```javascript
aboutMe: {
  title: 'About Me',
  description: "Your new description here...",
  buttonText: 'View Career',
  buttonLink: '/career',
},
```

### Important Notes

- The about page functionality and styling remain exactly the same
- Only the text content is extracted for easy editing
- All original colors, animations, and layout are preserved
- Remember to save the file after making changes
- The development server will automatically reload with your changes
