import { TiSocialFacebook, TiSocialTwitter } from 'react-icons/ti';
import { AiFillYoutube, AiOutlineInstagram } from 'react-icons/ai';

interface ISocialMediaData {
    id: number;
    href: string;
    icon: JSX.Element;
    class: string;
    title?: string;
};

export const SocialMediaData: ISocialMediaData[] = [
    { id: 1, href: "#/", icon: <TiSocialTwitter />, class: "twitter", title: "Twitter" },
    { id: 2, href: "#/", icon: <TiSocialFacebook />, class: "facebook", title: "Facebook" },
    { id: 3, href: "#/", icon: <AiOutlineInstagram />, class: "instagram", title: "Instagram" },
    { id: 4, href: "#/", icon: <AiFillYoutube />, class: "google", title: "Youtube" }
];