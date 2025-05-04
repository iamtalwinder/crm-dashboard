import { Order } from "@/components/layout/account-details/dashboard/recent-orders"

export const ORDER_STATS = {
  totalOrder: {
    value: 123,
    trend: 'up',
    percentage: '28%',
    time: 'From The Last Month'
  },
  totalTaken: {
    value: 123,
    trend: 'down',
    percentage: '15%',
    time: 'From The Last Month'
  },
  totalRevenue: {
    value: 123,
    trend: 'up',
    percentage: '28%',
    time: 'From The Last Month'
  },
  pendingOrders: {
    value: '$1234.99',
    trend: 'down',
    percentage: '28%',
    time: 'From The Last Month'
  },
  pendingReturns: {
    value: '$1234.99',
    trend: 'down',
    percentage: '28%',
    time: 'From The Last Month'
  }
}

export const ORDER_STATUS = {
  all: 50,
  new: 50,
  pending: 50,
  dispatched: 50,
  delivered: 50,
  cancelled: 50
}

export const RECENT_ORDERS: Order[] = [
  {
    orderId: "275936",
    quantity: 1,
    product: "iPhone 15 pro max",
    productImage: "/products/iphone.png",
    channel: "ebay",
    customer: {
      name: "Gabriella Adams",
      avatar: "/avatars/gabriella.png",
    },
    total: 400.0,
  },
  {
    orderId: "415368",
    quantity: 4,
    product: "White Danim Tshirt M Size",
    productImage: "/products/tshirt.png",
    channel: "walmart",
    customer: {
      name: "Harris Samuel",
      avatar: "/avatars/harris.png",
    },
    total: 151.0,
  },
  {
    orderId: "275063",
    quantity: 2,
    product: "David Beckham classic Blue Perfume",
    productImage: "/products/perfume.png",
    channel: "facebook",
    customer: {
      name: "Lilia Ponce",
      avatar: "/avatars/lilia.png",
    },
    total: 167.0,
  },
  {
    orderId: "274778",
    quantity: 3,
    product: "Samsung i-20 series smart watch",
    productImage: "/products/smartwatch.png",
    channel: "amazon",
    customer: {
      name: "Rehan Choudhary",
      avatar: "/avatars/rehan.png",
    },
    total: 262.0,
  },
  {
    orderId: "638032",
    quantity: 5,
    product: "Nykaa Red lipstick",
    productImage: "/products/lipstick.png",
    channel: "etsy",
    customer: {
      name: "Maxim Brooks",
      avatar: "/avatars/maxim.png",
    },
    total: 319.0,
  },
]
