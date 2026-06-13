# 🎨 ZecPath UI Guide

This document describes the component usage and design principles followed throughout the ZecPath application to ensure consistency, maintainability, and accessibility.

---

# Component Usage

## Buttons

Buttons are used for user actions such as submitting forms, navigating, and opening dialogs.

### Primary Button

Used for important actions.

```jsx
<Button variant="primary">
  Save Changes
</Button>
```

### Secondary Button

Used for less prominent actions.

```jsx
<Button variant="secondary">
  Cancel
</Button>
```

### Danger Button

Used for destructive actions.

```jsx
<Button variant="danger">
  Delete
</Button>
```

---

## Cards

Cards are used to display grouped information.

```jsx
<Card>
  <CardHeader>
    Candidate Details
  </CardHeader>

  <CardContent>
    Candidate information goes here.
  </CardContent>
</Card>
```

---

## Input Fields

Used in forms for collecting user data.

```jsx
<Input
  type="email"
  placeholder="Enter your email"
/>
```

Supported input types:

* Text
* Email
* Password
* Number
* Search
* Date

---

## Modal Components

Used for confirmations and detailed interactions.

Examples:

* Delete confirmation
* AI evaluation results
* Interview instructions
* Profile editing

```jsx
<Modal open={isOpen}>
  <ModalContent>
    Modal content
  </ModalContent>
</Modal>
```

---

## Tables

Used in:

* Candidate management
* Recruiter dashboard
* Interview history
* Notifications

```jsx
<Table>
  <TableHeader />
  <TableBody />
</Table>
```

---

## Alerts

Used for displaying messages.

Examples:

* Success notifications
* Error messages
* Warnings
* Informational messages

```jsx
<Alert variant="success">
  Profile updated successfully.
</Alert>
```

---

## Loading Components

Used while fetching data.

Examples:

* Skeleton cards
* Spinner loaders
* Progress indicators

```jsx
<LoadingSpinner />
```

---

# Design System

## Color Palette

### Primary

| Color  | Hex     |
| ------ | ------- |
| Indigo | #4F46E5 |

### Secondary

| Color  | Hex     |
| ------ | ------- |
| Violet | #7C3AED |

### Success

| Color | Hex     |
| ----- | ------- |
| Green | #22C55E |

### Warning

| Color | Hex     |
| ----- | ------- |
| Amber | #F59E0B |

### Error

| Color | Hex     |
| ----- | ------- |
| Red   | #EF4444 |

### Neutral

| Color     | Hex     |
| --------- | ------- |
| Slate-50  | #F8FAFC |
| Slate-100 | #F1F5F9 |
| Slate-500 | #64748B |
| Slate-900 | #0F172A |

---

## Typography

### Headings

```css
font-weight: 700;
```

| Element | Size |
| ------- | ---- |
| H1      | 36px |
| H2      | 30px |
| H3      | 24px |
| H4      | 20px |

### Body Text

```css
font-size: 16px;
font-weight: 400;
line-height: 1.6;
```

---

## Border Radius

| Type        | Value |
| ----------- | ----- |
| Small       | 8px   |
| Medium      | 12px  |
| Large       | 16px  |
| Extra Large | 24px  |

---

## Shadows

### Card Shadow

```css
shadow-md
```

### Modal Shadow

```css
shadow-xl
```

### Hover Shadow

```css
hover:shadow-lg
```

---

## Spacing System

| Size | Value |
| ---- | ----- |
| xs   | 4px   |
| sm   | 8px   |
| md   | 16px  |
| lg   | 24px  |
| xl   | 32px  |
| 2xl  | 48px  |

---

## Icons

Library:

* Lucide React

Examples:

```jsx
<Home />
<User />
<Briefcase />
<Bell />
<Calendar />
<Search />
```

---

## Responsive Breakpoints

| Device  | Width          |
| ------- | -------------- |
| Mobile  | < 640px        |
| Tablet  | 640px - 1024px |
| Desktop | > 1024px       |

---

## Accessibility Standards

* Keyboard navigation support.
* ARIA labels on interactive elements.
* Focus indicators.
* High color contrast.
* Semantic HTML.
* Screen reader compatibility.

---

## Dark Mode

Supported using Tailwind CSS.

Example:

```jsx
<div className="bg-white dark:bg-slate-900">
  Content
</div>
```

---

## Error States

Components should support:

* Empty states
* Loading states
* API failures
* Retry actions
* Validation messages

---

## Animation

Use subtle transitions:

```css
transition-all duration-300
```

Avoid excessive animations to maintain performance and usability.

---

# Principles

1. Consistency across all pages.
2. Mobile-first responsive design.
3. Accessibility-first development.
4. Reusable components.
5. Clear user feedback.
6. Modern and professional appearance.
7. High performance and maintainability.
