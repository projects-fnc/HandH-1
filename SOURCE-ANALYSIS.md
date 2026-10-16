# Herbs & Harmony — Source Analysis for the Website

## 1. Source documents reviewed

- **H&H Logo Presentation.pdf** — 33 pages. Brand positioning, logo variations and meaning, palette, and typography.
- **Herbs & Harmony Album.pdf** — 12 pages. Clinic/service presentation, Ayurvedic therapies, cosmetology menu, package pricing, and selected spa-service prices.

## 2. Brand system extracted from the logo presentation

### Brand positioning
The presentation describes Herbs & Harmony as a modern wellness destination bringing together traditional Ayurveda and contemporary cosmetology. Its stated brand promise is **“Beauty, Balance & Beyond.”** The identity is intended to feel natural, elegant, calming, premium, and timeless.

### Logo meaning
Pages 9–12 explain the organic leaf-like form as a reference to nature, healing, renewal and herbs. Two flowing forms communicate balance and harmony, while the negative space between them suggests an “H” for Herbs & Harmony.

### Colour palette
| Role | Colour | HEX |
|---|---|---|
| Primary | Sage Green | `#6F8B7A` |
| Primary neutral | Warm Ivory | `#F7F3EB` |
| Secondary | Soft Sand Beige | `#D8C7B0` |
| Secondary | Muted Olive | `#8E9B74` |
| Accent | Champagne Gold | `#C7A46A` |

These values are taken from pages 14–15 of the logo presentation. The website uses sage and ivory for the main surfaces, sand and olive for supporting elements, and champagne gold sparingly for emphasis.

### Typography
- **Headings:** Cormorant Garamond Bold (page 19).
- **Body/interface text:** Manrope in Regular, Medium and SemiBold (page 20).

The website uses Cormorant Garamond for large editorial-style headings and Manrope for navigation, descriptions, labels and supporting UI.

## 3. Service album content mapped to website sections

- **Page 1:** Brand cover; Herbs & Harmony Ayurveda Wellness & Cosmetology Center; “Beauty Balance & Beyond.”
- **Pages 2–5:** Ayurvedic therapies, including Abhyanga Snana, Swedanam, Head, Neck & Shoulder Massage, Udvarthanam, Shirodhara, Thakradhara, Ksheeradhara, Netra Sekam, Choorna Pinda Swedan (Podi Kizhi), Patra Pottali Swedam (Ela Kizhi), Shastika Pinda Swedam (Njavara Kizhi), and Pizhichil. The listed durations are included on the website.
- **Page 6:** Pain management, joint care and clinical therapies: Cupping Therapy, Dry Needling Therapy, Moxibustion Therapy, Agni Karma, Siddha Varma Therapy, Varicose Vein Relief Care, Foot Reflexology, Clinical Allergy Management, and Swarnaprasham Immunity Program.
- **Page 7:** Three wellness packages: Aham Pure Vow (1 day, 120 minutes, ₹3,500), Harmony Refresh – Normal (3 days, ₹5,500), and Harmony Bliss (5 days, ₹9,500). The website includes the component treatments listed for Aham Pure Vow.
- **Pages 8–11:** Cosmetology menu: two monthly combos; facial treatments; targeted skincare; advanced skin correctives; brow and lip artistry; hair and scalp therapies; alopecia and hair rejuvenation; and body-care services.
- **Page 12:** Listed prices for Therapeutic Foot Spa Pedicure (Foot Only ₹1,100; Foot & Calf ₹1,499) and Therapeutic Hand Spa Manicure (Fore Arm Only ₹999; Full Arm ₹1,299).

## 4. Important missing information

Neither supplied PDF visibly provides a clinic phone number, WhatsApp number, email, physical address, opening hours, social links, or a booking URL. The contact section in the draft labels these items as missing. They should be supplied and verified before launch; none has been invented.

## 5. Static-site interpretation

The website is an ordinary static project: HTML for content, CSS for layout and responsiveness, and a small JavaScript file only for the mobile navigation and current copyright year. There is no database, server-side processing, online booking engine, or contact-form submission endpoint. All internal navigation uses page anchors and native HTML disclosure sections.

## 6. Checks before publishing

1. Verify every listed treatment, spelling, duration, package inclusion and price with the clinic.
2. Add the confirmed clinic contact details and business hours.
3. Confirm final page title, domain and canonical URL after the production domain is known.
4. Decide whether a functional WhatsApp link, booking platform or form provider is required; none is connected in this static draft.

## Updated interaction and design implementation
The current site adds a short branded intro loader, rounded crystal-glass navigation, a scroll progress line, distinct reveal styles across the page, four package cards, a two-panel appointment enquiry layout, and a multi-panel footer curtain reveal. The appointment form is intentionally front-end only until a verified clinic email or a form endpoint is configured. No phone number, address, email, opening hours or practitioner identity is fabricated.

