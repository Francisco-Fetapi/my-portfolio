import {
  IconPhoneCall,
  IconCalendar,
  IconBrandTwitter,
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconBrandGmail,
  IconBrandWhatsapp,
} from "@tabler/icons";
import useTranslation from "next-translate/useTranslation";
import useMe from "./useMe";

export default function useContacts() {
  const { me } = useMe();
  const { t } = useTranslation("common");

  const contacts = [
    {
      Icon: IconBrandGmail,
      href: `mailto://${me.email}`,
      label: "Gmail",
      icon: "gmail.svg",
    },
    {
      Icon: IconBrandLinkedin,
      href: me.linkedin,
      label: "Linkedin",
      icon: "linkedin.svg",
    },
    {
      Icon: IconBrandFacebook,
      href: me.facebook,
      label: "Facebook",
      icon: "facebook.svg",
    },
    {
      Icon: IconBrandTwitter,
      href: me.twitter,
      label: "Twitter",
      icon: "twitter.svg",
    },
    {
      Icon: IconBrandInstagram,
      href: me.instagram,
      label: "Instagram",
      icon: "instagram.svg",
    },
    {
      Icon: IconBrandWhatsapp,
      href: me.whatsapp,
      label: "Whatsapp",
      icon: "whatsapp.svg",
    },
    {
      Icon: IconPhoneCall,
      href: `tel://${me.phone2}`,
      icon: "phone.svg",
      label: t("telephone"),
    },
    {
      Icon: IconCalendar,
      href: me.calendly,
      icon: "calendar.svg",
      label: "Calendly",
    },
  ];
  return { contacts };
}
