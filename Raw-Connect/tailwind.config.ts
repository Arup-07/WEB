foreground: 'hsl(var(--foreground))',
primary: {
DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
					foreground: 'hsl(var(--primary-foreground))',
					glow: 'hsl(var(--primary-glow))'
},
secondary: {
DEFAULT: 'hsl(var(--secondary))',
@@ -44,53 +45,61 @@
DEFAULT: 'hsl(var(--accent))',
foreground: 'hsl(var(--accent-foreground))'
},
				success: {
					DEFAULT: 'hsl(var(--success))',
					foreground: 'hsl(var(--success-foreground))'
				},
				warning: {
					DEFAULT: 'hsl(var(--warning))',
					foreground: 'hsl(var(--warning-foreground))'
				},
popover: {
DEFAULT: 'hsl(var(--popover))',
foreground: 'hsl(var(--popover-foreground))'
},
card: {
DEFAULT: 'hsl(var(--card))',
foreground: 'hsl(var(--card-foreground))'
},
sidebar: {
DEFAULT: 'hsl(var(--sidebar-background))',
foreground: 'hsl(var(--sidebar-foreground))',
primary: 'hsl(var(--sidebar-primary))',
'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
accent: 'hsl(var(--sidebar-accent))',
'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
border: 'hsl(var(--sidebar-border))',
ring: 'hsl(var(--sidebar-ring))'
}
},
borderRadius: {
lg: 'var(--radius)',
md: 'calc(var(--radius) - 2px)',
sm: 'calc(var(--radius) - 4px)'
},
keyframes: {
'accordion-down': {
from: {
height: '0'
},
to: {
height: 'var(--radix-accordion-content-height)'
}
},
'accordion-up': {
from: {
height: 'var(--radix-accordion-content-height)'
},
to: {
height: '0'
}
}
},
animation: {
'accordion-down': 'accordion-down 0.2s ease-out',
'accordion-up': 'accordion-up 0.2s ease-out'
}
}
},
plugins: [require("tailwindcss-animate")],
} satisfies Config;