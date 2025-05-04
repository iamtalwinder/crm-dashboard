import {
  EbayIcon,
  WalmartIcon,
  FacebookIcon,
  AmazonIcon,
  EtsyIcon,
} from "@/components/icons"

export function getChannelIcon(channel: string) {
  switch (channel) {
    case "ebay":
      return <EbayIcon />
    case "walmart":
      return <WalmartIcon />
    case "facebook":
      return <FacebookIcon />
    case "amazon":
      return <AmazonIcon />
    case "etsy":
      return <EtsyIcon />
    default:
      return null
  }
}
