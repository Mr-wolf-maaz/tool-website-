import type { Tool, Category, BlogPost, PricingPlan } from '@/types'

// ============================================================
// CATEGORIES
// ============================================================
export const CATEGORIES: Category[] = [
  {
    id: 'image',
    name: 'Image Tools',
    icon: '🖼️',
    color: '#7c6af7',
    bgColor: '#1a1730',
    description: 'Compress, resize, convert, and edit images directly in your browser.',
    toolCount: 5,
  },
  {
    id: 'pdf',
    name: 'PDF Tools',
    icon: '📄',
    color: '#f43f5e',
    bgColor: '#1f0912',
    description: 'Merge, split, compress, and convert PDF files with ease.',
    toolCount: 4,
  },
  {
    id: 'text',
    name: 'Text Tools',
    icon: '✏️',
    color: '#22c55e',
    bgColor: '#0a1f0f',
    description: 'Count words, convert case, generate slugs, and clean text.',
    toolCount: 5,
  },
  {
    id: 'dev',
    name: 'Dev Tools',
    icon: '⚙️',
    color: '#38bdf8',
    bgColor: '#0a1f2e',
    description: 'Format JSON, encode Base64, test regex, and pick colors.',
    toolCount: 4,
  },
  {
    id: 'student',
    name: 'Student Tools',
    icon: '🎓',
    color: '#f59e0b',
    bgColor: '#1f1500',
    description: 'Calculate CGPA, manage study time, and generate citations.',
    toolCount: 4,
  },
]

// ============================================================
// TOOLS
// ============================================================
export const TOOLS: Tool[] = [
  // ---- IMAGE ----
  {
    id: 'img-compress',
    slug: 'image-compressor',
    name: 'Image Compressor',
    description: 'Reduce image file size without losing quality',
    longDescription:
      'Our free online Image Compressor reduces JPG, PNG, and WebP file sizes by up to 90% while maintaining visual quality. No uploads to servers — everything runs in your browser for maximum privacy.',
    category: 'image',
    icon: '🗜️',
    color: '#7c6af7',
    bgColor: '#1a1730',
    badge: 'hot',
    uses: '94k',
    trending: true,
    keywords: ['compress image', 'reduce image size', 'image optimizer', 'jpg compressor', 'png optimizer'],
    faqs: [
      { question: 'How much can I reduce image size?', answer: 'Typically 40–90% reduction depending on the original file and chosen quality level.' },
      { question: 'Does it work offline?', answer: 'Yes — all processing happens in your browser. No internet connection needed after loading.' },
      { question: 'What formats are supported?', answer: 'JPG/JPEG, PNG, and WebP. GIF support coming soon.' },
      { question: 'Is there a file size limit?', answer: 'Up to 50MB per image on the free plan. Pro users get up to 500MB.' },
    ],
  },
  {
    id: 'img-resize',
    slug: 'image-resizer',
    name: 'Image Resizer',
    description: 'Resize images to any dimension in seconds',
    longDescription:
      'Resize any image to exact pixel dimensions or by percentage. Lock aspect ratio, set custom dimensions, and export in your preferred format. Perfect for social media, web, and print.',
    category: 'image',
    icon: '📐',
    color: '#7c6af7',
    bgColor: '#1a1730',
    uses: '71k',
    trending: true,
    keywords: ['resize image', 'image resize online', 'change image dimensions', 'scale image', 'photo resizer'],
    faqs: [
      { question: 'Can I resize without distorting the image?', answer: 'Yes, enable "Lock Aspect Ratio" to maintain proportions.' },
      { question: 'What units can I use?', answer: 'Pixels (px), percentage (%), or common presets like 1080p, 4K, social media sizes.' },
      { question: 'Will resizing reduce quality?', answer: 'Upscaling may reduce sharpness. Downscaling is lossless with our smart resampling.' },
      { question: 'Can I resize multiple images?', answer: 'Batch resize is available on the Pro plan.' },
    ],
  },
  {
    id: 'jpg-png',
    slug: 'jpg-to-png',
    name: 'JPG to PNG',
    description: 'Convert JPG images to PNG with transparency support',
    longDescription:
      'Convert JPG images to PNG format instantly. PNG offers lossless compression and transparency support, ideal for logos, icons, and graphics requiring crisp edges.',
    category: 'image',
    icon: '🔄',
    color: '#7c6af7',
    bgColor: '#1a1730',
    uses: '58k',
    keywords: ['jpg to png', 'convert jpg to png', 'jpeg to png converter', 'image format converter'],
    faqs: [
      { question: 'Why convert JPG to PNG?', answer: 'PNG supports transparency and uses lossless compression, making it better for graphics and logos.' },
      { question: 'Will I lose image quality?', answer: 'No — PNG is lossless, so your image quality will be preserved or improved.' },
      { question: 'How long does conversion take?', answer: 'Typically under 1 second for most images, as it runs locally in your browser.' },
      { question: 'Can I convert multiple files?', answer: 'Batch conversion is available on Pro. Free plan supports one file at a time.' },
    ],
  },
  {
    id: 'png-jpg',
    slug: 'png-to-jpg',
    name: 'PNG to JPG',
    description: 'Convert PNG files to compressed JPG format',
    longDescription:
      'Convert PNG images to JPG for smaller file sizes. Ideal for photos and web images where transparency is not needed. Choose your compression quality.',
    category: 'image',
    icon: '🔄',
    color: '#7c6af7',
    bgColor: '#1a1730',
    uses: '42k',
    keywords: ['png to jpg', 'convert png to jpg', 'png to jpeg', 'reduce png size'],
    faqs: [
      { question: 'Why convert PNG to JPG?', answer: 'JPG files are significantly smaller than PNG, making them better for photos and web performance.' },
      { question: 'What happens to transparent areas?', answer: 'Transparent areas are filled with white (or a custom color you can set).' },
      { question: 'What quality level should I use?', answer: '80–85% quality is ideal — visually identical to the original but much smaller.' },
      { question: 'Is my file uploaded to a server?', answer: 'No. All processing is done locally in your browser for maximum privacy.' },
    ],
  },
  {
    id: 'img-crop',
    slug: 'image-cropper',
    name: 'Image Cropper',
    description: 'Crop and trim images to perfect proportions',
    longDescription:
      'Crop images with precision using our drag-and-drop interface. Choose free crop, fixed aspect ratios (1:1, 16:9, 4:3), or enter exact pixel dimensions.',
    category: 'image',
    icon: '✂️',
    color: '#7c6af7',
    bgColor: '#1a1730',
    uses: '31k',
    keywords: ['crop image online', 'image cropper', 'trim image', 'cut image', 'photo crop tool'],
    faqs: [
      { question: 'Can I crop to a specific aspect ratio?', answer: 'Yes — choose from 1:1, 16:9, 4:3, 3:2 or enter a custom ratio.' },
      { question: 'Does it support drag-and-drop?', answer: 'Yes, drag your image into the crop zone or click to browse.' },
      { question: 'What output formats are available?', answer: 'JPG, PNG, and WebP. Choose your preferred format before downloading.' },
      { question: 'Can I undo a crop?', answer: 'Yes, use the reset button to restore the original image.' },
    ],
  },

  // ---- PDF ----
  {
    id: 'pdf-merge',
    slug: 'merge-pdf',
    name: 'Merge PDF',
    description: 'Combine multiple PDFs into a single document',
    longDescription:
      'Merge multiple PDF files into one document with drag-and-drop reordering. Process files securely in your browser without uploading to any server.',
    category: 'pdf',
    icon: '📎',
    color: '#f43f5e',
    bgColor: '#1f0912',
    badge: 'hot',
    uses: '87k',
    trending: true,
    keywords: ['merge pdf', 'combine pdf', 'join pdf files', 'pdf merger online', 'merge pdf free'],
    faqs: [
      { question: 'How many PDFs can I merge?', answer: 'Up to 10 PDFs on the free plan. Pro users can merge unlimited files.' },
      { question: 'Is there a file size limit?', answer: 'Up to 25MB total on free. Pro supports up to 500MB.' },
      { question: 'Can I reorder pages before merging?', answer: 'Yes — drag and drop files to reorder them before merging.' },
      { question: 'Are my files sent to a server?', answer: 'No. PDF processing uses pdf-lib and runs entirely in your browser.' },
    ],
  },
  {
    id: 'pdf-split',
    slug: 'split-pdf',
    name: 'Split PDF',
    description: 'Extract pages or split PDF into multiple files',
    longDescription:
      'Split a PDF by page range, extract individual pages, or split into equal parts. Preview pages before splitting to ensure accuracy.',
    category: 'pdf',
    icon: '📂',
    color: '#f43f5e',
    bgColor: '#1f0912',
    uses: '62k',
    keywords: ['split pdf', 'extract pdf pages', 'pdf splitter', 'divide pdf', 'split pdf online free'],
    faqs: [
      { question: 'Can I extract specific pages?', answer: 'Yes — enter a page range like "1-3,5,7-9" to extract exactly the pages you need.' },
      { question: 'Will splitting reduce quality?', answer: 'No — pages are extracted without re-encoding, preserving 100% quality.' },
      { question: 'What is the maximum file size?', answer: '25MB on free, 500MB on Pro.' },
      { question: 'Can I preview pages before splitting?', answer: 'Yes, the tool shows a page preview so you can verify your selection.' },
    ],
  },
  {
    id: 'pdf-compress',
    slug: 'compress-pdf',
    name: 'Compress PDF',
    description: 'Shrink PDF file size while preserving quality',
    longDescription:
      'Compress PDF files to reduce size for email, upload, or storage. Choose between maximum compression and balanced quality modes.',
    category: 'pdf',
    icon: '🗜️',
    color: '#f43f5e',
    bgColor: '#1f0912',
    uses: '55k',
    trending: true,
    keywords: ['compress pdf', 'reduce pdf size', 'pdf compressor', 'shrink pdf', 'pdf optimizer'],
    faqs: [
      { question: 'How much will compression reduce my PDF?', answer: 'Typically 20–80% depending on the content. Image-heavy PDFs compress most.' },
      { question: 'Will compression affect text readability?', answer: 'No — text is always preserved losslessly. Only images are compressed.' },
      { question: 'Does it support password-protected PDFs?', answer: 'You will need to provide the password to compress protected PDFs.' },
      { question: 'What compression modes are available?', answer: 'Screen (maximum), eBook (balanced), Printer (high quality), and Prepress (professional).' },
    ],
  },
  {
    id: 'pdf-img',
    slug: 'pdf-to-image',
    name: 'PDF to Image',
    description: 'Convert PDF pages to high-quality images',
    longDescription:
      'Convert any PDF page to JPG, PNG, or WebP images at high resolution. Perfect for extracting visuals, creating thumbnails, or sharing specific pages.',
    category: 'pdf',
    icon: '🖼️',
    color: '#f43f5e',
    bgColor: '#1f0912',
    uses: '39k',
    keywords: ['pdf to image', 'convert pdf to jpg', 'pdf to png', 'pdf page screenshot', 'pdf converter'],
    faqs: [
      { question: 'What resolution are the exported images?', answer: '150 DPI (screen), 300 DPI (print), or custom DPI up to 600.' },
      { question: 'Can I convert all pages at once?', answer: 'Yes — export all pages as a ZIP archive or individually.' },
      { question: 'Which image formats are supported?', answer: 'JPG, PNG, and WebP output. WebP gives the best size/quality balance.' },
      { question: 'Does it work for scanned PDFs?', answer: 'Yes — scanned PDFs are converted as raster images at your chosen resolution.' },
    ],
  },

  // ---- TEXT ----
  {
    id: 'word-count',
    slug: 'word-counter',
    name: 'Word Counter',
    description: 'Count words, characters, sentences, and more',
    longDescription:
      'Real-time word and character counter with detailed statistics. Get word count, character count, sentence count, paragraph count, reading time, and keyword density in one tool.',
    category: 'text',
    icon: '🔢',
    color: '#22c55e',
    bgColor: '#0a1f0f',
    badge: 'hot',
    uses: '112k',
    trending: true,
    keywords: ['word counter', 'character counter', 'word count online', 'count words free', 'word frequency'],
    faqs: [
      { question: 'Does it count hyphenated words as one or two?', answer: 'Hyphenated words (e.g., "mother-in-law") are counted as one word.' },
      { question: 'What is the reading time based on?', answer: 'Reading time assumes an average of 200 words per minute for adults.' },
      { question: 'Can I check keyword density?', answer: 'Yes — the keyword density section shows the top 10 most used words and their frequency.' },
      { question: 'Is there a character limit?', answer: 'No limit — paste articles, essays, books, or any length of text.' },
    ],
  },
  {
    id: 'char-count',
    slug: 'character-counter',
    name: 'Character Counter',
    description: 'Count characters including or excluding spaces',
    longDescription:
      'Count characters in real-time with or without spaces. Useful for social media posts (Twitter/X 280 chars), SMS messages, meta descriptions, and more.',
    category: 'text',
    icon: '🔡',
    color: '#22c55e',
    bgColor: '#0a1f0f',
    uses: '68k',
    keywords: ['character counter', 'char count', 'letter counter', 'twitter character count', 'sms character limit'],
    faqs: [
      { question: 'What platforms have character limits?', answer: 'Twitter/X: 280, Instagram bio: 150, Meta description: 155-160, SMS: 160.' },
      { question: 'Does it count emojis correctly?', answer: 'Yes — emojis are counted as their actual Unicode character length (often 2 chars).' },
      { question: 'Can I set a target character count?', answer: 'Yes — enter a target count to see a progress bar and remaining characters.' },
      { question: 'Does it count line breaks?', answer: 'Line breaks count as 1 character each (\\n).' },
    ],
  },
  {
    id: 'case-convert',
    slug: 'case-converter',
    name: 'Case Converter',
    description: 'Transform text to UPPER, lower, Title, camelCase',
    longDescription:
      'Convert text between uppercase, lowercase, title case, sentence case, camelCase, snake_case, kebab-case, and PascalCase instantly. One click, no fuss.',
    category: 'text',
    icon: 'Aa',
    color: '#22c55e',
    bgColor: '#0a1f0f',
    badge: 'new',
    uses: '51k',
    keywords: ['case converter', 'text case changer', 'uppercase lowercase', 'camelcase converter', 'snake case generator'],
    faqs: [
      { question: 'What case formats are supported?', answer: 'UPPERCASE, lowercase, Title Case, Sentence case, camelCase, PascalCase, snake_case, SCREAMING_SNAKE_CASE, kebab-case.' },
      { question: 'Does it handle non-English characters?', answer: 'Yes — accented and Unicode characters are handled correctly for most languages.' },
      { question: 'What is camelCase used for?', answer: 'camelCase is the standard naming convention in JavaScript, Java, and many other languages.' },
      { question: 'What is snake_case used for?', answer: 'snake_case is commonly used in Python, database column names, and file names.' },
    ],
  },
  {
    id: 'slug-gen',
    slug: 'slug-generator',
    name: 'Slug Generator',
    description: 'Generate clean URL slugs from any text',
    longDescription:
      'Convert titles and text into clean, SEO-friendly URL slugs. Removes special characters, replaces spaces with hyphens, and lowercases everything automatically.',
    category: 'text',
    icon: '🔗',
    color: '#22c55e',
    bgColor: '#0a1f0f',
    uses: '29k',
    keywords: ['slug generator', 'url slug', 'seo friendly url', 'permalink generator', 'slug creator'],
    faqs: [
      { question: 'What is a URL slug?', answer: 'A URL slug is the part of a URL after the domain that identifies a specific page, e.g., "/blog/my-first-post".' },
      { question: 'How does it handle special characters?', answer: 'Special characters are removed, spaces become hyphens, and the result is lowercased.' },
      { question: 'Does it handle accented characters?', answer: 'Yes — "Ñoño" becomes "nono", "Café" becomes "cafe" for maximum URL compatibility.' },
      { question: 'Why are clean slugs important for SEO?', answer: 'Clean, descriptive URLs improve click-through rates and help search engines understand your content.' },
    ],
  },
  {
    id: 'remove-dupes',
    slug: 'remove-duplicate-lines',
    name: 'Remove Duplicates',
    description: 'Remove duplicate lines from any text instantly',
    longDescription:
      'Paste any text and remove duplicate lines with one click. Sort results alphabetically, ignore case, or keep the first/last occurrence. Ideal for cleaning lists, emails, and data.',
    category: 'text',
    icon: '🧹',
    color: '#22c55e',
    bgColor: '#0a1f0f',
    uses: '22k',
    keywords: ['remove duplicate lines', 'deduplicate text', 'unique lines', 'remove duplicates online', 'text cleaner'],
    faqs: [
      { question: 'Is the comparison case-sensitive?', answer: 'By default yes, but you can enable case-insensitive mode to treat "Hello" and "hello" as duplicates.' },
      { question: 'Can I sort the results?', answer: 'Yes — optionally sort results alphabetically (A-Z or Z-A) after deduplication.' },
      { question: 'Does it remove blank lines?', answer: 'You can optionally remove blank/empty lines in addition to duplicates.' },
      { question: 'How large a list can I process?', answer: 'There is no hard limit — the tool handles hundreds of thousands of lines without issue.' },
    ],
  },

  // ---- DEV ----
  {
    id: 'json-fmt',
    slug: 'json-formatter',
    name: 'JSON Formatter',
    description: 'Format, validate, and beautify JSON data',
    longDescription:
      'Instantly format, validate, and beautify JSON with syntax highlighting. Minify JSON for production, detect errors with helpful messages, and view structured data clearly.',
    category: 'dev',
    icon: '{ }',
    color: '#38bdf8',
    bgColor: '#0a1f2e',
    badge: 'hot',
    uses: '89k',
    trending: true,
    keywords: ['json formatter', 'json validator', 'json beautifier', 'format json online', 'json parser'],
    faqs: [
      { question: 'What errors can the validator detect?', answer: 'Trailing commas, missing quotes, unclosed brackets, invalid escape sequences, and more.' },
      { question: 'What is JSON minification?', answer: 'Minification removes whitespace from JSON to reduce file size — ideal for production APIs.' },
      { question: 'Can I convert JSON to other formats?', answer: 'JSON to CSV, YAML, and XML conversion coming soon to the Pro plan.' },
      { question: 'Is there syntax highlighting?', answer: 'Yes — strings, numbers, booleans, and null values each have distinct colors.' },
    ],
  },
  {
    id: 'base64',
    slug: 'base64-encoder',
    name: 'Base64 Encoder',
    description: 'Encode and decode Base64 strings instantly',
    longDescription:
      'Encode strings, text, or URLs to Base64 and decode Base64 back to plaintext. Also supports URL-safe Base64 encoding and decoding of binary data.',
    category: 'dev',
    icon: '🔐',
    color: '#38bdf8',
    bgColor: '#0a1f2e',
    uses: '47k',
    keywords: ['base64 encoder', 'base64 decoder', 'encode base64', 'decode base64', 'base64 online tool'],
    faqs: [
      { question: 'What is Base64 used for?', answer: 'Base64 encodes binary data as ASCII text, used in email attachments, data URLs, and API tokens.' },
      { question: 'Is URL-safe Base64 different?', answer: 'Yes — URL-safe Base64 replaces "+" with "-" and "/" with "_" to make strings safe for URLs.' },
      { question: 'Can I encode images to Base64?', answer: 'Yes — upload an image and get its Base64 data URL for use in HTML/CSS.' },
      { question: 'Is there a size limit?', answer: 'Up to 5MB for text encoding. Image Base64 encoding supports up to 2MB.' },
    ],
  },
  {
    id: 'color-pick',
    slug: 'color-picker',
    name: 'Color Picker',
    description: 'Pick colors and convert between HEX, RGB, HSL',
    longDescription:
      'A professional color picker with real-time conversion between HEX, RGB, RGBA, HSL, and HSLA formats. Generate color palettes, check contrast ratios, and copy any format.',
    category: 'dev',
    icon: '🎨',
    color: '#38bdf8',
    bgColor: '#0a1f2e',
    uses: '61k',
    trending: true,
    keywords: ['color picker', 'hex color converter', 'rgb to hex', 'color converter online', 'hsl converter'],
    faqs: [
      { question: 'What color formats does it support?', answer: 'HEX, RGB, RGBA, HSL, HSLA, and HSV. Copy any format with one click.' },
      { question: 'Can it check color contrast?', answer: 'Yes — the contrast checker shows if your color combination meets WCAG AA/AAA accessibility standards.' },
      { question: 'Can I pick colors from an image?', answer: 'The eyedropper tool lets you pick any color from images on your screen (Chrome/Edge only).' },
      { question: 'Does it generate color palettes?', answer: 'Yes — generate complementary, analogous, triadic, and split-complementary palettes.' },
    ],
  },
  {
    id: 'regex-test',
    slug: 'regex-tester',
    name: 'Regex Tester',
    description: 'Test and debug regular expressions live',
    longDescription:
      'Test regular expressions in real-time with live match highlighting. View capture groups, see match count, test flags, and get explanations of your regex patterns.',
    category: 'dev',
    icon: '🔎',
    color: '#38bdf8',
    bgColor: '#0a1f2e',
    badge: 'new',
    uses: '33k',
    keywords: ['regex tester', 'regular expression tester', 'test regex online', 'regex validator', 'regex debugger'],
    faqs: [
      { question: 'What regex flavor does this use?', answer: 'JavaScript (ES2018+) regex engine, the same used in Node.js and all modern browsers.' },
      { question: 'What flags are supported?', answer: 'g (global), i (case-insensitive), m (multiline), s (dotAll), u (unicode), y (sticky).' },
      { question: 'Can I see capture groups?', answer: 'Yes — capture groups are shown in a separate panel with their matched values.' },
      { question: 'Does it explain my regex?', answer: 'Yes — the explanation panel breaks down each part of your regex in plain English.' },
    ],
  },

  // ---- STUDENT ----
  {
    id: 'cgpa-calc',
    slug: 'cgpa-calculator',
    name: 'CGPA Calculator',
    description: 'Calculate your cumulative GPA from grades',
    longDescription:
      'Calculate your Cumulative Grade Point Average (CGPA) by entering course grades and credit hours. Supports 4.0, 5.0, and 10-point grading scales. See your academic standing instantly.',
    category: 'student',
    icon: '📊',
    color: '#f59e0b',
    bgColor: '#1f1500',
    badge: 'hot',
    uses: '78k',
    trending: true,
    keywords: ['cgpa calculator', 'gpa calculator', 'grade point average', 'cumulative gpa', 'sgpa cgpa'],
    faqs: [
      { question: 'What is the difference between GPA and CGPA?', answer: 'GPA is for a single semester; CGPA (Cumulative GPA) is the overall average across all semesters.' },
      { question: 'What grading scale does it use?', answer: 'Defaults to 4.0 scale. You can switch to 5.0 or 10-point scales in the settings.' },
      { question: 'How is CGPA calculated?', answer: 'CGPA = Σ(Grade Points × Credits) / Σ(Credits). Our calculator handles this automatically.' },
      { question: 'Can I save my grades?', answer: 'Grades are saved in your browser\'s local storage. No account needed.' },
    ],
  },
  {
    id: 'study-timer',
    slug: 'study-timer',
    name: 'Study Timer',
    description: 'Focused study sessions with Pomodoro technique',
    longDescription:
      'A fully-featured study timer built on the Pomodoro Technique. Set custom focus/break durations, track completed sessions, and stay productive with audio alerts.',
    category: 'student',
    icon: '⏱️',
    color: '#f59e0b',
    bgColor: '#1f1500',
    uses: '54k',
    trending: true,
    keywords: ['study timer', 'pomodoro timer', 'focus timer', 'study session timer', 'productivity timer'],
    faqs: [
      { question: 'What is the Pomodoro Technique?', answer: 'Work for 25 minutes, take a 5-minute break, and after 4 cycles take a longer 15-30 minute break.' },
      { question: 'Can I customize the timer durations?', answer: 'Yes — set custom focus (1-90 min), short break (1-30 min), and long break (1-60 min) durations.' },
      { question: 'Does it play sounds?', answer: 'Yes — an audio alert plays when each interval ends (with permission). Can be disabled.' },
      { question: 'Does it track my sessions?', answer: 'Yes — today\'s completed Pomodoro sessions are tracked and shown in the stats panel.' },
    ],
  },
  {
    id: 'pomodoro',
    slug: 'pomodoro-timer',
    name: 'Pomodoro Timer',
    description: '25/5 minute focus-break cycles for productivity',
    longDescription:
      'The classic Pomodoro Timer — 25 minutes of focused work followed by a 5-minute break. Simple, distraction-free, and proven to boost productivity.',
    category: 'student',
    icon: '🍅',
    color: '#f59e0b',
    bgColor: '#1f1500',
    uses: '66k',
    keywords: ['pomodoro timer', 'pomodoro technique', '25 minute timer', 'pomodoro clock', 'work break timer'],
    faqs: [
      { question: 'Who invented the Pomodoro Technique?', answer: 'Francesco Cirillo invented it in the late 1980s. The name comes from his tomato-shaped kitchen timer.' },
      { question: 'Is there a mobile app?', answer: 'ToolForge works as a PWA — add it to your home screen for an app-like experience.' },
      { question: 'Can I use it without sound?', answer: 'Yes — visual notifications (tab title changes, browser notifications) work without audio.' },
      { question: 'Does the timer run in the background?', answer: 'Yes — the timer continues running even if you switch tabs or minimize the browser.' },
    ],
  },
  {
    id: 'citation',
    slug: 'citation-generator',
    name: 'Citation Generator',
    description: 'Generate APA, MLA, Chicago citations instantly',
    longDescription:
      'Generate perfectly formatted citations in APA 7th edition, MLA 9th edition, and Chicago style. Enter the source details and get a ready-to-paste citation for your essay or paper.',
    category: 'student',
    icon: '📚',
    color: '#f59e0b',
    bgColor: '#1f1500',
    badge: 'new',
    uses: '41k',
    keywords: ['citation generator', 'apa citation', 'mla citation', 'chicago citation', 'bibliography maker'],
    faqs: [
      { question: 'Which citation formats are supported?', answer: 'APA 7th edition, MLA 9th edition, Chicago 17th edition, and Harvard style.' },
      { question: 'What source types can I cite?', answer: 'Books, journals, websites, YouTube videos, podcasts, newspapers, and more.' },
      { question: 'Is it accurate?', answer: 'Yes — citations are generated according to the latest official style guides. Always double-check critical work.' },
      { question: 'Can I export a full bibliography?', answer: 'Yes — add multiple sources and export a complete formatted bibliography as a Word doc or plain text.' },
    ],
  },
]

// ============================================================
// BLOG POSTS
// ============================================================
export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    slug: 'compress-images-without-losing-quality',
    title: 'How to Compress Images Without Losing Quality in 2025',
    excerpt: 'Learn the best techniques to reduce image file sizes while maintaining visual clarity. Ideal for web, email, and social media.',
    content: 'Full content here...',
    category: 'Image Tips',
    icon: '🖼️',
    date: 'December 12, 2025',
    readTime: '5 min',
    author: 'ToolForge Team',
    tags: ['image compression', 'web performance', 'SEO', 'webp'],
  },
  {
    id: '2',
    slug: 'complete-pomodoro-guide',
    title: 'Boost Your Focus: The Complete Pomodoro Technique Guide',
    excerpt: 'Master the Pomodoro Technique with our study timer. Science-backed strategies to beat procrastination and deep work.',
    content: 'Full content here...',
    category: 'Productivity',
    icon: '🍅',
    date: 'December 8, 2025',
    readTime: '7 min',
    author: 'ToolForge Team',
    tags: ['productivity', 'pomodoro', 'focus', 'study'],
  },
  {
    id: '3',
    slug: 'beginners-guide-to-json',
    title: "The Beginner's Guide to JSON Formatting and Validation",
    excerpt: 'Understand JSON structure, common syntax errors, and how to use our formatter to debug your data instantly.',
    content: 'Full content here...',
    category: 'Developer',
    icon: '{ }',
    date: 'December 3, 2025',
    readTime: '4 min',
    author: 'ToolForge Team',
    tags: ['json', 'developer tools', 'api', 'data'],
  },
  {
    id: '4',
    slug: 'best-pdf-tools-for-students',
    title: 'Best Free PDF Tools for Students in 2025',
    excerpt: 'A complete guide to the best browser-based PDF tools. Merge, compress, and convert PDFs without installing software.',
    content: 'Full content here...',
    category: 'PDF',
    icon: '📄',
    date: 'November 28, 2025',
    readTime: '6 min',
    author: 'ToolForge Team',
    tags: ['pdf', 'student tools', 'free tools', 'productivity'],
  },
  {
    id: '5',
    slug: 'url-slug-seo-guide',
    title: 'What is a URL Slug and Why Does It Matter for SEO?',
    excerpt: 'URL slugs directly impact your SEO rankings and click-through rates. Learn how to craft perfect slugs every time.',
    content: 'Full content here...',
    category: 'SEO',
    icon: '🔗',
    date: 'November 22, 2025',
    readTime: '4 min',
    author: 'ToolForge Team',
    tags: ['seo', 'url slug', 'content marketing', 'web'],
  },
  {
    id: '6',
    slug: 'cgpa-calculation-guide',
    title: 'How to Calculate Your CGPA: A Complete Student Guide',
    excerpt: 'Understand the CGPA formula, grading scales, and use our free calculator to accurately track your academic standing.',
    content: 'Full content here...',
    category: 'Student',
    icon: '🎓',
    date: 'November 18, 2025',
    readTime: '5 min',
    author: 'ToolForge Team',
    tags: ['cgpa', 'gpa', 'student', 'grades', 'academic'],
  },
]

// ============================================================
// PRICING
// ============================================================
export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'free',
    name: 'Free',
    price: 0,
    period: 'forever',
    description: 'All essential tools, completely free.',
    features: [
      { text: 'All 25+ tools', included: true },
      { text: 'Browser-based processing', included: true },
      { text: 'No account required', included: true },
      { text: 'Files up to 25MB', included: true },
      { text: 'Batch processing', included: false },
      { text: 'Ad-free experience', included: false },
      { text: 'API access', included: false },
      { text: 'Priority support', included: false },
    ],
    cta: 'Get Started Free',
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 9,
    period: 'per month',
    description: 'For power users who need more.',
    features: [
      { text: 'Everything in Free', included: true },
      { text: 'Ad-free experience', included: true },
      { text: 'Batch processing (50 files)', included: true },
      { text: 'Files up to 500MB', included: true },
      { text: 'Priority processing', included: true },
      { text: 'Early access to new tools', included: true },
      { text: 'API access', included: false },
      { text: 'Team seats', included: false },
    ],
    cta: 'Upgrade to Pro',
    featured: true,
  },
  {
    id: 'business',
    name: 'Business',
    price: 29,
    period: 'per month',
    description: 'For teams and developers.',
    features: [
      { text: 'Everything in Pro', included: true },
      { text: 'REST API access', included: true },
      { text: '5 team seats', included: true },
      { text: 'Unlimited batch processing', included: true },
      { text: 'Files up to 2GB', included: true },
      { text: 'Custom integrations', included: true },
      { text: 'SLA & dedicated support', included: true },
      { text: 'Usage analytics dashboard', included: true },
    ],
    cta: 'Contact Sales',
  },
]

// ============================================================
// HELPERS
// ============================================================
export function getToolsByCategory(categoryId: string): Tool[] {
  return TOOLS.filter((t) => t.category === categoryId)
}

export function getToolBySlug(slug: string): Tool | undefined {
  return TOOLS.find((t) => t.slug === slug)
}

export function getRelatedTools(tool: Tool, limit = 4): Tool[] {
  return TOOLS.filter((t) => t.category === tool.category && t.id !== tool.id).slice(0, limit)
}

export function getTrendingTools(limit = 8): Tool[] {
  return TOOLS.filter((t) => t.trending).slice(0, limit)
}

export function searchTools(query: string): Tool[] {
  const q = query.toLowerCase()
  return TOOLS.filter(
    (t) =>
      t.name.toLowerCase().includes(q) ||
      t.description.toLowerCase().includes(q) ||
      t.keywords.some((k) => k.includes(q))
  )
}
