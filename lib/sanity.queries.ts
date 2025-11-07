export const portfolioItemsQuery = `
  *[_type == "portfolioItem"] | order(order asc) {
    _id,
    title,
    category,
    location,
    attendees,
    description,
    coverImage,
    gallery,
    videos,
    icon
  }
`

export const servicesQuery = `
  *[_type == "service"] | order(order asc) {
    _id,
    title,
    description,
    icon,
    iconImage,
    features,
    order
  }
`

export const siteSettingsQuery = `
  *[_type == "siteSettings"][0] {
    siteTitle,
    logo,
    contactEmail,
    contactPhone,
    address,
    socialLinks
  }
`
