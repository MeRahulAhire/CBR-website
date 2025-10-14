

export default function Home_ld() {
  return (
    <>
    <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Cloud Blender Render",
              "operatingSystem": "Web",
              "applicationCategory": "GraphicsApplication",
              "description": "Cloud Blender Render — open-source, GPU-accelerated rendering platform for Blender using RunPod infrastructure.",
              "image": "https://cloud-blender-render.rahulahire.com/og-tag-image.webp",
              "url": "https://cloud-blender-render.rahulahire.com/",
              "publisher": {
                "@type": "Organization",
                "name": "Cloud Blender Render",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://cloud-blender-render.rahulahire.com/cloud-blender-render-logo.svg"
                }
              },
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "category": "Open Source",
                "url": "https://cloud-blender-render.rahulahire.com/"
              },
              "keywords": ["Blender render farm", "GPU rendering", "RunPod", "RTX 5090", "RTX 4090", "open-source rendering"]
            }
          `}
        </script>
    </>
  )
}
