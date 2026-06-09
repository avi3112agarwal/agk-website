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

export const QuickBooksLogo = makeImgLogo("/accounting/quickbooks.jpg", "QuickBooks", 2.4);

export const QuickBooksDesktopLogo = makeImgLogo("/accounting/quickbooks.jpg", "QuickBooks Desktop", 2.4);

export const XeroLogo = makeImgLogo("/accounting/xero.svg", "Xero", 2.5);

export const NetSuiteLogo = makeImgLogo("/accounting/netsuite.png", "NetSuite", 2.2);

export const OracleNetSuiteLogo = makeImgLogo("/accounting/netsuite.png", "Oracle NetSuite", 2.2);

export const ZohoLogo = makeImgLogo("/accounting/zoho.webp", "Zoho Books", 3.2);

export const SageLogo = makeImgLogo("/accounting/sage.png", "Sage");

export const YardiLogo = makeImgLogo("/accounting/yardi.png", "Yardi", 2.4);

export const AppFolioLogo = makeImgLogo("/accounting/appfolio.png", "AppFolio", 2.2);

export const WaveLogo = makeImgLogo("/accounting/wave.png", "Wave", 1.4);

export const ShopifyLogo = makeImgLogo("/accounting/shopify.svg", "Shopify", 1.5);

export const ProfitBooksLogo = makeImgLogo("/accounting/profitbooks.png", "ProfitBooks", 2.4);

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

export const SharePointLogo = makeImgLogo("/documents/sharepoint.png", "SharePoint", 2.2);

export const OneDriveLogo = makeImgLogo("/documents/onedrive.png", "OneDrive", 1.6);

export const GoogleDriveLogo = makeImgLogo("/documents/google-drive.png", "Google Drive", 2.4);

export const WeTransferLogo = makeImgLogo("/documents/wetransfer.png", "WeTransfer", 1.8);

export const DropboxLogo = makeImgLogo("/documents/dropbox.png", "Dropbox", 2.2);

export const BoxLogo = makeImgLogo("/documents/box.jpg", "Box", 1.5);

export const NotionLogo = makeImgLogo("/documents/notion.png", "Notion", 2.4);

export const AdobeAcrobatLogo = makeImgLogo("/documents/adobe-acrobat.png", "Adobe Acrobat", 1.0);

export const ICloudLogo = makeImgLogo("/documents/icloud.png", "iCloud", 1.6);

/* -------------------- Catalog -------------------- */

export const accountingLogos = [
  { name: "QuickBooks", Logo: QuickBooksLogo },
  { name: "Xero", Logo: XeroLogo },
  { name: "Oracle NetSuite", Logo: OracleNetSuiteLogo },
  { name: "Zoho Books", Logo: ZohoLogo },
  { name: "Sage", Logo: SageLogo },
  { name: "Yardi", Logo: YardiLogo },
  { name: "AppFolio", Logo: AppFolioLogo },
  { name: "Wave", Logo: WaveLogo },
  { name: "Shopify", Logo: ShopifyLogo },
  { name: "ProfitBooks", Logo: ProfitBooksLogo },
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
