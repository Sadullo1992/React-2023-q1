export interface IPhoto {
  id: string;
  created_at: null | string;
  updated_at: null | string;
  promoted_at: null | string;
  width: number;
  height: number;
  color: null | string;
  blur_hash: null | string;
  description: null | string;
  alt_description: null | string;
  urls: Urls;
  links: PhotoLinks;
  likes: number;
  liked_by_user: boolean;
  current_user_collections: null | string[];
  sponsorship: Sponsorship | null;
  topic_submissions: unknown;
  user: User;
}

export interface PhotoLinks {
  self: null | string;
  html: null | string;
  download: null | string;
  download_location: null | string;
}

export interface Sponsorship {
  impression_urls: null | string[];
  tagline: null | string;
  tagline_url: null | string;
  sponsor: User;
}

export interface User {
  id: null | string;
  updated_at: null | string;
  username: null | string;
  name: null | string;
  first_name: null | string;
  last_name: null | string;
  twitter_username: null | string;
  portfolio_url: null | string;
  bio: null | string;
  location: null | string;
  links: UserLinks;
  profile_image: ProfileImage;
  instagram_username: null | string;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  accepted_tos: boolean;
  for_hire: boolean;
  social: Social;
}

export interface UserLinks {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
  following: string;
  followers: string;
}

export interface ProfileImage {
  small: string;
  medium: string;
  large: string;
}

export interface Social {
  instagram_username: null | string;
  portfolio_url: null | string;
  twitter_username: null | string;
  paypal_email: null | string;
}

export interface Urls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
}
