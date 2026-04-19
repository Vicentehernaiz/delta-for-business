import { ImageResponse } from '@vercel/og'

// Agent 5 (SEO & Quality) will implement dynamic OG image generation
// using @vercel/og for social sharing preview images
//
// This is a stub. Reference: https://vercel.com/docs/functions/og-image-generation
//
// Pattern:
// - Extract page metadata from URL slug
// - Generate branded OG image with title, description, Delta branding
// - Return as PNG for social media

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const title = searchParams.get('title') || 'Delta for Business'
    const description = searchParams.get('description') || 'Corporate travel solutions'

    return new ImageResponse(
      (
        <div
          style={{
            fontSize: 128,
            background: 'linear-gradient(135deg, #0B1940 0%, #1B2A5C 100%)',
            width: '100%',
            height: '100%',
            display: 'flex',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            color: '#FFFFFF',
          }}
        >
          <div style={{ fontSize: 60, marginBottom: 20 }}>{title}</div>
          <div style={{ fontSize: 24, color: '#B8B8B8' }}>{description}</div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    )
  } catch (e) {
    return new Response('Failed to generate OG image', { status: 500 })
  }
}
