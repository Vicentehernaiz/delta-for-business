/**
 * OG image template component
 * Used with @vercel/og for dynamic OG image generation
 */

interface OgImageProps {
  title: string
  description?: string
  image?: string
  icon?: string
}

export function OgImage({ title, description, image, icon }: OgImageProps) {
  return (
    <div
      style={{
        width: '1200px',
        height: '630px',
        background: 'linear-gradient(135deg, #0B1940 0%, #1e3a8a 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontFamily: 'system-ui, sans-serif',
        padding: '40px',
        textAlign: 'center',
      }}
    >
      {icon && (
        <div
          style={{
            fontSize: '80px',
            marginBottom: '20px',
          }}
        >
          {icon}
        </div>
      )}

      <h1
        style={{
          fontSize: '60px',
          fontWeight: 'bold',
          marginBottom: '20px',
          maxWidth: '1000px',
          lineHeight: '1.2',
        }}
      >
        {title}
      </h1>

      {description && (
        <p
          style={{
            fontSize: '24px',
            color: 'rgba(255, 255, 255, 0.8)',
            maxWidth: '1000px',
            marginBottom: '40px',
          }}
        >
          {description}
        </p>
      )}

      <div
        style={{
          fontSize: '16px',
          color: 'rgba(255, 255, 255, 0.6)',
          marginTop: 'auto',
        }}
      >
        business.delta.com
      </div>
    </div>
  )
}
