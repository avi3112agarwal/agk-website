import { SVGProps } from "react";

type LogoProps = SVGProps<SVGSVGElement>;

type ImgLogoProps = {
  className?: string;
  style?: React.CSSProperties;
};

// scale visually enlarges logos whose source PNG bakes in transparent
// padding so much that the mark renders small inside its container.
function makeImgLogo(src: string, alt: string, scale = 1) {
  return function ImgLogo({ className, style }: ImgLogoProps) {
    // eslint-disable-next-line @next/next/no-img-element
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        style={{
          objectFit: "contain",
          ...(scale !== 1 ? { transform: `scale(${scale})` } : null),
          ...style,
        }}
      />
    );
  };
}

export const QuickBooksLogo = makeImgLogo("/accounting/quickbooks.jpg", "QuickBooks Online");

export const QuickBooksDesktopLogo = makeImgLogo("/accounting/quickbooks.jpg", "QuickBooks Desktop");

export const XeroLogo = makeImgLogo("/accounting/xero.svg", "Xero");

export const NetSuiteLogo = makeImgLogo("/accounting/netsuite.png", "NetSuite");

export const OracleNetSuiteLogo = makeImgLogo("/accounting/netsuite.png", "Oracle NetSuite");

export const ZohoLogo = makeImgLogo("/accounting/zoho.png", "Zoho Books");

export const SageLogo = makeImgLogo("/accounting/sage.png", "Sage");

export const YardiLogo = makeImgLogo("/accounting/yardi.png", "Yardi");

export const AppFolioLogo = makeImgLogo("/accounting/appfolio.png", "AppFolio");

export const WaveLogo = makeImgLogo("/accounting/wave.png", "Wave");

export const ShopifyLogo = makeImgLogo("/accounting/shopify.webp", "Shopify");

/* -------------------- Communication -------------------- */

export const WhatsAppLogo = makeImgLogo("/communication/whatsapp.png", "WhatsApp", 3.6);

export const OutlookLogo = makeImgLogo("/communication/outlook.png", "Outlook", 3.6);

export const GmailLogo = makeImgLogo("/communication/gmail.png", "Gmail", 3.6);

export const SkypeLogo = makeImgLogo("/communication/skype.png", "Skype", 3.2);

export const ZoomLogo = makeImgLogo("/communication/zoom.jpg", "Zoom", 1.6);

export const MicrosoftTeamsLogo = makeImgLogo(
  "/communication/teams.png",
  "Microsoft Teams",
  2.5,
);

export const SlackLogo = makeImgLogo("/communication/slack.png", "Slack", 1.5);

export const TelegramLogo = makeImgLogo("/communication/telegram.png", "Telegram", 1.5);

export const GoogleMeetLogo = makeImgLogo(
  "/communication/google-meet.png",
  "Google Meet",
);

export const WebexLogo = makeImgLogo("/communication/webex.svg", "Webex", 1.7);

/* -------------------- Document storage -------------------- */

export function SharePointLogo(props: LogoProps) {
  return (
    <svg viewBox="0 0 160 40" fill="none" {...props}>
      <circle cx="20" cy="20" r="14" fill="#036C70" />
      <text
        x="20"
        y="25"
        textAnchor="middle"
        fill="#fff"
        fontSize="14"
        fontWeight="800"
        fontFamily="Inter, sans-serif"
      >
        s
      </text>
      <text
        x="38"
        y="26"
        fill="#036C70"
        fontSize="14"
        fontWeight="800"
        fontFamily="Inter, sans-serif"
      >
        SharePoint
      </text>
    </svg>
  );
}

export function OneDriveLogo(props: LogoProps) {
  return (
    <svg viewBox="0 0 140 40" fill="none" {...props}>
      <path
        d="M8 24a6 6 0 016-6 8 8 0 0115-2 5 5 0 014 7H12a4 4 0 01-4-4z"
        fill="#0364B8"
      />
      <text
        x="44"
        y="26"
        fill="#0364B8"
        fontSize="14"
        fontWeight="800"
        fontFamily="Inter, sans-serif"
      >
        OneDrive
      </text>
    </svg>
  );
}

export function GoogleDriveLogo(props: LogoProps) {
  return (
    <svg viewBox="0 0 150 40" fill="none" {...props}>
      <path d="M14 8h10l10 18-5 8H8l-4-8L14 8z" fill="#FFC107" />
      <path d="M24 8l10 18h-15l-5-8 10-10z" fill="#1FA463" />
      <path d="M8 26l5 8h17l-5-8H8z" fill="#4285F4" />
      <text
        x="44"
        y="26"
        fill="#1B1B1B"
        fontSize="14"
        fontWeight="700"
        fontFamily="Inter, sans-serif"
      >
        Google Drive
      </text>
    </svg>
  );
}

export function WeTransferLogo(props: LogoProps) {
  return (
    <svg viewBox="0 0 150 40" fill="none" {...props}>
      <text
        x="2"
        y="28"
        fill="#1B1B1B"
        fontSize="20"
        fontWeight="900"
        fontFamily="Georgia, serif"
        fontStyle="italic"
      >
        We
      </text>
      <text
        x="42"
        y="28"
        fill="#1B1B1B"
        fontSize="14"
        fontWeight="700"
        fontFamily="Inter, sans-serif"
      >
        Transfer
      </text>
    </svg>
  );
}

export function DropboxLogo(props: LogoProps) {
  return (
    <svg viewBox="0 0 140 40" fill="none" {...props}>
      <path d="M10 12l8-4 8 4-8 5-8-5z" fill="#0061FF" />
      <path d="M26 12l8-4 8 4-8 5-8-5z" fill="#0061FF" />
      <path d="M10 22l8-5 8 5-8 5-8-5z" fill="#0061FF" />
      <path d="M26 22l8-5 8 5-8 5-8-5z" fill="#0061FF" />
      <text
        x="50"
        y="26"
        fill="#0061FF"
        fontSize="14"
        fontWeight="800"
        fontFamily="Inter, sans-serif"
      >
        Dropbox
      </text>
    </svg>
  );
}

export function BoxLogo(props: LogoProps) {
  return (
    <svg viewBox="0 0 110 40" fill="none" {...props}>
      <rect x="4" y="10" width="28" height="20" rx="3" fill="#0061D5" />
      <text
        x="18"
        y="26"
        textAnchor="middle"
        fill="#fff"
        fontSize="14"
        fontWeight="900"
        fontFamily="Inter, sans-serif"
        letterSpacing="1"
      >
        box
      </text>
      <text
        x="40"
        y="26"
        fill="#0061D5"
        fontSize="14"
        fontWeight="800"
        fontFamily="Inter, sans-serif"
      >
        Box
      </text>
    </svg>
  );
}

export function NotionLogo(props: LogoProps) {
  return (
    <svg viewBox="0 0 130 40" fill="none" {...props}>
      <rect x="4" y="6" width="28" height="28" rx="4" fill="#fff" stroke="#1B1B1B" strokeWidth="1.5" />
      <text
        x="18"
        y="28"
        textAnchor="middle"
        fill="#1B1B1B"
        fontSize="18"
        fontWeight="900"
        fontFamily="Georgia, serif"
      >
        N
      </text>
      <text
        x="40"
        y="26"
        fill="#1B1B1B"
        fontSize="15"
        fontWeight="800"
        fontFamily="Inter, sans-serif"
      >
        Notion
      </text>
    </svg>
  );
}

export function AdobeAcrobatLogo(props: LogoProps) {
  return (
    <svg viewBox="0 0 160 40" fill="none" {...props}>
      <rect x="4" y="8" width="24" height="24" rx="3" fill="#EC1C24" />
      <text
        x="16"
        y="27"
        textAnchor="middle"
        fill="#fff"
        fontSize="14"
        fontWeight="900"
        fontFamily="Inter, sans-serif"
      >
        A
      </text>
      <text
        x="34"
        y="22"
        fill="#EC1C24"
        fontSize="10"
        fontWeight="700"
        fontFamily="Inter, sans-serif"
        letterSpacing="1"
      >
        ADOBE
      </text>
      <text
        x="34"
        y="34"
        fill="#1B1B1B"
        fontSize="13"
        fontWeight="800"
        fontFamily="Inter, sans-serif"
      >
        Acrobat
      </text>
    </svg>
  );
}

export function ICloudLogo(props: LogoProps) {
  return (
    <svg viewBox="0 0 130 40" fill="none" {...props}>
      <path
        d="M8 24a6 6 0 016-6 8 8 0 0115-2 5 5 0 014 7H12a4 4 0 01-4-4z"
        fill="#3FA9F5"
      />
      <text
        x="44"
        y="26"
        fill="#1B1B1B"
        fontSize="14"
        fontWeight="700"
        fontFamily="Inter, sans-serif"
      >
        iCloud
      </text>
    </svg>
  );
}

/* -------------------- Catalog -------------------- */

export const accountingLogos = [
  { name: "QuickBooks Online", Logo: QuickBooksLogo },
  { name: "QuickBooks Desktop", Logo: QuickBooksDesktopLogo },
  { name: "Xero", Logo: XeroLogo },
  { name: "Oracle NetSuite", Logo: OracleNetSuiteLogo },
  { name: "Zoho Books", Logo: ZohoLogo },
  { name: "Sage", Logo: SageLogo },
  { name: "Yardi", Logo: YardiLogo },
  { name: "AppFolio", Logo: AppFolioLogo },
  { name: "Wave", Logo: WaveLogo },
  { name: "Shopify", Logo: ShopifyLogo },
];

export const communicationLogos = [
  { name: "WhatsApp", Logo: WhatsAppLogo },
  { name: "Outlook", Logo: OutlookLogo },
  { name: "Gmail", Logo: GmailLogo },
  { name: "Skype", Logo: SkypeLogo },
  { name: "Zoom", Logo: ZoomLogo },
  { name: "Microsoft Teams", Logo: MicrosoftTeamsLogo },
  { name: "Slack", Logo: SlackLogo },
  { name: "Google Meet", Logo: GoogleMeetLogo },
  { name: "Webex", Logo: WebexLogo },
  { name: "Telegram", Logo: TelegramLogo },
];

export const documentLogos = [
  { name: "SharePoint", Logo: SharePointLogo },
  { name: "OneDrive", Logo: OneDriveLogo },
  { name: "Google Drive", Logo: GoogleDriveLogo },
  { name: "Dropbox", Logo: DropboxLogo },
  { name: "Box", Logo: BoxLogo },
  { name: "iCloud", Logo: ICloudLogo },
  { name: "WeTransfer", Logo: WeTransferLogo },
  { name: "Notion", Logo: NotionLogo },
  { name: "Adobe Acrobat", Logo: AdobeAcrobatLogo },
  { name: "Gmail", Logo: GmailLogo },
];

// Kept for the marquee in Software section (smaller, accounting-focused)
export const softwareLogos = accountingLogos.slice(0, 8);
