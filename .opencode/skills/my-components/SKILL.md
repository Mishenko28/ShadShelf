---
name: my-components
description: Use when creating, adding, or registering new component variants in the my-components showcase folder. Covers variant file creation, naming conventions, prop handling, and registry updates.
---

# My Components Skill

This skill guides creating new component variants in `src/my-components/components/` for the component showcase.

## When to Use

- Adding a new component to the showcase
- Creating new variants of an existing component
- Registering variants in the component registry

## Folder Structure

```
src/my-components/
├── components/
│   └── {ComponentName}/
│       ├── {ComponentName}Default.tsx
│       ├── {ComponentName}Small.tsx
│       └── ...
├── my-components.ts          # Registry with lazy imports
├── ComponentsLayout.tsx
├── Sidebar.tsx
├── useComponentStore.ts
├── Code.tsx
└── componentCopy.json
```

## File Convention

Each variant is a separate file. Follow this template:

```tsx
// ---
import { ComponentSubComponent } from "@/components/ui/{component}"
// ---

export default function {ComponentName}{Variant}() {
	return (
		// ---
		<Component prop="value">
			<SubComponent>Content</SubComponent>
		</Component>
		// ---
	)
}
```

### Rules

1. **`// ---` markers** — Wrap imports and JSX with `// ---` on separate lines. These markers are used for code extraction.

2. **Default export** — Always use `export default function {FileName}()`.

3. **Import from `@/components/ui/`** — Use the project alias, never relative paths.

4. **Omit default props** — Never include a prop if it matches the component's default value:
   - `size="default"` → omit
   - `orientation="horizontal"` → omit
   - `variant="icon"` (when icon is default) → omit
   - `state="done"` → omit (never include state prop)

5. **Image placeholders** — Use `<div className="bg-accent h-full w-full" />` instead of `<img>` for image placeholders.

6. **Lorem text** — Use `Lorem ipsum dolor sit amet.` for titles and `Lorem ipsum dolor sit amet consectetur.` for descriptions.

## Variant Naming

Combine feature names in PascalCase. Examples from Alert Dialog:

| Name | Props |
|------|-------|
| `Default` | _(none)_ |
| `All` | media + all elements |
| `Simple` | no media |
| `Small` | `size="sm"` |
| `Destructive` | destructive variant |
| `AllSmall` | all + small |
| `SimpleDestructive` | simple + destructive |
| `SimpleSmallDestructive` | simple + small + destructive |

### Naming pattern for combinations:

```
{Feature1}{Feature2}{Feature}
```

Examples for Attachment:
- `VerticalSmall` → `orientation="vertical"` + `size="sm"`
- `ImageVertical` → `variant="image"` + `orientation="vertical"`
- `ImageVerticalSmall` → all three combined

## Registering in my-components.ts

Add a lazy import entry to the `my-components` array:

```tsx
{
	name: "Attachment",
	path: "attachment",
	variants: [
		{
			name: "Default",
			path: "default",
			fileName: "AttachmentDefault",
			component: lazy(() =>
				import("./components/Attachment/AttachmentDefault").then(module => ({ default: module.default })),
			),
		},
		{
			name: "Small",
			path: "small",
			fileName: "AttachmentSmall",
			component: lazy(() =>
				import("./components/Attachment/AttachmentSmall").then(module => ({ default: module.default })),
			),
		},
	],
},
```

### Registry fields:

| Field | Description |
|-------|-------------|
| `name` | Display name in sidebar |
| `path` | URL-safe slug |
| `fileName` | Must match the exported function name |
| `component` | Lazy import with `.then(module => ({ default: module.default }))` |

## Workflow

1. Create folder `src/my-components/components/{ComponentName}/`
2. Create variant files following the template
3. Register all variants in `my-components.ts`
4. Run `npx tsc --noEmit` to verify no type errors
