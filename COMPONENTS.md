# 🧩 ZecPath Component Documentation

This document describes the reusable UI components used throughout the ZecPath application.

---

# Button Component

Used for triggering actions.

## Props

| Prop     | Type      | Default     | Description     |
| -------- | --------- | ----------- | --------------- |
| variant  | string    | `"primary"` | Button style    |
| size     | string    | `"md"`      | Button size     |
| disabled | boolean   | `false`     | Disables button |
| onClick  | function  | -           | Click handler   |
| children | ReactNode | -           | Button content  |

## Example Usage

```jsx
<Button
  variant="primary"
  size="md"
  onClick={handleSubmit}
>
  Save Changes
</Button>
```

---

# Input Component

Used for collecting user input.

## Props

| Prop        | Type     | Description      |
| ----------- | -------- | ---------------- |
| type        | string   | Input type       |
| placeholder | string   | Placeholder text |
| value       | string   | Input value      |
| onChange    | function | Change handler   |
| disabled    | boolean  | Disable input    |
| required    | boolean  | Required field   |

## Example Usage

```jsx
<Input
  type="email"
  placeholder="Enter email"
  value={email}
  onChange={handleChange}
/>
```

---

# Card Component

Displays grouped information.

## Props

| Prop      | Type      | Description       |
| --------- | --------- | ----------------- |
| children  | ReactNode | Card content      |
| className | string    | Additional styles |

## Example Usage

```jsx
<Card>
  <h3>Candidate Details</h3>
  <p>Frontend Developer</p>
</Card>
```

---

# Modal Component

Displays content inside a popup window.

## Props

| Prop     | Type      | Description         |
| -------- | --------- | ------------------- |
| open     | boolean   | Controls visibility |
| onClose  | function  | Close callback      |
| children | ReactNode | Modal content       |

## Example Usage

```jsx
<Modal open={isOpen} onClose={() => setIsOpen(false)}>
  <ModalContent>
    Delete this item?
  </ModalContent>
</Modal>
```

---

# Badge Component

Used to show status labels.

## Props

| Prop     | Type      | Description |
| -------- | --------- | ----------- |
| variant  | string    | Badge style |
| children | ReactNode | Badge text  |

## Example Usage

```jsx
<Badge variant="success">
  Active
</Badge>
```

Available variants:

* success
* warning
* error
* info

---

# Alert Component

Displays feedback messages.

## Props

| Prop    | Type   | Description  |
| ------- | ------ | ------------ |
| variant | string | Alert type   |
| message | string | Message text |

## Example Usage

```jsx
<Alert
  variant="success"
  message="Profile updated successfully."
/>
```

---

# Loading Spinner

Indicates loading state.

## Props

| Prop | Type   | Default |
| ---- | ------ | ------- |
| size | string | `"md"`  |

## Example Usage

```jsx
<LoadingSpinner size="lg" />
```

---

# Avatar Component

Displays profile images.

## Props

| Prop | Type   | Description      |
| ---- | ------ | ---------------- |
| src  | string | Image URL        |
| alt  | string | Alternative text |
| size | string | Avatar size      |

## Example Usage

```jsx
<Avatar
  src={user.profileImage}
  alt={user.name}
  size="lg"
/>
```

---

# Search Bar Component

Used for filtering and searching.

## Props

| Prop        | Type     | Description      |
| ----------- | -------- | ---------------- |
| value       | string   | Search query     |
| onChange    | function | Change handler   |
| placeholder | string   | Placeholder text |

## Example Usage

```jsx
<SearchBar
  value={search}
  onChange={setSearch}
  placeholder="Search candidates..."
/>
```

---

# Notification Component

Displays notifications and updates.

## Props

| Prop        | Type   | Description                   |
| ----------- | ------ | ----------------------------- |
| title       | string | Notification title            |
| description | string | Notification message          |
| type        | string | Success, warning, info, error |

## Example Usage

```jsx
<Notification
  title="Interview Scheduled"
  description="Interview has been scheduled successfully."
  type="success"
/>
```

---

# Pagination Component

Used for navigating multiple pages.

## Props

| Prop         | Type     | Description         |
| ------------ | -------- | ------------------- |
| currentPage  | number   | Active page         |
| totalPages   | number   | Total pages         |
| onPageChange | function | Page change handler |

## Example Usage

```jsx
<Pagination
  currentPage={page}
  totalPages={10}
  onPageChange={setPage}
/>
```

---

# Table Component

Used for displaying structured data.

## Props

| Prop    | Type  | Description   |
| ------- | ----- | ------------- |
| columns | array | Table columns |
| data    | array | Table rows    |

## Example Usage

```jsx
<Table
  columns={columns}
  data={candidates}
/>
```

---

# Sidebar Component

Used for application navigation.

## Props

| Prop      | Type    | Description      |
| --------- | ------- | ---------------- |
| items     | array   | Navigation items |
| collapsed | boolean | Collapse state   |

## Example Usage

```jsx
<Sidebar
  items={menuItems}
  collapsed={false}
/>
```

---

# Theme Toggle Component

Switches between light and dark modes.

## Props

No props required.

## Example Usage

```jsx
<ThemeToggle />
```

---

# Interview Card Component

Displays interview information.

## Props

| Prop    | Type   | Description      |
| ------- | ------ | ---------------- |
| title   | string | Interview title  |
| company | string | Company name     |
| date    | string | Interview date   |
| status  | string | Interview status |

## Example Usage

```jsx
<InterviewCard
  title="Frontend Developer"
  company="Tech Solutions"
  date="10 July 2026"
  status="Upcoming"
/>
```

---
