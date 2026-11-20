# One-off import of the facility photos into public/images.
import json
from pathlib import Path
from PIL import Image, ImageOps

ASSETS = Path(r"C:\Users\Lasindu\.cursor\projects\c-Users-Lasindu-Desktop-Rohini-rohini-funeral-directors\assets")
OUT = Path(r"C:\Users\Lasindu\Desktop\Rohini\rohini-funeral-directors\public\images")
JS = Path(r"C:\Users\Lasindu\Desktop\Rohini\rohini-funeral-directors\src\shared\content\galleryPhotos.js")

FILES = [
    "WhatsApp_Image_2026-11-01_at_23.58.50__2_-f577ca4a-4248-4a81-83d3-3ff1699db488.jpg",
    "WhatsApp_Image_2026-11-01_at_23.58.49__1_-eeeddb1a-7f14-49b7-9f54-eae1e341bbfd.jpg",
    "WhatsApp_Image_2026-11-01_at_23.58.49__2_-8460cd82-01e0-4915-93b1-c42e61065d63.jpg",
    "WhatsApp_Image_2026-11-01_at_23.58.49-d0b2b778-02d7-4464-84f2-ed0552f0a080.jpg",
    "WhatsApp_Image_2026-11-01_at_23.58.50__1_-09bf89d1-cc00-4175-b723-cc07a59952be.jpg",
    "WhatsApp_Image_2026-11-01_at_23.58.53__1_-15c24188-8692-4766-8f85-a1fe3bbd6113.jpg",
    "WhatsApp_Image_2026-11-01_at_23.58.51-b91b9989-2c3c-4dbd-927f-301d5f2dfbce.jpg",
    "WhatsApp_Image_2026-11-01_at_23.58.52-e5b06ee4-e592-4940-9eb3-24d13e4de512.jpg",
    "WhatsApp_Image_2026-11-01_at_23.58.50-91a780c1-8777-466d-8053-07fd69e9059d.jpg",
    "WhatsApp_Image_2026-11-01_at_23.58.56__1_-f5b73ae2-a2b4-493c-8f39-eda63ea2c1a7.jpg",
    "WhatsApp_Image_2026-11-01_at_23.58.53-30e896fc-7437-405a-80a1-87d89a0d1944.jpg",
    "WhatsApp_Image_2026-11-01_at_23.58.54-060a6ccf-67db-495f-800d-aacdd245cd63.jpg",
    "WhatsApp_Image_2026-11-01_at_23.58.56__2_-60e40fe5-a3ed-4f8b-a47e-23d467420e1c.jpg",
    "WhatsApp_Image_2026-11-01_at_23.58.56-537d4fb0-39f3-4395-9979-0f8ad1fc7f58.jpg",
    "WhatsApp_Image_2026-11-01_at_23.58.58-8714d30e-d938-411f-a0a9-dd7cdfe8bf71.jpg",
    "WhatsApp_Image_2026-11-01_at_23.58.57-53f87272-da58-4bd6-ab8b-0d94de66963b.jpg",
    "WhatsApp_Image_2026-11-01_at_23.58.58__1_-dee4fd87-6c92-4995-bb25-eede8538d90d.jpg",
    "WhatsApp_Image_2026-11-01_at_23.58.59__1_-5117b660-cf0a-4f9d-8a10-995933efd610.jpg",
    "WhatsApp_Image_2026-11-01_at_23.58.59-90cc797f-ad0f-4a0e-bc50-7509c5553bb1.jpg",
    "WhatsApp_Image_2026-11-01_at_23.59.00__2_-aa916869-19e5-4683-b07c-cc686e74e602.jpg",
    "WhatsApp_Image_2026-11-01_at_23.59.00-c822be17-be5a-4ba2-9361-8a94f9daa61a.jpg",
    "WhatsApp_Image_2026-11-01_at_23.59.02-59d8fe8e-6104-43ce-84d2-a298099fad4f.jpg",
    "WhatsApp_Image_2026-11-01_at_23.59.00__1_-b40429ff-4a28-4c0f-9dbb-d66e682f0652.jpg",
    "WhatsApp_Image_2026-11-01_at_23.58.45__1_-86c48037-282e-46b8-8dcb-e8e215d6fecc.jpg",
    "WhatsApp_Image_2026-11-01_at_23.59.01-4c528893-75a4-463f-a679-53bc5a429e68.jpg",
    "WhatsApp_Image_2026-11-01_at_23.58.54__1_-252a4519-32dc-4fdc-afee-45f80f765796.jpg",
    "WhatsApp_Image_2026-11-01_at_23.59.02__1_-3252bc8b-42f0-4f6f-bf67-b5a2bd053d46.jpg",
    "WhatsApp_Image_2026-11-01_at_23.58.59__2_-b5cf7ee6-a3fd-4a85-85ce-4d955795abd5.jpg",
    "WhatsApp_Image_2026-11-01_at_23.58.45-f3d23bde-d2e5-42a1-9f13-676b3fbbc47a.jpg",
    "WhatsApp_Image_2026-11-01_at_23.58.46-0df998c4-5ccf-45ae-9e20-f75208f6d689.jpg",
    "WhatsApp_Image_2026-11-01_at_23.58.44-2061cbdc-b013-4917-a6b3-1b5ee791261a.jpg",
    "WhatsApp_Image_2026-11-01_at_23.58.46__1_-e4339aff-95d5-44a9-b052-bc00c3b59470.jpg",
    "WhatsApp_Image_2026-11-01_at_23.58.48-5714b7ff-1e67-46ac-be80-cf0c8cafcada.jpg",
    "WhatsApp_Image_2026-11-02_at_00.07.55-fc1b26bb-9db6-474f-964f-89b46b8ff496.jpg",
    "WhatsApp_Image_2026-11-02_at_00.07.55__1_-ad82e040-7d83-469c-adca-45f878b87274.jpg",
    "WhatsApp_Image_2026-11-02_at_00.07.56-1781a5a0-f764-46b8-8fa3-9bcf6a508d83.jpg",
    "WhatsApp_Image_2026-11-02_at_00.08.01__2_-7a1efb85-27c5-437d-aa2f-fe195fa68db0.jpg",
    "WhatsApp_Image_2026-11-02_at_00.08.00__1_-53e800c4-ba3b-4480-bda1-35459d1b7a6a.jpg",
    "WhatsApp_Image_2026-11-02_at_00.08.01__1_-866a4539-4d77-49e7-ab42-90a846e5ecff.jpg",
    "WhatsApp_Image_2026-11-02_at_00.08.00-df80a48d-f59a-4b77-bc1e-f191b5923b83.jpg",
    "WhatsApp_Image_2026-11-02_at_00.08.01-0411d559-8f40-4a3b-8f8c-dcab59a62386.jpg",
    "WhatsApp_Image_2026-11-02_at_00.08.02__1_-c150cb04-b85b-4fbf-b1f7-f8ff0a1d4ada.jpg",
    "WhatsApp_Image_2026-11-02_at_00.08.02__2_-f9f510b4-4fca-4947-8269-52b86bfb4104.jpg",
    "WhatsApp_Image_2026-11-02_at_00.08.05__1_-ac5bd8a0-b231-4838-b7ca-822fc954f3fe.jpg",
    "WhatsApp_Image_2026-11-02_at_00.08.05-865d2170-b423-4a0e-999e-70ff189e12fb.jpg",
    "WhatsApp_Image_2026-11-02_at_00.08.08-bcfebfa0-eafa-41fd-9f58-b09ce90435c4.jpg",
    "WhatsApp_Image_2026-11-02_at_00.08.03-96981fda-e8b2-4deb-a57b-854612b8dd64.jpg",
    "WhatsApp_Image_2026-11-02_at_00.08.04-71375d04-b651-4f52-8032-ce2fa1568729.jpg",
    "WhatsApp_Image_2026-11-02_at_00.08.02-1fe64cdb-f1ca-4216-b55e-bd8c1d98c9fc.jpg",
    "WhatsApp_Image_2026-11-02_at_00.08.05__2_-fbd05d81-18f3-443f-b4d8-95d24c6c6260.jpg",
    "WhatsApp_Image_2026-11-02_at_00.08.07-fbe7a044-9bb9-483f-bb54-a63886afa68d.jpg",
    "WhatsApp_Image_2026-11-02_at_00.08.06-c40531f9-e326-49b1-800e-bab5cec65182.jpg",
    "WhatsApp_Image_2026-11-02_at_00.08.06__1_-11df7b66-d69f-49e4-8d96-21a0c5e84bdc.jpg",
    "WhatsApp_Image_2026-11-02_at_00.08.08__1_-c6350e7d-c1e6-43eb-ba19-7a63890bc2fb.jpg",
    "WhatsApp_Image_2026-11-02_at_00.08.09__1_-99bcdcc2-693b-4271-924a-ebaa15e4e293.jpg",
    "WhatsApp_Image_2026-11-02_at_00.07.44-ac7224fa-e94b-493a-9d40-a07dd139fea6.jpg",
    "WhatsApp_Image_2026-11-02_at_00.08.09-7d83c000-b392-45e6-b721-0f40088290fd.jpg",
    "WhatsApp_Image_2026-11-02_at_00.07.47-db62132e-49d8-4bb5-806c-7dd37a4c21cf.jpg",
    "WhatsApp_Image_2026-11-02_at_00.07.49-ebf991d8-651e-4044-a591-912dfffed93c.jpg",
    "WhatsApp_Image_2026-11-02_at_00.07.47__1_-ebd684e5-700f-42a6-a90f-d8aca8095d49.jpg",
    "WhatsApp_Image_2026-11-02_at_00.07.48__1_-2cf99c58-98d4-4c68-9640-d695a7c6aa20.jpg",
    "WhatsApp_Image_2026-11-02_at_00.07.49__1_-44446fe8-b8c9-4ec3-beef-f6cb84943d8b.jpg",
    "WhatsApp_Image_2026-11-02_at_00.07.48-68cba6bd-a575-46e1-ac1a-9688a1ddfd53.jpg",
    "WhatsApp_Image_2026-11-02_at_00.07.51__1_-907fa995-25b2-4f1d-bff8-6d6352f2b45f.jpg",
    "WhatsApp_Image_2026-11-02_at_00.07.50-ac6d09c0-d686-4012-8a00-26831b836efc.jpg",
    "WhatsApp_Image_2026-11-02_at_00.07.51-bf279ba3-4798-4ab5-8abe-062e0addba67.jpg",
    "WhatsApp_Image_2026-11-02_at_00.07.52-7f880fec-2005-4531-865c-3518669e0946.jpg",
    "WhatsApp_Image_2026-11-02_at_00.07.53-3ea71be8-c990-4d5b-9d9e-6a06dbe3ede1.jpg",
    "WhatsApp_Image_2026-11-02_at_00.07.54-9ebfe7b0-71b6-460a-83b6-f15ef52f0099.jpg",
]

# English title, English alt, Sinhala title, Sinhala alt
CAPTIONS = [
    ("Corridor", "Tiled corridor with a water dispenser", "කොරිඩෝව", "ජල බෝතලය සහිත ටයිල් කොරිඩෝව"),
    ("Waiting Area", "Waiting room with chairs and a ceiling fan", "රැඳී සිටින අවකාශය", "පුටු සහ විදුලි පංකාවක් සහිත රැඳී සිටින කාමරය"),
    ("Office Entrance", "Frosted office door", "කාර්යාල පිවිසුම", "කාර්යාල දොර"),
    ("Family Waiting Room", "Waiting room with chairs along the windows", "පවුල් රැඳී සිටින කාමරය", "ජනේල දිගේ පුටු සහිත රැඳී සිටින කාමරය"),
    ("Rest Room", "Single bed in a quiet rest room", "විවේක කාමරය", "නිහඬ විවේක කාමරයක ඇඳ"),
    ("Funeral Hall", "Funeral hall with seating and a floral bier", "අවමංගල්‍ය ශාලාව", "ආසන සහ මල් සැරසිලි සහිත අවමංගල්‍ය ශාලාව"),
    ("Refreshment Corner", "Side room with seating, a fridge and water", "සැපයුම් කොන", "ශීතකරණය සහ ජලය සහිත පැති කාමරය"),
    ("Dining Hall", "Long hall set with chairs and serving dishes", "භෝජන ශාලාව", "පුටු සහ බඳුන් සහිත දිගු ශාලාව"),
    ("Facilities", "Entrance to the toilets, with flowers by the stairs", "පහසුකම්", "පඩිපෙළ අසල මල් සහිත වැසිකිළි පිවිසුම"),
    ("Floral Tribute", "White floral tribute beside the bier", "මල් උපහාරය", "සමුගැනීම අසල සුදු මල් උපහාරය"),
    ("Funeral Bier", "Canopied bier prepared for a farewell", "සමුගැනීමේ සැකැස්ම", "සමුගැනීම සඳහා සකසන ලද වියන"),
    ("Family Rest Room", "Rest room with a bed and dressing table", "පවුල් විවේක කාමරය", "ඇඳක් සහ ඇඳුම් මේසයක් සහිත විවේක කාමරය"),
    ("Floral Arrangement", "White flowers arranged at the bier", "මල් සැරසිල්ල", "සමුගැනීම අසල සකසන ලද සුදු මල්"),
    ("Upper Balcony", "Open balcony above the street", "ඉහළ බැල්කනිය", "වීදිය දෙසට විවෘත බැල්කනිය"),
    ("Pantry", "Pantry with a drinks fridge and water", "පැන්ට්‍රිය", "බීම ශීතකරණය සහ ජලය සහිත පැන්ට්‍රිය"),
    ("Funeral Parlour", "Parlour with red seating and a floral bier", "අවමංගල්‍ය ශාලාව", "රතු ආසන සහ මල් සැරසිලි සහිත ශාලාව"),
    ("Pantry Sink", "Pantry with a sink, fridge and serving table", "පැන්ට්‍රි සින්ක් එක", "සින්ක් එකක්, ශීතකරණයක් සහ මේසයක් සහිත පැන්ට්‍රිය"),
    ("Coffin", "Burgundy coffin with brass fittings", "මිනීපෙට්ටිය", "පිත්තල සවිකිරීම් සහිත තද රතු මිනීපෙට්ටිය"),
    ("Parlour Seating", "Rows of chairs facing the bier", "ශාලා ආසන", "සමුගැනීම දෙසට පුටු පේළි"),
    ("Coffin Display", "Dark wood coffin with brass handles", "මිනීපෙට්ටි ප්‍රදර්ශනය", "පිත්තල හැඬල සහිත තද දුඹුරු මිනීපෙට්ටිය"),
    ("Coffin", "Burgundy coffin on a stand", "මිනීපෙට්ටිය", "ස්ටෑන්ඩ් එකක් මත තද රතු මිනීපෙට්ටිය"),
    ("Coffin Selection", "Orange coffins ready for selection", "මිනීපෙට්ටි තේරීම", "තේරීම සඳහා සූදානම් තැඹිලි මිනීපෙට්ටි"),
    ("Coffin Showroom", "Coffins arranged in the showroom", "මිනීපෙට්ටි කාමරය", "කාමරය තුළ සකසා ඇති මිනීපෙට්ටි"),
    ("Premises at Night", "Rohini Funeral Directors lit at night", "රාත්‍රියේ පරිශ්‍රය", "රාත්‍රියේ ආලෝකමත් රෝහිණී අවමංගල්‍ය අධ්‍යක්ෂකවරු"),
    ("Coffin", "Orange coffin with brass fittings", "මිනීපෙට්ටිය", "පිත්තල සවිකිරීම් සහිත තැඹිලි මිනීපෙට්ටිය"),
    ("Outdoor Terrace", "Terrace with seating under a covered roof", "එළිමහන් ටෙරසය", "වහලක් යට ආසන සහිත ටෙරසය"),
    ("Coffin", "Orange coffin with decorative brass handles", "මිනීපෙට්ටිය", "සරසන ලද පිත්තල හැඬල සහිත තැඹිලි මිනීපෙට්ටිය"),
    ("Coffin", "Gloss red coffin", "මිනීපෙට්ටිය", "දිලිසෙන රතු මිනීපෙට්ටිය"),
    ("Street Front", "The funeral home from the street at night", "වීදි ඉදිරිපස", "රාත්‍රියේ වීදියෙන් පෙනෙන අවමංගල්‍ය නිවස"),
    ("Parlour Entrance", "Entrance to Parlour 01", "ශාලා පිවිසුම", "ශාලාව 01 වෙත පිවිසුම"),
    ("Rohini Funeral Directors", "Illuminated sign above the premises", "රෝහිණී අවමංගල්‍ය අධ්‍යක්ෂකවරු", "පරිශ්‍රය උඩ ආලෝකමත් නාම පුවරුව"),
    ("Air-Conditioned Parlour", "Parlour with flowers and an air conditioner", "වායුසමන ශාලාව", "මල් සහ වායුසමනය සහිත ශාලාව"),
    ("Parlour", "Parlour with wooden chairs and white flowers", "ශාලාව", "ලී පුටු සහ සුදු මල් සහිත ශාලාව"),
    ("Serenity", "Entrance to the Serenity parlour", "Serenity", "Serenity ශාලාවේ පිවිසුම"),
    ("Rohini Farewell Home", "Illuminated Rohini Farewell Home sign", "රෝහිණී සමුගැනීමේ නිවස", "ආලෝකමත් රෝහිණී සමුගැනීමේ නිවස නාම පුවරුව"),
    ("Farewell Home", "Rohini Farewell Home at night", "සමුගැනීමේ නිවස", "රාත්‍රියේ රෝහිණී සමුගැනීමේ නිවස"),
    ("Office", "Office with a desk and seating", "කාර්යාලය", "මේසයක් සහ ආසන සහිත කාර්යාලය"),
    ("Reception", "Reception table with the Rohini letterhead", "පිළිගැනීම", "රෝහිණී ලිපි ශීර්ෂය සහිත පිළිගැනීමේ මේසය"),
    ("Bathroom", "Bathroom with a shower and washbasin", "නාන කාමරය", "ෂවරයක් සහ වොෂ් බේසමක් සහිත නාන කාමරය"),
    ("Serenity Parlour", "Serenity parlour with covered chairs", "Serenity ශාලාව", "ආවරණය කළ පුටු සහිත Serenity ශාලාව"),
    ("Floral Arch", "White flowers and a brass arch", "මල් ආරුක්කුව", "සුදු මල් සහ පිත්තල ආරුක්කුව"),
    ("Guest Room", "Guest bedroom with a wardrobe", "අමුත්තන්ගේ කාමරය", "ඇඳුම් අල්මාරියක් සහිත නිදන කාමරය"),
    ("Staircase", "Lit staircase with a glass rail", "පඩිපෙළ", "වීදුරු රේල් පීල්ලක් සහිත ආලෝකමත් පඩිපෙළ"),
    ("Farewell Hall", "Hall with white seating and a floral arch", "සමුගැනීමේ ශාලාව", "සුදු ආසන සහ මල් ආරුක්කුවක් සහිත ශාලාව"),
    ("Seating and Counter", "Black chairs beside a long counter", "ආසන සහ කවුන්ටරය", "දිගු කවුන්ටරයක් අසල කළු පුටු"),
    ("Unity", "Nameplate for the Unity parlour", "Unity", "Unity ශාලාවේ නාම පුවරුව"),
    ("Bathroom", "Bathroom with a marble-look shower", "නාන කාමරය", "මාබල් ආකාර ෂවරයක් සහිත නාන කාමරය"),
    ("Grace Parlour", "Grace parlour with covered chairs", "Grace ශාලාව", "ආවරණය කළ පුටු සහිත Grace ශාලාව"),
    ("Evening Pathway", "Lit pathway beside the building", "සන්ධ්‍යා මාර්ගය", "ගොඩනැගිල්ල අසල ආලෝකමත් මාර්ගය"),
    ("Bathroom", "Bathroom with a washbasin and shower", "නාන කාමරය", "වොෂ් බේසමක් සහ ෂවරයක් සහිත නාන කාමරය"),
    ("Covered Driveway", "Covered driveway into the premises", "ආවරණය කළ ඇතුළු මාර්ගය", "පරිශ්‍රයට ආවරණය කළ ඇතුළු මාර්ගය"),
    ("Guest Bedroom", "Guest bedroom with a wooden bed", "අමුත්තන්ගේ නිදන කාමරය", "ලී ඇඳක් සහිත නිදන කාමරය"),
    ("Guest Bedroom", "Guest bedroom with red linen", "අමුත්තන්ගේ නිදන කාමරය", "රතු ඇඳ ඇතිරිලි සහිත නිදන කාමරය"),
    ("Grace", "Nameplate for the Grace parlour", "Grace", "Grace ශාලාවේ නාම පුවරුව"),
    ("Serenity", "Nameplate for the Serenity parlour", "Serenity", "Serenity ශාලාවේ නාම පුවරුව"),
    ("Farewell Home at Night", "Rohini Farewell Home building at night", "රාත්‍රියේ සමුගැනීමේ නිවස", "රාත්‍රියේ රෝහිණී සමුගැනීමේ නිවස ගොඩනැගිල්ල"),
    ("Driveway", "Paved driveway beside the building", "ඇතුළු මාර්ගය", "ගොඩනැගිල්ල අසල අතුරන ලද ඇතුළු මාර්ගය"),
    ("Main Hall", "Main hall with white seating and a lift", "ප්‍රධාන ශාලාව", "සුදු ආසන සහ ලිෆ්ට් එකක් සහිත ප්‍රධාන ශාලාව"),
    ("Farewell Home Building", "Front of Rohini Farewell Home", "සමුගැනීමේ නිවසේ ගොඩනැගිල්ල", "රෝහිණී සමුගැනීමේ නිවසේ ඉදිරිපස"),
    ("Catering", "Catering counter with serving dishes", "කේටරින්", "බඳුන් සහිත කේටරින් කවුන්ටරය"),
    ("Bathroom", "Tiled bathroom with a shower", "නාන කාමරය", "ෂවරයක් සහිත ටයිල් නාන කාමරය"),
    ("Main Hall", "Wide view of the main farewell hall", "ප්‍රධාන ශාලාව", "ප්‍රධාන සමුගැනීමේ ශාලාවේ පුළුල් දසුන"),
    ("Guest Bedroom", "Wooden bed in a guest room", "අමුත්තන්ගේ නිදන කාමරය", "අමුත්තන්ගේ කාමරයක ලී ඇඳ"),
    ("Grace", "Grace parlour looking toward the doorway", "Grace", "දොරටුව දෙසට Grace ශාලාව"),
    ("Catering and Nescafe", "Catering area with a Nescafe machine", "කේටරින් සහ නෙස්කැෆේ", "නෙස්කැෆේ යන්ත්‍රයක් සහිත කේටරින් අවකාශය"),
    ("Serenity", "Serenity parlour with covered seating", "Serenity", "ආවරණය කළ ආසන සහිත Serenity ශාලාව"),
    ("Guest Bedroom", "Guest bedroom with a wardrobe and striped linen", "අමුත්තන්ගේ නිදන කාමරය", "ඇඳුම් අල්මාරියක් සහිත නිදන කාමරය"),
    ("Lift", "Lift in the farewell hall", "ලිෆ්ට්", "සමුගැනීමේ ශාලාවේ ලිෆ්ට් එක"),
    ("Main Hall", "Main hall prepared for a farewell", "ප්‍රධාන ශාලාව", "සමුගැනීමක් සඳහා සකසන ලද ප්‍රධාන ශාලාව"),
]


def main():
    assert len(FILES) == len(CAPTIONS) == 69
    OUT.mkdir(parents=True, exist_ok=True)
    en, si = [], []
    for index, (name, caption) in enumerate(zip(FILES, CAPTIONS), start=1):
        source = ASSETS / name
        if not source.exists():
            raise SystemExit(f"Missing {source}")
        filename = f"gallery-{index:02d}.jpg"
        with Image.open(source) as image:
            image = ImageOps.exif_transpose(image).convert("RGB")
            image.thumbnail((1600, 1600), Image.Resampling.LANCZOS)
            image.save(OUT / filename, "JPEG", quality=82, optimize=True)
        title, alt, si_title, si_alt = caption
        en.append({"image": filename, "title": title, "alt": alt})
        si.append({"image": filename, "title": si_title, "alt": si_alt})
    body = (
        "export const extraGallery = {\n"
        f"  en: {json.dumps(en, ensure_ascii=False, indent=2)},\n"
        f"  si: {json.dumps(si, ensure_ascii=False, indent=2)},\n"
        "};\n"
    )
    JS.write_text(body, encoding="utf-8")
    print(f"wrote {len(en)} images")


if __name__ == "__main__":
    main()
