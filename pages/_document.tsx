import { FC } from 'react';
import { Html, Head, Main, NextScript } from 'next/document';

const Document: FC = (props) => {
  return (
    <Html style={{scrollBehavior: "smooth"}}>
      <Head>        
        <script type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "IT Konnect",
              "image": "https://itkonnect.in/_next/static/media/itkonnectcoimbatore.e1dd8cec.png",
              "@id": "https://www.instagram.com/it_konnect/",
              "url": "https://itkonnect.in/",
              "telephone": "09894759600",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "",
                "addressLocality": "Coimbatore",
                "postalCode": "",
                "addressCountry": "IN"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "10:00",
                "closes": "19:00"
              },
              "sameAs": [
                "https://www.facebook.com/itkonnect1",
                "https://www.instagram.com/it_konnect/"
              ]
            }`
          }}
        />                  
      </Head>
      
      <body>
        <Main />
        
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;