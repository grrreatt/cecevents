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

export const galleryImagesQuery = `
  *[_type == "galleryImage"] | order(order asc) {
    _id,
    title,
    category,
    image,
    order
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

export const teamMembersQuery = `
  *[_type == "teamMember"] | order(order asc) {
    _id,
    name,
    role,
    photo,
    socials,
    order
  }
`

export const portfolioLimitedQuery = (limit: number) => `
  *[_type == "portfolioItem"] | order(order asc)[0...${limit}] {
    _id,
    title,
    category,
    location,
    attendees,
    description,
    coverImage,
    icon,
    order
  }
`
