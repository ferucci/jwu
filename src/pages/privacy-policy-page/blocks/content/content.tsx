import sprite from '@/assets/icons/sprite.svg'
import { TypographyVariant } from '@/common'
import { Typography } from '@/components'
import { APP_ROUTES, CONTACTS } from '@/utils'

import s from './content.module.scss'

export const PrivacyPolicyContent = () => {
  return (
    <div className={s.container}>
      <Typography
        as={'a'}
        className={'link return'}
        href={APP_ROUTES.home}
        variant={TypographyVariant.strong2}
      >
        <svg aria-hidden viewBox={'0 0 24 24'} xmlns={'http://www.w3.org/2000/svg'}>
          <use xlinkHref={`${sprite}#arrow`} />
        </svg>
        Return to home
      </Typography>
      <div className={s.block}>
        <Typography as={'h1'} variant={TypographyVariant.title1}>
          Privacy Policy
        </Typography>
        <div className={s.text}>
          <Typography>
            Last updated: <time dateTime={'2024-07-31'}>July 31, 2024</time>
          </Typography>
          <Typography>
            This Privacy Policy describes Our policies and procedures on&nbsp;the collection, use
            and disclosure of&nbsp;Your information when You use the Service and tells You about
            Your privacy rights and how the law protects You.
          </Typography>
          <Typography>
            We&nbsp;use Your Personal data to&nbsp;provide and improve the Service. By&nbsp;using
            the Service, You agree to&nbsp;the collection and use of&nbsp;information
            in&nbsp;accordance with this Privacy Policy. This Privacy Policy has been created with
            the help of&nbsp;the&nbsp;Free Privacy Policy Generator.
          </Typography>
        </div>
      </div>

      <div className={s.block} id={'interpretation'}>
        <Typography as={'h2'} variant={TypographyVariant.title2}>
          Interpretation and Definitions
        </Typography>

        <div className={s.text}>
          <Typography as={'h3'} variant={TypographyVariant.subtitle}>
            Interpretation
          </Typography>
          <Typography>
            The words of which the initial letter is capitalized have meanings defined under the
            following conditions. The following definitions shall have the same meaning regardless
            of whether they appear in singular or in plural.
          </Typography>
        </div>

        <div className={s.text}>
          <Typography as={'h3'} variant={TypographyVariant.subtitle}>
            Definitions
          </Typography>
          <Typography>For the purposes of this Privacy Policy:</Typography>
          <ul className={s.list}>
            <Typography as={'li'}>
              <Typography as={'strong'}>Account</Typography> means a unique account created for You
              to access our Service or parts of our Service.
            </Typography>
            <Typography as={'li'}>
              <Typography as={'strong'}>Affiliate</Typography> means an entity that controls, is
              controlled by or is under common control with a party, where &quot;control&quot; means
              ownership of 50% or more of the shares, equity interest or other securities entitled
              to vote for election of directors or other managing authority.
            </Typography>
            <Typography as={'li'}>
              <Typography as={'strong'}>Company</Typography> (referred to as either &quot;the
              Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Agreement)
              refers to JWU Media Inc, 63-36 110 street Forest Hills 11375 NY.
            </Typography>
            <Typography as={'li'}>
              <Typography as={'strong'}>Cookies</Typography> are small files that are placed on Your
              computer, mobile device or any other device by a website, containing the details of
              Your browsing history on that website among its many uses.
            </Typography>
            <Typography as={'li'}>
              <Typography as={'strong'}>Country</Typography> refers to: New York, United States
            </Typography>
            <Typography as={'li'}>
              <Typography as={'strong'}>Device</Typography> means any device that can access the
              Service such as a computer, a cellphone or a digital tablet.
            </Typography>
            <Typography as={'li'}>
              <Typography as={'strong'}>Personal Data</Typography> is any information that relates
              to an identified or identifiable individual.
            </Typography>
            <Typography as={'li'}>
              <Typography as={'strong'}>Service</Typography> refers to the Website.
            </Typography>
            <Typography as={'li'}>
              <Typography as={'strong'}>Service Provider</Typography>
              means any natural or legal person who processes the data on behalf of the Company. It
              refers to third-party companies or individuals employed by the Company to facilitate
              the Service, to provide the Service on behalf of the Company, to perform services
              related to the Service or to assist the Company in analyzing how the Service is used.
            </Typography>
            <Typography as={'li'}>
              <Typography as={'strong'}>Usage Data</Typography> refers to data collected
              automatically, either generated by the use of the Service or from the Service
              infrastructure itself (for example, the duration of a page visit).
            </Typography>
            <Typography as={'li'}>
              <Typography as={'strong'}>Website</Typography> refers to JWU media, accessible from
              &nbsp;
              <Typography
                as={'a'}
                className={'link'}
                href={CONTACTS.webSite.href}
                target={'_blank'}
              >
                {CONTACTS.webSite.label}
              </Typography>
            </Typography>
            <Typography as={'li'}>
              <Typography as={'strong'}>You</Typography> means the individual accessing or using the
              Service, or the company, or other legal entity on behalf of which such individual is
              accessing or using the Service, as applicable.
            </Typography>
          </ul>
        </div>
      </div>

      <div className={s.block} id={'collecting'}>
        <Typography as={'h2'} variant={TypographyVariant.title2}>
          Collecting and Using Your Personal Data
        </Typography>
        <div className={s.text}>
          <Typography as={'h3'} variant={TypographyVariant.subtitle}>
            Types of Data Collected
          </Typography>
          <Typography as={'h4'} variant={TypographyVariant.strong1}>
            Personal Data
          </Typography>
          <Typography>
            While using Our Service, We may ask You to provide Us with certain personally
            identifiable information that can be used to contact or identify You. Personally
            identifiable information may include, but is not limited to:
          </Typography>
          <ul className={s.list}>
            <Typography as={'li'}>Email address</Typography>
            <Typography as={'li'}>First name and last name</Typography>
            <Typography as={'li'}>Phone number</Typography>
            <Typography as={'li'}>Usage Data</Typography>
          </ul>
        </div>

        <div className={s.text}>
          <Typography as={'h4'} variant={TypographyVariant.strong1}>
            Usage Data
          </Typography>
          <Typography>Usage Data is collected automatically when using the Service.</Typography>
          <Typography>
            Usage Data may include information such as Your Device&apos;s Internet Protocol address
            (e.g. IP address), browser type, browser version, the pages of our Service that You
            visit, the time and date of Your visit, the time spent on those pages, unique device
            identifiers and other diagnostic data.
          </Typography>
          <Typography>
            When You access the Service by or through a mobile device, We may collect certain
            information automatically, including, but not limited to, the type of mobile device You
            use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile
            operating system, the type of mobile Internet browser You use, unique device identifiers
            and other diagnostic data.
          </Typography>
          <Typography>
            We may also collect information that Your browser sends whenever You visit our Service
            or when You access the Service by or through a mobile device.
          </Typography>
        </div>

        <div className={s.text}>
          <Typography as={'h4'} variant={TypographyVariant.strong1}>
            Tracking Technologies and Cookies
          </Typography>
          <Typography>
            We use Cookies and similar tracking technologies to track the activity on Our Service
            and store certain information. Tracking technologies used are beacons, tags, and scripts
            to collect and track information and to improve and analyze Our Service. The
            technologies We use may include:
          </Typography>
          <ul className={s.list}>
            <Typography as={'li'}>
              <Typography as={'strong'}>Cookies or Browser Cookies.</Typography> A cookie is a small
              file placed on Your Device. You can instruct Your browser to refuse all Cookies or to
              indicate when a Cookie is being sent. However, if You do not accept Cookies, You may
              not be able to use some parts of our Service. Unless you have adjusted Your browser
              setting so that it will refuse Cookies, our Service may use Cookies.
            </Typography>
            <Typography as={'li'}>
              <Typography as={'strong'}>Web Beacons.</Typography> Certain sections of our Service
              and our emails may contain small electronic files known as web beacons (also referred
              to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for
              example, to count users who have visited those pages or opened an email and for other
              related website statistics (for example, recording the popularity of a certain section
              and verifying system and server integrity).
            </Typography>
          </ul>
          <Typography>
            Cookies can be &quot;Persistent&quot; or &quot;Session&quot; Cookies. Persistent Cookies
            remain on Your personal computer or mobile device when You go offline, while Session
            Cookies are deleted as soon as You close Your web browser. Learn more about cookies on
            the{' '}
            <Typography
              as={'a'}
              className={'link'}
              href={
                'https://www.freeprivacypolicy.com/blog/sample-privacy-policy-template/#Use_Of_Cookies_And_Tracking'
              }
              rel={'noreferrer'}
              target={'_blank'}
            >
              Free Privacy Policy website
            </Typography>{' '}
            article.
          </Typography>
          <Typography>
            We use both Session and Persistent Cookies for the purposes set out below:
          </Typography>
          <ul className={s.list}>
            <Typography as={'li'} className={s.noMargin}>
              <Typography as={'strong'}>Necessary / Essential Cookies</Typography>
              <Typography>Type: Session Cookies</Typography>
              <Typography>Administered by: Us</Typography>
              <Typography>
                Purpose: These Cookies are essential to provide You with services available through
                the Website and to enable You to use some of its features. They help to authenticate
                users and prevent fraudulent use of user accounts. Without these Cookies, the
                services that You have asked for cannot be provided, and We only use these Cookies
                to provide You with those services.
              </Typography>
            </Typography>
            <Typography as={'li'} className={s.noMargin}>
              <Typography as={'strong'}>Cookies Policy / Notice Acceptance Cookies</Typography>
              <Typography>Type: Persistent Cookies</Typography>
              <Typography>Administered by: Us</Typography>
              <Typography>
                Purpose: These Cookies identify if users have accepted the use of cookies on the
                Website.
              </Typography>
            </Typography>
            <Typography as={'li'} className={s.noMargin}>
              <Typography as={'strong'}>Functionality Cookies</Typography>
              <Typography>Type: Persistent Cookies</Typography>
              <Typography>Administered by: Us</Typography>
              <Typography>
                Purpose: These Cookies allow us to remember choices You make when You use the
                Website, such as remembering your login details or language preference. The purpose
                of these Cookies is to provide You with a more personal experience and to avoid You
                having to re-enter your preferences every time You use the Website.
              </Typography>
            </Typography>
          </ul>
          <Typography>
            For more information about the cookies we use and your choices regarding cookies, please
            visit our Cookies Policy or the Cookies section of our Privacy Policy.
          </Typography>
        </div>

        <div className={s.text}>
          <Typography as={'h3'} variant={TypographyVariant.subtitle}>
            Use of Your Personal Data
          </Typography>
          <Typography>The Company may use Personal Data for the following purposes:</Typography>
          <ul className={s.list}>
            <Typography as={'li'}>
              <Typography>
                <Typography as={'strong'}>To provide and maintain our Service</Typography>,
                including to monitor the usage of our Service.
              </Typography>
            </Typography>
            <Typography as={'li'}>
              <Typography>
                <Typography as={'strong'}>To manage Your Account:</Typography> to manage Your
                registration as a user of the Service. The Personal Data You provide can give You
                access to different functionalities of the Service that are available to You as a
                registered user.
              </Typography>
            </Typography>
            <Typography as={'li'}>
              <Typography>
                <Typography as={'strong'}>For the performance of a contract:</Typography> the
                development, compliance and undertaking of the purchase contract for the products,
                items or services You have purchased or of any other contract with Us through the
                Service.
              </Typography>
            </Typography>
            <Typography as={'li'}>
              <Typography>
                <Typography as={'strong'}>To contact You:</Typography> To contact You by email,
                telephone calls, SMS, or other equivalent forms of electronic communication, such as
                a mobile application&apos;s push notifications regarding updates or informative
                communications related to the functionalities, products or contracted services,
                including the security updates, when necessary or reasonable for their
                implementation.
              </Typography>
            </Typography>
            <Typography as={'li'}>
              <Typography>
                <Typography as={'strong'}>To provide You</Typography> with news, special offers and
                general information about other goods, services and events which we offer that are
                similar to those that you have already purchased or enquired about unless You have
                opted not to receive such information.
              </Typography>
            </Typography>
            <Typography as={'li'}>
              <Typography>
                <Typography as={'strong'}>To manage Your requests:</Typography> To attend and manage
                Your requests to Us.
              </Typography>
            </Typography>
            <Typography as={'li'}>
              <Typography>
                <Typography as={'strong'}>For business transfers:</Typography> We may use Your
                information to evaluate or conduct a merger, divestiture, restructuring,
                reorganization, dissolution, or other sale or transfer of some or all of Our assets,
                whether as a going concern or as part of bankruptcy, liquidation, or similar
                proceeding, in which Personal Data held by Us about our Service users is among the
                assets transferred.
              </Typography>
            </Typography>
            <Typography as={'li'}>
              <Typography>
                <Typography as={'strong'}>For other purposes</Typography>: We may use Your
                information for other purposes, such as data analysis, identifying usage trends,
                determining the effectiveness of our promotional campaigns and to evaluate and
                improve our Service, products, services, marketing and your experience.
              </Typography>
            </Typography>
          </ul>
          <Typography>
            We may share Your personal information in the following situations:
          </Typography>
          <ul className={s.list}>
            <Typography as={'li'}>
              <Typography as={'strong'}>With Service Providers:</Typography> We may share Your
              personal information with Service Providers to monitor and analyze the use of our
              Service, to contact You.
            </Typography>
            <Typography as={'li'}>
              <Typography as={'strong'}>For business transfers:</Typography> We may share or
              transfer Your personal information in connection with, or during negotiations of, any
              merger, sale of Company assets, financing, or acquisition of all or a portion of Our
              business to another company.
            </Typography>
            <Typography as={'li'}>
              <Typography as={'strong'}>With Affiliates:</Typography> We may share Your information
              with Our affiliates, in which case we will require those affiliates to honor this
              Privacy Policy. Affiliates include Our parent company and any other subsidiaries,
              joint venture partners or other companies that We control or that are under common
              control with Us.
            </Typography>
            <Typography as={'li'}>
              <Typography as={'strong'}>With business partners:</Typography> We may share Your
              information with Our business partners to offer You certain products, services or
              promotions.
            </Typography>
            <Typography as={'li'}>
              <Typography as={'strong'}>With other users:</Typography> when You share personal
              information or otherwise interact in the public areas with other users, such
              information may be viewed by all users and may be publicly distributed outside.
            </Typography>
            <Typography as={'li'}>
              <Typography as={'strong'}>With Your consent</Typography>: We may disclose Your
              personal information for any other purpose with Your consent.
            </Typography>
          </ul>
        </div>

        <div className={s.text}>
          <Typography as={'h3'} variant={TypographyVariant.subtitle}>
            Retention of Your Personal Data
          </Typography>
          <Typography>
            The Company will retain Your Personal Data only for as long as is necessary for the
            purposes set out in this Privacy Policy. We will retain and use Your Personal Data to
            the extent necessary to comply with our legal obligations (for example, if we are
            required to retain your data to comply with applicable laws), resolve disputes, and
            enforce our legal agreements and policies.
          </Typography>
          <Typography>
            The Company will also retain Usage Data for internal analysis purposes. Usage Data is
            generally retained for a shorter period of time, except when this data is used to
            strengthen the security or to improve the functionality of Our Service, or We are
            legally obligated to retain this data for longer time periods.
          </Typography>
        </div>

        <div className={s.text}>
          <Typography as={'h3'} variant={TypographyVariant.subtitle}>
            Transfer of Your Personal Data
          </Typography>
          <Typography>
            Your information, including Personal Data, is processed at the Company&apos;s operating
            offices and in any other places where the parties involved in the processing are
            located. It means that this information may be transferred to — and maintained on —
            computers located outside of Your state, province, country or other governmental
            jurisdiction where the data protection laws may differ than those from Your
            jurisdiction.
          </Typography>
          <Typography>
            Your consent to this Privacy Policy followed by Your submission of such information
            represents Your agreement to that transfer.
          </Typography>
          <Typography>
            The Company will take all steps reasonably necessary to ensure that Your data is treated
            securely and in accordance with this Privacy Policy and no transfer of Your Personal
            Data will take place to an organization or a country unless there are adequate controls
            in place including the security of Your data and other personal information.
          </Typography>
        </div>

        <div className={s.text}>
          <Typography as={'h3'} variant={TypographyVariant.subtitle}>
            Delete Your Personal Data
          </Typography>
          <Typography>
            You have the right to delete or request that We assist in deleting the Personal Data
            that We have collected about You.
          </Typography>
          <Typography>
            Our Service may give You the ability to delete certain information about You from within
            the Service.
          </Typography>
          <Typography>
            You may update, amend, or delete Your information at any time by signing in to Your
            Account, if you have one, and visiting the account settings section that allows you to
            manage Your personal information. You may also contact Us to request access to, correct,
            or delete any personal information that You have provided to Us.
          </Typography>
          <Typography>
            Please note, however, that We may need to retain certain information when we have a
            legal obligation or lawful basis to do so.
          </Typography>
        </div>

        <div className={s.text}>
          <Typography as={'h3'} variant={TypographyVariant.subtitle}>
            Disclosure of Your Personal Data
          </Typography>
          <Typography as={'h4'} variant={TypographyVariant.strong1}>
            Business Transactions
          </Typography>
          <Typography>
            If the Company is involved in a merger, acquisition or asset sale, Your Personal Data
            may be transferred. We will provide notice before Your Personal Data is transferred and
            becomes subject to a different Privacy Policy.
          </Typography>
          <Typography as={'h4'} variant={TypographyVariant.strong1}>
            Law enforcement
          </Typography>
          <Typography>
            Under certain circumstances, the Company may be required to disclose Your Personal Data
            if required to do so by law or in response to valid requests by public authorities (e.g.
            a court or a government agency).
          </Typography>
          <Typography as={'h4'} variant={TypographyVariant.strong1}>
            Other legal requirements
          </Typography>
          <Typography>
            The Company may disclose Your Personal Data in the good faith belief that such action is
            necessary to:
          </Typography>
          <ul className={s.list}>
            <Typography as={'li'}>Comply with a legal obligation</Typography>
            <Typography as={'li'}>
              Protect and defend the rights or property of the Company
            </Typography>
            <Typography as={'li'}>
              Prevent or investigate possible wrongdoing in connection with the Service
            </Typography>
            <Typography as={'li'}>
              Protect the personal safety of Users of the Service or the public
            </Typography>
            <Typography as={'li'}>Protect against legal liability</Typography>
          </ul>
        </div>

        <div className={s.text}>
          <Typography as={'h3'} variant={TypographyVariant.subtitle}>
            Security of Your Personal Data
          </Typography>
          <Typography>
            The security of Your Personal Data is important to Us, but remember that no method of
            transmission over the Internet, or method of electronic storage is 100% secure. While We
            strive to use commercially acceptable means to protect Your Personal Data, We cannot
            guarantee its absolute security.
          </Typography>
        </div>
      </div>

      <div className={s.block} id={'childrens'}>
        <Typography as={'h2'} variant={TypographyVariant.title2}>
          Children&apos;s Privacy
        </Typography>
        <Typography>
          Our Service does not address anyone under the age of 13. We do not knowingly collect
          personally identifiable information from anyone under the age of 13. If You are a parent
          or guardian and You are aware that Your child has provided Us with Personal Data, please
          contact Us. If We become aware that We have collected Personal Data from anyone under the
          age of 13 without verification of parental consent, We take steps to remove that
          information from Our servers.
        </Typography>
        <Typography>
          If We need to rely on consent as a legal basis for processing Your information and Your
          country requires consent from a parent, We may require Your parent&apos;s consent before
          We collect and use that information.
        </Typography>
      </div>

      <div className={s.block} id={'links'}>
        <Typography as={'h2'} variant={TypographyVariant.title2}>
          Links to Other Websites
        </Typography>
        <Typography>
          Our Service may contain links to other websites that are not operated by Us. If You click
          on a third party link, You will be directed to that third party&apos;s site. We strongly
          advise You to review the Privacy Policy of every site You visit.
        </Typography>
        <Typography>
          We have no control over and assume no responsibility for the content, privacy policies or
          practices of any third party sites or services.
        </Typography>
      </div>

      <div className={s.block} id={'changes'}>
        <Typography as={'h2'} variant={TypographyVariant.title2}>
          Changes to this Privacy Policy
        </Typography>
        <Typography>
          We may update Our Privacy Policy from time to time. We will notify You of any changes by
          posting the new Privacy Policy on this page.
        </Typography>
        <Typography>
          We will let You know via email and/or a prominent notice on Our Service, prior to the
          change becoming effective and update the &quot;Last updated&quot; date at the top of this
          Privacy Policy.
        </Typography>
        <Typography>
          You are advised to review this Privacy Policy periodically for any changes. Changes to
          this Privacy Policy are effective when they are posted on this page.
        </Typography>
      </div>

      <div className={s.block} id={'contacts'}>
        <Typography as={'h2'} variant={TypographyVariant.title2}>
          Contact Us
        </Typography>
        <div className={s.text}>
          <Typography>
            If you have any questions about this Privacy Policy, You can contact us:
          </Typography>
          <ul>
            <Typography as={'li'}>
              By email:{' '}
              <Typography as={'a'} className={'link'} href={CONTACTS.email.label}>
                {CONTACTS.email.label}
              </Typography>
            </Typography>
          </ul>
        </div>
      </div>
    </div>
  )
}
