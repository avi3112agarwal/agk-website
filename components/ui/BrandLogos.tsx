import { SVGProps } from "react";

type LogoProps = SVGProps<SVGSVGElement>;

export function QuickBooksLogo(props: LogoProps) {
  return (
    <svg viewBox="0 0 160 40" fill="none" {...props}>
      <circle cx="20" cy="20" r="18" fill="#2CA01C" />
      <text
        x="20"
        y="26"
        textAnchor="middle"
        fill="#fff"
        fontSize="16"
        fontWeight="800"
        fontFamily="Inter, sans-serif"
      >
        qb
      </text>
      <text
        x="46"
        y="26"
        fill="#2CA01C"
        fontSize="17"
        fontWeight="700"
        fontFamily="Inter, sans-serif"
      >
        QuickBooks
      </text>
    </svg>
  );
}

export function XeroLogo(props: LogoProps) {
  return (
    <svg viewBox="0 0 130 40" fill="none" {...props}>
      <circle cx="20" cy="20" r="18" fill="#13B5EA" />
      <path
        d="M14 14l12 12M26 14L14 26"
        stroke="#fff"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <text
        x="46"
        y="26"
        fill="#13B5EA"
        fontSize="18"
        fontWeight="800"
        fontFamily="Inter, sans-serif"
      >
        xero
      </text>
    </svg>
  );
}

export function NetSuiteLogo(props: LogoProps) {
  return (
    <svg viewBox="0 0 150 40" fill="none" {...props}>
      <rect x="2" y="6" width="28" height="28" rx="6" fill="#FBB034" />
      <text
        x="16"
        y="26"
        textAnchor="middle"
        fill="#fff"
        fontSize="15"
        fontWeight="800"
        fontFamily="Inter, sans-serif"
      >
        NS
      </text>
      <text
        x="38"
        y="26"
        fill="#1B1B1B"
        fontSize="16"
        fontWeight="700"
        fontFamily="Inter, sans-serif"
      >
        NetSuite
      </text>
    </svg>
  );
}

export function ZohoLogo(props: LogoProps) {
  return (
    <svg viewBox="0 0 120 40" fill="none" {...props}>
      <circle cx="14" cy="20" r="6" fill="#E42527" />
      <circle cx="28" cy="20" r="6" fill="#F9B21D" />
      <circle cx="22" cy="14" r="6" fill="#089949" />
      <circle cx="22" cy="26" r="6" fill="#226DB4" />
      <text
        x="44"
        y="26"
        fill="#226DB4"
        fontSize="17"
        fontWeight="800"
        fontFamily="Inter, sans-serif"
      >
        Zoho
      </text>
    </svg>
  );
}

export function SageLogo(props: LogoProps) {
  return (
    <svg viewBox="0 0 110 40" fill="none" {...props}>
      <circle cx="20" cy="20" r="18" fill="#00DC84" />
      <path
        d="M13 20c0-3.5 3-6 7-6s7 2.5 7 6c-2 0-3-1.2-7-1.2s-5 1.2-7 1.2zm0 0c0 3.5 3 6 7 6s7-2.5 7-6"
        stroke="#fff"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <text
        x="44"
        y="26"
        fill="#00514E"
        fontSize="18"
        fontWeight="800"
        fontFamily="Inter, sans-serif"
      >
        sage
      </text>
    </svg>
  );
}

export function YardiLogo(props: LogoProps) {
  return (
    <svg viewBox="0 0 120 40" fill="none" {...props}>
      <rect x="2" y="6" width="28" height="28" rx="4" fill="#003366" />
      <text
        x="16"
        y="26"
        textAnchor="middle"
        fill="#fff"
        fontSize="16"
        fontWeight="900"
        fontFamily="Georgia, serif"
      >
        Y
      </text>
      <text
        x="38"
        y="26"
        fill="#003366"
        fontSize="17"
        fontWeight="800"
        fontFamily="Inter, sans-serif"
        letterSpacing="0.5"
      >
        YARDI
      </text>
    </svg>
  );
}

export function AppFolioLogo(props: LogoProps) {
  return (
    <svg viewBox="0 0 140 40" fill="none" {...props}>
      <rect x="2" y="6" width="28" height="28" rx="14" fill="#15406C" />
      <path
        d="M10 26l6-14 6 14M12.5 21h7"
        stroke="#fff"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <text
        x="38"
        y="26"
        fill="#15406C"
        fontSize="16"
        fontWeight="800"
        fontFamily="Inter, sans-serif"
      >
        AppFolio
      </text>
    </svg>
  );
}

export function QuickBooksDesktopLogo(props: LogoProps) {
  return (
    <svg viewBox="0 0 170 40" fill="none" {...props}>
      <circle cx="20" cy="20" r="18" fill="#0077C5" />
      <text
        x="20"
        y="26"
        textAnchor="middle"
        fill="#fff"
        fontSize="14"
        fontWeight="800"
        fontFamily="Inter, sans-serif"
      >
        qb
      </text>
      <text
        x="44"
        y="22"
        fill="#0077C5"
        fontSize="14"
        fontWeight="700"
        fontFamily="Inter, sans-serif"
      >
        QuickBooks
      </text>
      <text
        x="44"
        y="34"
        fill="#475569"
        fontSize="10"
        fontWeight="600"
        fontFamily="Inter, sans-serif"
        letterSpacing="1"
      >
        DESKTOP
      </text>
    </svg>
  );
}

/* -------------------- Additional accounting -------------------- */

export function OracleNetSuiteLogo(props: LogoProps) {
  return (
    <svg viewBox="0 0 170 40" fill="none" {...props}>
      <text
        x="2"
        y="20"
        fill="#C74634"
        fontSize="13"
        fontWeight="800"
        fontFamily="Inter, sans-serif"
        letterSpacing="0.5"
      >
        ORACLE
      </text>
      <text
        x="2"
        y="34"
        fill="#1B1B1B"
        fontSize="11"
        fontWeight="800"
        fontFamily="Inter, sans-serif"
        letterSpacing="2"
      >
        NETSUITE
      </text>
    </svg>
  );
}

export function WaveLogo(props: LogoProps) {
  return (
    <svg viewBox="0 0 120 40" fill="none" {...props}>
      <path
        d="M4 22c4-8 8-8 12 0s8 8 12 0"
        stroke="#1B6BFF"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <text
        x="40"
        y="27"
        fill="#1B6BFF"
        fontSize="18"
        fontWeight="800"
        fontFamily="Inter, sans-serif"
      >
        wave
      </text>
    </svg>
  );
}

export function ShopifyLogo(props: LogoProps) {
  return (
    <svg viewBox="0 0 130 40" fill="none" {...props}>
      <path
        d="M19 8c-4 0-7 4-8 8l-5 1v17l15 2 8-2V14c0-3-3-6-7-6h-3z"
        fill="#95BF47"
      />
      <text
        x="34"
        y="27"
        fill="#5A863E"
        fontSize="17"
        fontWeight="800"
        fontFamily="Inter, sans-serif"
      >
        shopify
      </text>
    </svg>
  );
}

/* -------------------- Communication -------------------- */

export function WhatsAppLogo(props: LogoProps) {
  return (
    <svg viewBox="0 0 150 40" fill="none" {...props}>
      <circle cx="20" cy="20" r="14" fill="#25D366" />
      <path
        d="M14 26l1.4-4A8 8 0 1119 26h-.5L14 26z"
        fill="#fff"
        stroke="#fff"
        strokeWidth="0.5"
      />
      <text
        x="40"
        y="26"
        fill="#075E54"
        fontSize="14"
        fontWeight="800"
        fontFamily="Inter, sans-serif"
      >
        WhatsApp
      </text>
    </svg>
  );
}

export function OutlookLogo(props: LogoProps) {
  return (
    <svg viewBox="0 0 140 40" fill="none" {...props}>
      <rect x="4" y="8" width="24" height="24" rx="3" fill="#0078D4" />
      <text
        x="16"
        y="26"
        textAnchor="middle"
        fill="#fff"
        fontSize="16"
        fontWeight="800"
        fontFamily="Inter, sans-serif"
      >
        O
      </text>
      <text
        x="34"
        y="26"
        fill="#0078D4"
        fontSize="14"
        fontWeight="700"
        fontFamily="Inter, sans-serif"
      >
        Outlook
      </text>
    </svg>
  );
}

export function GmailLogo(props: LogoProps) {
  return (
    <svg viewBox="0 0 130 40" fill="none" {...props}>
      <path d="M4 12l14 10 14-10v18H4V12z" fill="#fff" />
      <path d="M4 12v18h6V18L4 12z" fill="#4285F4" />
      <path d="M32 12v18h-6V18l6-6z" fill="#34A853" />
      <path d="M4 12l14 10L32 12l-2-4-12 8L6 8 4 12z" fill="#EA4335" />
      <path d="M18 22l8-6v14h-8v-8z" fill="#FBBC04" />
      <text
        x="40"
        y="26"
        fill="#1B1B1B"
        fontSize="15"
        fontWeight="700"
        fontFamily="Inter, sans-serif"
      >
        Gmail
      </text>
    </svg>
  );
}

export function SkypeLogo(props: LogoProps) {
  return (
    <svg viewBox="0 0 130 40" fill="none" {...props}>
      <circle cx="20" cy="20" r="14" fill="#00AFF0" />
      <text
        x="20"
        y="25"
        textAnchor="middle"
        fill="#fff"
        fontSize="14"
        fontWeight="800"
        fontFamily="Inter, sans-serif"
      >
        S
      </text>
      <text
        x="38"
        y="26"
        fill="#00AFF0"
        fontSize="15"
        fontWeight="800"
        fontFamily="Inter, sans-serif"
      >
        Skype
      </text>
    </svg>
  );
}

export function ZoomLogo(props: LogoProps) {
  return (
    <svg viewBox="0 0 130 40" fill="none" {...props}>
      <rect x="4" y="10" width="24" height="20" rx="5" fill="#2D8CFF" />
      <path d="M11 16h7l5-3v14l-5-3h-7z" fill="#fff" />
      <text
        x="34"
        y="26"
        fill="#2D8CFF"
        fontSize="16"
        fontWeight="800"
        fontFamily="Inter, sans-serif"
      >
        zoom
      </text>
    </svg>
  );
}

export function MicrosoftTeamsLogo(props: LogoProps) {
  return (
    <svg viewBox="0 0 160 40" fill="none" {...props}>
      <rect x="4" y="8" width="24" height="24" rx="3" fill="#4B53BC" />
      <text
        x="16"
        y="27"
        textAnchor="middle"
        fill="#fff"
        fontSize="18"
        fontWeight="800"
        fontFamily="Inter, sans-serif"
      >
        T
      </text>
      <text
        x="34"
        y="22"
        fill="#4B53BC"
        fontSize="11"
        fontWeight="700"
        fontFamily="Inter, sans-serif"
      >
        Microsoft
      </text>
      <text
        x="34"
        y="34"
        fill="#4B53BC"
        fontSize="13"
        fontWeight="800"
        fontFamily="Inter, sans-serif"
      >
        Teams
      </text>
    </svg>
  );
}

export function SlackLogo(props: LogoProps) {
  return (
    <svg viewBox="0 0 120 40" fill="none" {...props}>
      {/* Stylised hash arrangement */}
      <rect x="9" y="6" width="5" height="14" rx="2.5" fill="#E01E5A" />
      <rect x="16" y="14" width="14" height="5" rx="2.5" fill="#36C5F0" />
      <rect x="18" y="22" width="5" height="14" rx="2.5" fill="#2EB67D" transform="translate(0 -16) rotate(180 20.5 22)" />
      <rect x="6" y="22" width="14" height="5" rx="2.5" fill="#ECB22E" />
      <text
        x="38"
        y="26"
        fill="#1B1B1B"
        fontSize="16"
        fontWeight="800"
        fontFamily="Inter, sans-serif"
      >
        slack
      </text>
    </svg>
  );
}

export function TelegramLogo(props: LogoProps) {
  return (
    <svg viewBox="0 0 140 40" fill="none" {...props}>
      <circle cx="20" cy="20" r="14" fill="#26A5E4" />
      <path
        d="M13 20l13-5-2 11-4-2-2 3-1-4 7-6-9 4z"
        fill="#fff"
      />
      <text
        x="40"
        y="26"
        fill="#26A5E4"
        fontSize="14"
        fontWeight="800"
        fontFamily="Inter, sans-serif"
      >
        Telegram
      </text>
    </svg>
  );
}

export function GoogleMeetLogo(props: LogoProps) {
  return (
    <svg viewBox="0 0 150 40" fill="none" {...props}>
      <rect x="6" y="12" width="20" height="16" rx="3" fill="#00897B" />
      <path d="M26 16l8-3v14l-8-3z" fill="#00AC47" />
      <path d="M6 12h6v16H6z" fill="#FFBA00" />
      <path d="M12 28h14v-4H12z" fill="#EA4335" opacity="0.9" />
      <text
        x="42"
        y="26"
        fill="#1B1B1B"
        fontSize="13"
        fontWeight="700"
        fontFamily="Inter, sans-serif"
      >
        Google Meet
      </text>
    </svg>
  );
}

export function WebexLogo(props: LogoProps) {
  return (
    <svg viewBox="0 0 130 40" fill="none" {...props}>
      <circle cx="20" cy="20" r="13" fill="#00BCEB" />
      <circle cx="16" cy="20" r="4" fill="#fff" />
      <circle cx="24" cy="20" r="4" fill="#fff" />
      <text
        x="38"
        y="26"
        fill="#00BCEB"
        fontSize="15"
        fontWeight="800"
        fontFamily="Inter, sans-serif"
      >
        Webex
      </text>
    </svg>
  );
}

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
