# Viruj Health Component Library Documentation

This document lists and details the props interfaces for all custom reusable UI primitives, layout primitives, and domain composite components.

---

## UI Primitives (`components/ui/`)

### 1. `Button`
Extends `React.ButtonHTMLAttributes<HTMLButtonElement>`.
- **`variant`**: `'primary' | 'secondary' | 'ghost' | 'ai'` (default: `'primary'`)
- **`size`**: `'sm' | 'md' | 'lg'` (default: `'md'`)
- **`leftIcon`**: `React.ReactNode` (optional)
- **`rightIcon`**: `React.ReactNode` (optional)
- **`loading`**: `boolean` (optional; displays a spinner and disables pointer events)

### 2. `Badge`
Extends `React.HTMLAttributes<HTMLSpanElement>`.
- **`variant`**: `'normal' | 'borderline' | 'critical' | 'info' | 'ai' | 'ghost'` (default: `'normal'`)

### 3. `Chip`
Extends `React.HTMLAttributes<HTMLSpanElement>`.
- **`active`**: `boolean` (optional; switches background to primary teal)

### 4. `Card`
Extends `React.HTMLAttributes<HTMLDivElement>`.
- **`variant`**: `'surface' | 'subtle'` (default: `'surface'`)
- **`hover`**: `boolean` (optional; adds outline/border transition to teal on hover)

### 5. `Avatar`
Extends `React.HTMLAttributes<HTMLDivElement>`.
- **`src`**: `string` (optional; image URL)
- **`alt`**: `string` (optional; accessibility image label)
- **`fallback`**: `string` (initials displayed if image is loading or missing)

### 6. `Input`
Extends `React.InputHTMLAttributes<HTMLInputElement>`.
- **`variant`**: `'default' | 'ghost'` (default: `'default'`)
- **`fullWidth`**: `boolean` (optional; spans 100% width of parent container)
- **`error`**: `string` (optional; red error helper text)
- **`label`**: `string` (optional; accessible label text above input)
- **`helperText`**: `string` (optional; gray description text below input)

### 7. `SplitText`
Extends `React.HTMLAttributes<HTMLSpanElement>`.
- **`text`**: `string` (the headline string to segment)
- **`wordClassName`**: `string` (optional; custom styling className applied to each word span)

### 8. `AnimatedCounter`
Extends `React.HTMLAttributes<HTMLSpanElement>`.
- **`value`**: `number` (target value to count up to)
- **`prefix`**: `string` (optional; prepended text, e.g. `$`)
- **`suffix`**: `string` (optional; appended text, e.g. `k+`)

---

## Layout Components (`components/layout/`)

### 1. `Container`
Extends `React.HTMLAttributes<HTMLDivElement>`.
- **`clean`**: `boolean` (optional; overrides default `max-w-7xl px-6 mx-auto` styling)

### 2. `Section`
Extends `React.HTMLAttributes<HTMLElement>`.
- **`dark`**: `boolean` (optional; shifts background to dark-blue `viruj-navy-950` with white text)

### 3. `Grid`
Extends `React.HTMLAttributes<HTMLDivElement>`.
- **`cols`**: `1 | 2 | 3 | 4 | 6` (default: `3`; responsive grid columns)

---

## Domain Composites (`components/domain/`)

### 1. `DoctorCard`
- **`doctor`**: `Doctor` (structured credentials object)
- **`onBook`**: `(doctor: Doctor) => void` (optional; booking handler callback)

### 2. `SpecialtyCard`
- **`specialty`**: `Specialty` (structured medical domain object)
- **`onClick`**: `(specialty: Specialty) => void` (optional; selection callback)

### 3. `AIMessageBubble`
- **`message`**: `AIMessage` (conversation bubble object containing clinical confidence levels and actions)
- **`onActionClick`**: `(label: string, href: string) => void` (optional; action callback)
