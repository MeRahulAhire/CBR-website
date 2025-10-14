import React from 'react'

export default function Deploy_ld() {
  return (
    <>
    {/* <!-- Structured Data / JSON-LD --> */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "TechArticle",
              "headline": "How to Deploy Cloud Blender Render — Step-by-Step Guide with Free RunPod Credits",
              "description": "Learn how to deploy Cloud Blender Render on RunPod with our step-by-step guide. Get up to $500 in free credits, choose RTX GPUs, and start rendering fast.",
              "image": "https://cloud-blender-render-rahulahire.com/og-tag-image.webp",
              "author": {
                "@type": "Organization",
                "name": "Cloud Blender Render"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Cloud Blender Render",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://cloud-blender-render-rahulahire.com/cloud-blender-render-logo.svg"
                }
              },
              "url": "https://cloud-blender-render-rahulahire.com/deploy"
            }
          `}
        </script>
    </>
  )
}
